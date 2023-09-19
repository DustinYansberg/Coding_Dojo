from flask import request, redirect, render_template
from app import app


@app.route('/number_guess')
def great_number_game():
    return render_template('games/number_guess.html')