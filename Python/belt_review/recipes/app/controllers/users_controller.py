from app import app
from flask import render_template, request, session, redirect
from app.models.recipe import Recipe
from app.models.user import User


@app.route('/')
def default_page():
    return render_template('login.html')


@app.route('/login', methods=['POST'])
def login():
    login_state = User.login(request.form)
    if not login_state:
        return redirect('/')
    session['uuid'] = login_state.id
    return redirect('/home')


@app.route('/home')
def welcome_page():
    if 'uuid' not in session:
        return redirect('/')

    user = User.get_user_with_recipes(session['uuid'])
    if not user:
        user = User.get_one_by_id(session['uuid'])
    all_recipes = Recipe.get_all()
    return render_template('welcome_user.html', user=user, all_recipes=all_recipes)


@app.route('/register', methods=['POST'])
def register():
    user = User.register(request.form)
    if not user:
        redirect('/')
    session['uuid'] = user.id
    return redirect('/home')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
