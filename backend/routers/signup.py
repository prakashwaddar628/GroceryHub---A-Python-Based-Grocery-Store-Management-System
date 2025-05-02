from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from passlib.hash import bcrypt
from routers.connection import get_db
from datetime import datetime, timedelta
import jwt
from dotenv import load_dotenv
import os

load_dotenv()
SECRET_KEY = os.getenv("JWT_SECRET")#add env file
ALGORITHM = "HS256"

router = APIRouter()

class SignupRequest(BaseModel):
    name: str
    username: str
    password: str
    confirm_password: str

@router.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(data: SignupRequest):
    db = get_db()
    username = data.username.lower()
    user = db.users.find_one({"username": username})

    if user:
        raise HTTPException(status_code=400, detail="Username already exists")
    
    if not data.password.isalnum() or len(data.password) < 8:
        raise HTTPException(
            status_code=400, detail="Password must be alphanumeric and at least 8 characters long"
        )

    if data.password != data.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    hashed_password = bcrypt.hash(data.password)

    result = db.users.insert_one({
        "name": data.name,
        "username": username,
        "password": hashed_password
    })

    # Generate JWT token
    token_data = {
        "sub": username,
        "exp": datetime.utcnow() + timedelta(hours=2)
    }
    token = jwt.encode(token_data, SECRET_KEY, algorithm=ALGORITHM)

    return {
        "message": "User created successfully",
        "token": token
    }
