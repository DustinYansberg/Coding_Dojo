from app import DATABASE
from app import app

from app.config.mysqlconnection import connectToMySQL
from flask import flash
from app.models import user


class Score:
    def __init__(self, data):
        self. score = data['high_score']
        self.user_id = data['user_id']
        self.game_id = data['game_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def insert_score(cls, data):
        query = """
                INSERT INTO
        
                scores(high_score, user_id, game_id)
                
                VALUES (%(score)s,%(user_id)s,%(game_id)s)"""
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def update_score(cls, data):
        query = """
                UPDATE scores
                SET high_score = %(score)s
                WHERE user_id=%(user_id)s AND game_id=%(game_id)s"""
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_score_of_user(cls, data):
        query = """
                SELECT * 
                
                FROM scores
                
                WHERE user_id=%(user_id)s AND game_id=%(game_id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if not results:
            return False

        return cls(results[0])


