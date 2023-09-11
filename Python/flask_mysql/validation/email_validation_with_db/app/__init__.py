from flask import Flask

app = Flask(__name__)

app.secret_key = '42'

DATABASE = 'email_validation_with_db'
