from app.config.mysqlconnection import connectToMySQL
from app import DATABASE


class Book:
    def __init__(self, data):
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.id = data['id']
        self.favorited_by = []

    @classmethod
    def get_all(cls):
        query = """SELECT * FROM BOOKS"""
        results = connectToMySQL(DATABASE).query_db(query)

        books = []
        for row in results
            books.append(cls(row))
        return books

    @classmethod
    def insert_to_db(cls, data):
        query = """
                INSERT INTO BOOKS(TITLE)"""
