from fastapi import APIRouter, HTTPException, Depends, Query
from pydantic import BaseModel
from typing import Optional
from routers.connection import get_db
from pymongo.database import Database
from bson import ObjectId

router = APIRouter()

class Users(BaseModel):
    _id: str 
    name: str
    username: str
    gender: Optional[str] = None
    img: Optional[str] = None
    address: Optional[str] = None

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        fields = {'id': '_id'}

@router.get("/user", response_model=Users)
async def get_user(username: str = Query(...), db: Database = Depends(get_db)):
    user_data = db.users.find_one({"username": username})
    if user_data:
        return Users(**user_data)
    raise HTTPException(status_code=404, detail="User not found")

