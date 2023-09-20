from app import DATABASE
from app import app
from app.config.mysqlconnection import connectToMySQL
from app.models import score
from flask import flash
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


class User :
    def __init__(self, data):
        self.username = data['username']
        self.id = data['id']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.scores = []

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO
                users(username, password)
                VALUES(%(username)s, %(password)s)"""

        hashed = bcrypt.generate_password_hash(data['password'])

        user_data = {
            **data,
            'password': hashed
        }

        return connectToMySQL(DATABASE).query_db(query, user_data)

    @classmethod
    def get_user_by_id(cls, user_id):
        data = {'user_id': user_id}

        query = """ 
                SELECT * 
        
                FROM users
                
                WHERE id = %(user_id)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if results:
            return cls(results[0])

        return False


    @classmethod
    def get_user_by_username(cls, username):
        data = {'username': username}

        query = """ 
                SELECT * 

                FROM users

                WHERE username = %(username)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)

        if results:
            return cls(results[0])
        return False

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
        """
        Will be useful to show all score info of one user. Maybe on their profile page.
        :param data:
        :return:
        """

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
            score_data = \
                {
                    'score': row['score'],
                    'user_id': row['user_id'],
                    'game_id': row['game_id'],
                    'created_at': row['created_at'],
                    'updated_at': row['updated_at']
                }

            user.scores.append(score.Score(score_data))
        return user

    @classmethod
    def register(cls, data):
        if not cls.validate(data):
            return False
        cls.create(data)
        user = cls.get_user_by_username(data['username'])
        return user

    @classmethod
    def validate(cls, data):
        is_valid = True
        if len(data['username']) < 4:
            flash("Username must be 4 or more characters", "username_len_err")
            is_valid = False
        if len(data['password']) < 4:
            flash("password must be 8 characters", "password_len_err")
            is_valid = False
        if data['password'] != data['password_confirm']:
            flash("passwords do not match", "password_match_err")
            is_valid = False
        if User.get_user_by_username(data['username']):
            flash("username is already registered", "user_exist_err")
            is_valid = False

        return is_valid
