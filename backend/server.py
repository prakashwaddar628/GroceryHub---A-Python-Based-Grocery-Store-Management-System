from fastapi import FastAPI
from routers import login, signup, addProduct, getProducts, updateProduct, deleteProduct

app = FastAPI()

app.include_router(login.router)
app.include_router(signup.router)
app.include_router(addProduct.router)
app.include_router(getProducts.router)
app.include_router(updateProduct.router)
app.include_router(deleteProduct.router)

@app.get("/")
def root():
    return {"message": "Welcome to the Grocery Hub API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)