from flask import request, redirect, render_template, session
from app import app
from app.models.score import Score


@app.route('/button_smasher')
def button_smasher():
    # todo assign session game id to the game id from the db... maybe?
    # session['game_id'] =
    return render_template('games/button_smasher.html')
