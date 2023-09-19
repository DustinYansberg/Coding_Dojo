from flask import request, render_template, redirect, session
from app import app
import random


@app.route('/')
def game_page():
    if 'num' not in session:
        session['num'] = random.randint(1, 100)
    return render_template('index.html')


@app.route('/guess', methods=['POST'])
def guess():

    session['guess'] = int(request.form['guess'])
    if 'guesses' not in session:
        session['guesses'] = [session['guess']]
    else:
        session['guesses'].append(session['guess'])
    if 'num_of_guesses' not in session:
        session['num_of_guesses'] = 1
    else:
        session['num_of_guesses'] += 1
    return redirect('/')


@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')


@app.route('/win', methods=['POST'])
def win():
    # TODO
    #  if session['guesses'] > User.get_user_with_game_and_score(user_id, game_id).score
    #  then update this user score for this game in the database.
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



