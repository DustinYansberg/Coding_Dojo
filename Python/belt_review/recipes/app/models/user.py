from app.config.mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
from app import DATABASE
from app import app
from flask import flash
from app.models import recipe
bcrypt = Bcrypt(app)
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class User:

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.recipes = []

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO USERS
                (first_name, last_name, email, password)
                VALUES(%(first_name)s,%(last_name)s,%(email)s,%(password)s)"""

        hashed = bcrypt.generate_password_hash(data['password'])

        user_data = {
            **data,
            'password': hashed
        }
        return connectToMySQL(DATABASE).query_db(query, user_data)

    @classmethod
    def get_all(cls):
        pass

    @classmethod
    def get_one(cls, email):
        data = {'email': email}
        query = """
                SELECT *
                FROM USERS
                
                WHERE email = %(email)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if results:
            return cls(results[0])
        return False
    @classmethod
    def get_one_by_id(cls, user_id):
        data = {'id': user_id}
        query = """
                SELECT *
                FROM USERS
                
                WHERE id = %(id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if results:
            return cls(results[0])
        return False

    @classmethod
    def update(cls):
        pass

    @classmethod
    def delete(cls):
        pass

    @classmethod
    def login(cls, data):
        user = cls.get_one(data['email'])

        if not user:
            flash("Error logging in", "login_err")
            return False

        if not bcrypt.check_password_hash(user.password, data['password']):
            flash("Error logging in", "login_err")
            return False
        return user


    @classmethod
    def validate(cls, data):
        is_valid = True
        print()
        if len(data['first_name']) < 3:
            flash("First name must be 3 or more characters", "first_name_err")
            is_valid = False
        if len(data['last_name']) < 3:
            flash("Last name must be 3 or more characters", "last_name_err")
            is_valid = False
        if not EMAIL_REGEX.match(data['email']):
            flash("Email must follow normal email format", "email_err")
            is_valid = False
        if data['password'] != data['password_confirm']:
            flash("passwords do not match", "password_match_err")
            is_valid = False
        if User.get_one(data['email']):
            flash("email is already registered", "user_exist_err")
            is_valid = False
        return is_valid

    @classmethod
    def register(cls, data):
        if not cls.validate(data):
            return False
        cls.create(data)
        user = cls.get_one(data['email'])
        return user

    @classmethod
    def get_user_with_recipes(cls, user_id):
        data={'id': user_id}
        query = """
                SELECT * FROM
                
                USERS LEFT JOIN RECIPES
                ON USERS.ID = RECIPES.USER_ID
                
                WHERE USERS.ID = %(id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)
        if not results:
            return False
        user = cls(results[0])
        for row in results:
            recipe_data = {
                "id": row['RECIPES.id'],
                "name": row['name'],
                "description": row['description'],
                "instructions": row['instructions'],
                "date_cooked": row['date_cooked'],
                "is_quick": row['is_quick'],
                "user_id": row['user_id'],
                "created_at": row['RECIPES.created_at'],
                "updated_at": row['RECIPES.updated_at']

            }

            user.recipes.append(recipe.Recipe(recipe_data))

        return user





