from sql_connect import db_Connect

def get_all_products(connection):
    cursor = connection.cursor()
    query = (
        "select products.product_id, products.name, products.uom_id, products.price_per_unit, uom.uom_name "
        "from products inner join uom on products.uom_id=uom.uom_id"
    )

    cursor.execute(query)

    response = []

    for product_id, name, uom_id, price_per_unit, uom_name in cursor:
        response.append(
            {
                "product_id": product_id,
                "name": name,
                "uom_id": uom_id,
                "price_per_unit": price_per_unit,
                "uom_name": uom_name,
            }
        )
    print("Products fetched successfully")

    return response


if __name__ == "__main__":
    connection = db_Connect()
    add_products = get_all_products(connection)
    for product in add_products:
        print(product)