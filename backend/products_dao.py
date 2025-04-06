from sql_connect import db_Connect

def get_all_products(connection):
    cursor = connection.cursor()
    try:
        query = (
            "SELECT products.product_id, products.name, products.uom_id, products.price_per_unit, uom.uom_name "
            "FROM products INNER JOIN uom ON products.uom_id = uom.uom_id"
        )
        cursor.execute(query)

        response = []
        for product_id, name, uom_id, price_per_unit, uom_name in cursor:
            response.append({
                "product_id": product_id,
                "name": name,
                "uom_id": uom_id,
                "price_per_unit": float(price_per_unit),
                "uom_name": uom_name,
            })

        print("Products fetched successfully")
        return response
    finally:
        cursor.close()

def insert_into_products(connection, product):
    cursor = connection.cursor()
    try:
        query = (
            "INSERT INTO products (name, uom_id, price_per_unit) "
            "VALUES (%s, %s, %s)"
        )
        cursor.execute(query, (product["name"], product["uom_id"], product["price_per_unit"]))
        connection.commit()
        print(f"Product added successfully with ID: {cursor.lastrowid}")
        return cursor.lastrowid
    finally:
        cursor.close()

def delete_products(connection, product_id):
    cursor = connection.cursor()
    try:
        query = "DELETE FROM products WHERE product_id = %s"
        
        cursor.execute(query, (product_id,))
        connection.commit()
        
        print(f"Product deleted successfully with ID: {product_id}")
        return cursor.lastrowid
    finally:
        cursor.close()

if __name__ == "__main__":
    connection = db_Connect()
    try:
        # Add a product
        new_product_id = insert_into_products(connection, {
            "name": "Potato",
            "uom_id": 1,
            "price_per_unit": 10.0,
        })
        # Delete the product
        delete_product = delete_products(connection, 15)

        # Fetch all products
        all_products = get_all_products(connection)
        for product in all_products:
            print(product)

    finally:
        connection.close()
