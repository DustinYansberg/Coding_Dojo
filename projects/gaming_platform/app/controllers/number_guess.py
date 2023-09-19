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
    session.clear()
    return redirect('/number_guess')


@app.route('/win', methods=['POST'])
def win():
    # TODO
    #  Create user registration and add uuid to session when logging in for this to work!
    data = {
        'user_id': session['uuid'],
        'game_id': 1,
        'score': session['num_of_guesses']}
    score = Score.get_score_of_user(session['uuid'])

    if not score:
        Score.insert_score(data)
        return redirect('/number_guess')

    if session['num_of_guess'] < int(score.score):
        Score.update_score(data)



    """
    will need to add a get user with game score method to user.py
    actually, maybe this can be accomplished without joining the tables?
    just write it in the score.py model. Score.get_score(user_id, game_id)
    the query could be

    SELECT * FROM scores WHERE user_id=%(user_id)s AND game_id= %(game_id)s

    then add a method in the score.py to update
    :return: redirect to '/'
    """
    pass
