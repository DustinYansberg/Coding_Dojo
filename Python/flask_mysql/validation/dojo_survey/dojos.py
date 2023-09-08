from mysqlconnection import connectToMySQL
from flask import flash


class Dojo:

    DB = 'DOJO_SURVEY_SCHEMA'

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def insert(cls, data):

        query = """
        INSERT INTO DOJOS(NAME,LOCATION,LANGUAGE,COMMENT)
        VALUES(%(name)s,%(location)s,%(language)s,%(comment)s)"""

        return connectToMySQL(cls.DB).query_db(query, data)

    @staticmethod
    def validate_dojo(data):
        is_valid = True
        if len(data['name']) < 3:
            flash("Name must be at least 3 characters", 'name_err')
            is_valid = False
        if len(data['comment']) < 3:
            flash('Comment must be at least 3 characters', 'comment_err')
            is_valid = False
        return is_valid
