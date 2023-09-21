from flask import request, redirect, render_template, session
from app import app
from app.models.user import User
from app.models.score import Score


# from app.models.game import Game


@app.route('/win/<int:game_id>', methods=['POST', 'GET'])
def game_won(game_id):
    data = {
        'user_id': session['uuid'],
        'game_id': game_id,
        'score': int(request.form['score'])
    }
    score = Score.get_score_of_user(data)

    if not score:
        Score.insert_score(data)
        print("score added!")

    if session['num_of_guesses'] < int(score.score):
        Score.update_score(data)
        print("score updated!")

    return f"We are in the win/{game_id} route!"
