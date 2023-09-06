from mysql_connection import connectToMySQL


class User:
    DB = "users_schema"

    def __init__(self, user):
        self.id = user['id']
        self.first_name = user['first_name']
        self.last_name = user['last_name']
        self.email = user['email']
        self.created_at = user['created_at']

    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM users;'
        results = connectToMySQL(cls.DB).query_db(query)
        print(results)
        users = []

        for user in results:
            users.append(cls(user))
        return users

    @classmethod
    def db_insert_user(cls,data):
        query = """INSERT INTO users (first_name, last_name, email)
        VALUES(%(f_name)s,%(l_name)s,%(email)s);"""
        result = connectToMySQL(cls.DB).query_db(query, data)
        return result
