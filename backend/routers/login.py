from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from passlib.hash import bcrypt
from routers.connection import get_db

router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str


@router.post("/login")
async def login(data: LoginRequest):
    db = get_db()
    user = db.users.find_one({"username": data.username})

    if user and bcrypt.verify(data.password, user["password"]):
        return {"message": "Logged in successfully"}
    
    raise HTTPException(status_code=401, detail="Incorrect username or password")