from pymongo import MongoClient

def get_db():
    client = MongoClient("mongodb://localhost:27017/")
    db = client["grocery"]
    print(f"MongoDB connected successfully! Connected to database: {db.name} ")
    return db