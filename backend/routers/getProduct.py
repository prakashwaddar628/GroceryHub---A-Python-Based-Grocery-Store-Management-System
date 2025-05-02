from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, HttpUrl
from typing import Optional
from routers.connection import get_db
from pymongo.database import Database
from bson import ObjectId

router = APIRouter()

class Product(BaseModel):
    id: Optional[str] = None
    image: HttpUrl
    name: str
    new_price: float
    old_price: Optional[float] = None
    quantity: int
    description: str
    category: str
    is_available: bool = True
    is_discounted: bool = False
    discount_percentage: Optional[float] = None
    supplier_name: Optional[str] = None

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        fields = {'id': '_id'}

@router.get("/get_product/{product_id}", response_model=Product)
async def get_product(product_id: str, db: Database = Depends(get_db)):
    product_data = db.products.find_one({"_id": ObjectId(product_id)})
    if product_data:
        return Product(**product_data)
    raise HTTPException(status_code=404, detail="Product not found")
