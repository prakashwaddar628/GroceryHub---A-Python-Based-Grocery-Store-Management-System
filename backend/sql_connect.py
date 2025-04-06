__cnx = None

from mysql.connector import Error
import mysql.connector


def db_Connect():
    global __cnx
    if __cnx is not None:
        return __cnx
    
    try:
        cnx = mysql.connector.connect(
            user="root", password="root", host="127.0.0.1", database="grocery"
        )
        if cnx.is_connected():
            print("Connected to the database")
            __cnx = cnx
            return __cnx
    except Error as e:
        print(f"Error while connecting to the database: {e}")
        return None