from app.config.mysqlconnection import connectToMySQL
from app.models.ninja import Ninja


class Dojo:
    DB = 'dojos_and_ninjas_schema'

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.updated_at = data['updated_at']
        self.created_at = data['created_at']
        self.all_ninjas = []

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
    def get_one(cls, data):
        query = """SELECT * FROM DOJOS WHERE ID = %(id)s"""
        results = connectToMySQL(cls.DB).query_db(query, data)
        return results[0]

    @classmethod
    def ninjas(cls, data):
        query = """
        SELECT * FROM dojos 
        LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id
        WHERE dojos.id = %(id)s
        """
        results = connectToMySQL(cls.DB).query_db(query, data)
        dojo = cls(results[0])
        for row in results:
            dojo.all_ninjas.append(Ninja(
                {"id": row['ninjas.id'], "first_name": row['first_name'], "last_name": row['last_name'],
                    "age": row['age'], "created_at": row['ninjas.created_at'], "updated_at": row['ninjas.updated_at'],
                    "dojo_id": row['dojo_id']}))
        return dojo
