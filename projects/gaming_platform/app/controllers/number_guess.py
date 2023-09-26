from flask import request, redirect, render_template, session
from app import app
from app.models.score import Score
import random


@app.route('/number_guess')
def game_page():
    if 'num' not in session:
        session['num'] = random.randint(1, 100)
    return render_template('games/number_guess.html')


@app.route('/number_guess/guess', methods=['POST'])
def guess():
    """
    track the number of guesses and which guesses have been made. If we found the right number,
     save the score in the DB for the user and game
    :return:
    """

    session['guess'] = int(request.form['guess'])

    if 'guesses' not in session:
        session['guesses'] = [session['guess']]

    else:
        session['guesses'].append(session['guess'])

    if 'num_of_guesses' not in session:
        session['num_of_guesses'] = 1

    else:
        session['num_of_guesses'] += 1

    if session['guess'] == session['num']:
        return redirect('/number_guess/win')

    return redirect('/number_guess')


@app.route('/number_guess/reset', methods=['POST'])
def reset():
    session['num_of_guesses'] = 0
    session['guesses'] = []
    session['num'] = random.randint(1, 100)
    return redirect('/number_guess')


@app.route('/number_guess/win', methods=['POST', 'GET'])
def win():

    data = {
        'user_id': session['uuid'],
        'game_id': 1,
        'score': session['num_of_guesses']}
    score = Score.get_score_of_user(data)

    if not score:
        Score.insert_score(data)
        return redirect('/number_guess')

    if session['num_of_guesses'] < int(score.score):
        Score.update_score(data)

    return redirect('/number_guess')



