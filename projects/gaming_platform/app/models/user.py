from app import DATABASE
from app.config.mysqlconnection import connectToMySQL
from app.models.score import Score
from flask import flash
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


class User :
    def __init__(self, data):
        self.username = data['username']
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.scores = []

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO
                users(username, first_name, last_name, password)
                VALUES(%(username)s, %(first_name)s, %(last_name)s, %(password)s)"""

        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_user_by_id(cls, user_id):
        data = {'user_id': user_id}

        query = """ 
                SELECT * 
        
                FROM users
                
                WHERE id = %(user_id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if not results:
            return False

        return cls(results[0])


    @classmethod
    def get_user_by_username(cls, username):
        data = {'username': username}

        query = """ 
                SELECT * 

                FROM users

                WHERE username = %(username)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if results:
            return False

        return cls(results[0])

    @classmethod
    def login(cls, data):
        user = cls.get_user_by_username(data['username'])

        if not user:
            flash("Error logging in", "login_err")
            return False

        if not bcrypt.check_password_hash(user.password, data['password']):
            flash("Error logging in", "login_err")
            return False
        return user

    @classmethod
    def get_user_with_scores(cls, data):

        query = """
                SELECT * FROM 
                
                users LEFT JOIN scores
                ON users.id = scores.user_id
                
                WHERE users.id = %(user_id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if not results:
            return False

        user = cls(results[0])

        for row in results:
            score_data = {
                'score': row['score'],
                'user_id': row['user_id'],
                'game_id': row['game_id'],
                'created_at': row['created_at'],
                'updated_at': row['updated_at']
            }

            user.scores.append(Score(score_data))

        return user

