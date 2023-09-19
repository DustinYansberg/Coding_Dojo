from flask import request, redirect, render_template
from app import app
from app.models.user import User


@app.route('/')
def home_page():
    return render_template('index.html')


@app.route('/games')
def all_games():
    return render_template('all_games.html')
