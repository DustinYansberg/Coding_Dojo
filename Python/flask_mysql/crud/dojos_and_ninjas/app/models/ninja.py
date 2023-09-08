from app.config.mysqlconnection import connectToMySQL


class Ninja:
    DB = 'dojos_and_ninjas_schema'

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']

    @classmethod
    def insert(cls, data):
        query = """
                INSERT INTO NINJAS(FIRST_NAME, LAST_NAME, AGE, DOJO_ID)
                VALUES(%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s)
                """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = """SELECT * FROM NINJAS"""
        results = connectToMySQL(cls.DB).query_db(query)
        ninjas = []
        for ninja in results:
            ninjas.append(cls(ninja))
        return ninjas

    @classmethod
    def get_one(cls, ninja_id):
        query = """SELECT * FROM NINJAS WHERE ID = %(ninja_id)s"""
        results = connectToMySQL(cls.DB).query_db(query, ninja_id)
        return results[0]
