from flask import redirect, render_template, request
from flask_app import app
from flask_app.models.user import User


@app.route('/')
def begin():
    return redirect('/all_users')  # return render_template('create.html')


@app.route('/new_user')
def new_user():
    return render_template('create.html')


@app.route('/create', methods=['POST'])
def create():
    data = {'f_name': request.form['f_name'], 'l_name': request.form['l_name'], 'email': request.form['email'], }

    User.db_insert_user(data)

    return redirect('/all_users')


@app.route('/all_users')
def all_users():
    users = User.get_all()
    return render_template('read.html', users=users)
