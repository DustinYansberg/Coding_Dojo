from app.config.mysqlconnection import connectToMySQL
from app.models.book import Book
from app import DATABASE


class Author:

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.favorites = []

    @classmethod
    def get_all(cls):
        query = """ SELECT * FROM authors"""

        results = connectToMySQL(DATABASE).query_db(query)

        authors = []
        for row in results:
            authors.append(cls(row))

        return authors

    @classmethod
    def insert_to_db(cls, data):
        query = '''
                INSERT INTO authors(name)
                VALUES(%(name)s)'''
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_one(cls, data):
        query = """
                SELECT * 
                
                FROM USERS 
                WHERE ID = %(id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if len(results) > 0:
            return results[0]

        return False

    @classmethod
    def get_favorites(cls, data):
        query = """
                SELECT * 
                
                FROM AUTHORS 
                
                LEFT JOIN FAVORITES 
                ON AUTHORS.ID = FAVORITES.AUTHOR_ID
                
                LEFT JOIN BOOKS 
                ON FAVORITES.BOOK_ID = BOOKS.ID
                
                WHERE AUTHORS.ID = %(id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)
        author = cls(results[0])

        for row in results:
            book_data = {
                'id': row['books.id'],
                'title': row['title'],
                'num_of_pages': row['num_of_pages']
            }
            author.favorites.append(Book(book_data))
        return author
