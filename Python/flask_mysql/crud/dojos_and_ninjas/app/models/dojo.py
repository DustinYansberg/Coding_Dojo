from app.config.mysqlconnection import connectToMySQL


class Dojo:

    DB = 'dojos_and_ninjas_schema'

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.updated_at = data['updated_at']
        self.created_at = data['created_at']

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO DOJOS(NAME)
                VALUES(%(dojo_name)s)
                """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = """SELECT * FROM DOJOS"""

        results = connectToMySQL(cls.DB).query_db(query)
        dojos = []

        for dojo in results:
            dojos.append(cls(dojo))
        return dojos

    @classmethod
    def get_one(cls, dojo_id):
        query = """SELECT * FROM DOJOS WHERE ID = %(dojo_id)s"""
        results = connectToMySQL(cls.DB).query_db(query, dojo_id)
        return results[0]

    # TODO GET NINJAS ASSOCIATED WITH DOJO, NOT DOJO INFO


