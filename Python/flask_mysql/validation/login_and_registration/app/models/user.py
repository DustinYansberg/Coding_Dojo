from app.config.mysqlconnection import connect_to_mysql
from flask import flash


class User:
    DB = "login_auth_db"

    def __init__(self, data):
        self.id = data['ID']
        self.first_name = data['FIRST_NAME']
        self.last_name = data['LAST_NAME']
        self.email = data['EMAIL']
        self.pwd_hash = data['PWD_HASH']

    @classmethod
    def insert_to_db(cls, data):
        query = """
        INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, PWD_HASH)
        VALUES (%(first_name)s,%(last_name)s,%(email)s,%(pwd_hash)s)"""

        return connect_to_mysql(cls.DB).query_db(query, data)

    @classmethod
    def get_one(cls, data):
        if 'email' in data:
            query = """
            SELECT * FROM USERS WHERE EMAIL = %(email)s"""
        else:
            query = """
            SELECT * FROM USERS WHERE ID = %(id)s"""
        results = connect_to_mysql(cls.DB).query_db(query, data)
        if len(results) > 0:
            return cls(results[0])
        return False

    @classmethod
    def login(cls, data):
        query = """
        SELECT * FROM USERS WHERE EMAIL = %(email)s AND PWD_HASH = %(pwd_hash)s"""
        results = connect_to_mysql(cls.DB).query_db(query, data)
        return results[0]

    @staticmethod
    def is_valid(data):
        is_valid = True
        email = {'email': data['email']}
        if len(data['first_name']) < 3:
            flash("First Name must be at least two characters long", "first_name_err")
            is_valid = False
        if len(data['last_name']) < 3:
            flash("Last Name must be at least two characters long", "last_name_err")
            is_valid = False
        if User.get_one(email):
            flash("email already exists", 'email_exist_err')
            is_valid = False
        if len(data['password']) < 8:
            flash("Password must be 8 characters or more", "password_len_err")
            is_valid = False
        if data['password'] != data['password_confirm']:
            flash('Passwords must match!', 'password_confirm_err')
        if is_valid:
            print('EVERYTHING IS VALID')

        return is_valid
