from flask import Flask, request, jsonify
import products_dao
from sql_connect import db_Connect
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/getProducts', methods=['GET'])
def get_products():
    connection = db_Connect()
    try:
        products = products_dao.get_all_products(connection)
        return jsonify(products)
    finally:
        connection.close()

@app.route('/insertProduct', methods=['POST'])
def insert_product():
    product = request.get_json()
    connection = db_Connect()
    try:
        product_id = products_dao.insert_into_products(connection, product)
        return jsonify({"product_id": product_id})
    finally:
        connection.close()

@app.route('/deleteProduct', methods=['DELETE'])
def delete_product():
    data = request.get_json()
    product_id = data.get("product_id")
    
    if product_id is None:
        return jsonify({"error": "product_id is required"}), 400

    connection = db_Connect()
    try:
        products_dao.delete_products(connection, product_id)
        return jsonify({"message": "Product deleted successfully"})
    finally:
        connection.close()

if __name__ == "__main__":
    print("Starting server...")
    app.run(port=5000, debug=True)
