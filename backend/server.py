from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import login, signup, addProduct, getProduct, updateProduct, getUser

app = FastAPI()

#Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Routers
app.include_router(login.router)
app.include_router(signup.router)
app.include_router(addProduct.router)
app.include_router(getProduct.router)
app.include_router(updateProduct.router)
app.include_router(getUser.router)

@app.get("/")
def root():
    return {"message": "Welcome to the Grocery Hub API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=5000, reload=True)
