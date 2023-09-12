from app.config.mysqlconnection import connectToMySQL
from app import DATABASE
from flask import flash


class Recipe:
    def __init__(self, data):
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_cooked = data['date_cooked']
        self.is_quick = data['is_quick']
        self.id = data['id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO RECIPES
                (name, description, instructions, date_cooked, is_quick, user_id)
                VALUES(%(name)s,%(description)s,%(instructions)s,%(date_cooked)s,%(is_quick)s,%(user_id)s)"""

        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = """SELECT * FROM RECIPES"""

        recipes = []

        results = connectToMySQL(DATABASE).query_db(query)

        for recipe in results:
            recipes.append(cls(recipe))

        return recipes

    @classmethod
    def get_one(cls, recipe_id):
        data = {
            'id': recipe_id
        }

        query = """
                SELECT *
                FROM RECIPES
                
                WHERE id = %(id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        if results:
            return cls(results[0])

        return False

    @classmethod
    def update(cls, data):
        query = """
                UPDATE RECIPES
                SET name=%(name)s, description=%(description)s, instructions=%(instructions)s, 
                date_cooked=%(date_cooked)s, is_quick=%(is_quick)s
                WHERE id = %(id)s"""

        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = """
                DELETE
                
                FROM RECIPES
                
                WHERE id = %(id)s
                """
        return connectToMySQL(DATABASE).query_db(query, data)
