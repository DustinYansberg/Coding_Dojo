from flask import request, redirect, render_template, session
from app import app
from app.models.ninja import Ninja
from app.models.dojo import Dojo


@app.route('/ninja/new')
def new_ninja():
    dojos = Dojo.get_all()
    return render_template('add_ninja.html', dojos=dojos)


@app.route('/ninja/add', methods=['POST'])
def add_ninja():

    session['dojo_id'] = request.form['dojo_id']
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['age'] = request.form['age']

    Ninja.insert(session)

    return redirect(f"/dojo/{str(session['dojo_id'])}/show")
