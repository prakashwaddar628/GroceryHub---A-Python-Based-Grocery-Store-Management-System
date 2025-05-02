from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, HttpUrl
from typing import Optional
from routers.connection import get_db
from pymongo.database import Database

router = APIRouter()

class Product(BaseModel):
    image_url: HttpUrl
    name: str
    price: float
    old_price: Optional[float] = None
    quantity: int
    description: str
    category: str
    is_available: bool = True
    is_discounted: bool = False
    discount_percentage: Optional[float] = None
    supplier_name: Optional[str] = None

@router.post("/update_products")
def update_product(product: Product, db: Database = Depends(get_db)):
    product_dict = product.dict()

    if product.is_discounted and product.discount_percentage is not None:
        product_dict["old_price"] = product.price * (1 - product.discount_percentage / 100)
    else:
        product_dict["old_price"] = product.price

    result = db.products.insert_one(product_dict)

    if result.inserted_id:
        return {"message": "Product added successfully", "id": str(result.inserted_id)}
    else:
        raise HTTPException(status_code=500, detail="Failed to add product")
