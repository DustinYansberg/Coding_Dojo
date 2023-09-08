from flask import request, redirect, render_template
from app import app
from app.models.dojo import Dojo


@app.route('/')
def dojos_page():
    dojos = Dojo.get_all()
    return render_template('dojos.html', dojos=dojos)


@app.route('/dojo/add', methods=['POST'])
def add_dojo():
    # print(request.form)
    data = {'dojo_name': request.form['dojo_name']}
    Dojo.create(data)
    return redirect('/')


@app.route('/dojo/<int:dojo_id>/show')
def show_dojo(dojo_id):
    data = {"id": dojo_id}
    print("THIS IS THE DOJO ID THAT WE ARE PASSING INTO Dojo.Ninjas!", dojo_id)
    dojo = Dojo.ninjas(data)
    return render_template('dojo_info.html', dojo=dojo)
