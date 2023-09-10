from flask import request, redirect, session, render_template, flash
from app import app
from app.models.user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


@app.route('/')
def landing_page():
    if 'uuid' not in session:
        return render_template('login.html')
    return redirect('/home')


@app.route('/home')
def home_page():
    if 'uuid' not in session:
        return redirect('/')
    user = User.get_one(session)
    return render_template('home_page.html', user=user)


@app.route('/register_process', methods=["POST"])
def register_process():
    pwd_hash = bcrypt.generate_password_hash(request.form['password'])
    data = {'first_name': request.form['first_name'], 'last_name': request.form['last_name'],
            'email': request.form['email'], 'password': request.form['password'],
            'password_confirm': request.form['password_confirm'], 'pwd_hash': pwd_hash}
    if User.is_valid(data):
        User.insert_to_db(data)
        user = User.get_one(data)
        session['uuid'] = user.id
        session['email'] = user.email
        return redirect('/home')
    return redirect('/')


@app.route('/login_process', methods=["POST"])
def login_process():
    data = {'email': request.form['email-login'], }
    user = User.get_one(data)
    if not user:
        flash('invalid email or password', 'login_err')
        return redirect('/')
    if not bcrypt.check_password_hash(user.pwd_hash, request.form['password-login']):
        flash("invalid email or password", 'login_err')
        return redirect('/')
    session['uuid'] = user.id
    session['email'] = user.email
    return redirect('/home')


@app.route('/logout_process', methods=["POST"])
def logout_process():
    session.clear()
    return redirect('/')
