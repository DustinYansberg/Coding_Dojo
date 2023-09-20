from flask import request, redirect, render_template, session
from app import app
from app.models.user import User


@app.route('/')
def home_page():
    return render_template('index.html')


@app.route('/games')
def all_games():
    return render_template('all_games.html')


@app.route('/register', methods=['POST'])
def register():
    user = User.register(request.form)

    if not user:
        return redirect('/')

    session['uuid'] = user.id

    return redirect('/games')


@app.route('/login', methods=['POST'])
def login():
    print(request.form)
    user = User.login(request.form)
    if not user:
        return redirect('/')
    session['uuid'] = user.id
    return redirect('/games')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
