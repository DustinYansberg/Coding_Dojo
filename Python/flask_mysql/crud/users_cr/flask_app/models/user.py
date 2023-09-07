from flask_app.config.mysql_connection import connectToMySQL


class User:
    DB = "users_schema"

    def __init__(self, user):
        self.id = user['id']
        self.first_name = user['first_name']
        self.last_name = user['last_name']
        self.email = user['email']
        # The updated_at and created_at columns are reversed in the database. Swap them in code for a short term fix.
        self.created_at = user['updated_at']
        self.updated_at = user['created_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.DB).query_db(query)
        print(results)
        users = []

        for user in results:
            users.append(cls(user))
        return users

    @classmethod
    def get_one(cls, user_id):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        data = {'id': user_id}
        results = connectToMySQL(cls.DB).query_db(query, data)
        return cls(results[0])

    @classmethod
    def db_insert_user(cls, data):
        query = """
                INSERT INTO users (first_name, last_name, email)
                VALUES(%(f_name)s,%(l_name)s,%(email)s);
                """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def update(cls, data):
        query = """
                UPDATE users 
                SET first_name=%(fname)s,last_name=%(lname)s,email=%(email)s 
                WHERE id = %(id)s;
                """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def delete(cls, user_id):
        query = "DELETE FROM users WHERE id = %(id)s;"
        data = {"id": user_id}
        return connectToMySQL(cls.DB).query_db(query, data)
