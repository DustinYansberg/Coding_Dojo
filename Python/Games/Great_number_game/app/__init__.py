from flask import Flask

app = Flask(__name__)

app.secret_key = '42'

DATABASE = 'great_number_game'
