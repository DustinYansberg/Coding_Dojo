from app import DATABASE
from flask import flash
from app.config.mysqlconnection import connectToMySQL
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class Email:
    def __init__(self, data):
        self.email = data['email']
        self.id = data['id']
        self.created_at = data['created_at']

    @staticmethod
    def is_valid(data):
        is_valid = True
        if not EMAIL_REGEX.match(data['email']):
            flash('Invalid Email address!')
            is_valid = False
        if Email.get_one(data):
            flash("Email already exists!")
            is_valid = False
        return is_valid

    @classmethod
    def get_all(cls):
        query = '''SELECT * FROM emails'''
        results = connectToMySQL(DATABASE).query_db(query)
        emails = []
        for row in results:
            emails.append(cls(row))
        return emails

    @classmethod
    def insert_to_db(cls, data):
        query = '''
                INSERT INTO emails(email)
                VALUES(%(email)s)'''
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_one(cls, data):
        if data['id']:
            query = """SELECT * FROM emails WHERE id=%(id)s"""
        else:
            query = """SELECT * FROM emails WHERE email=%(email)s"""

        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) > 0:
            return results[0]
        return False

    @classmethod
    def delete(cls, email_id):
        data = {
            'email_id': email_id
        }
        query = """DELETE from emails WHERE id=%(email_id)s"""
        return connectToMySQL(DATABASE).query_db(query, data)
