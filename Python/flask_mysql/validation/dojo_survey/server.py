from flask import Flask, redirect, request, render_template, session
from dojos import Dojo

app = Flask(__name__)
app.secret_key = '42'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit():
    data = {'name': request.form['name'], 'location': request.form['location'], 'language': request.form['language'],
            'comment': request.form['comment']}

    if not Dojo.validate_dojo(data):
        return redirect('/')

    Dojo.insert(data)

    session['name'] = data['name']
    session['location'] = data['location']
    session['language'] = data['language']
    session['comment'] = data['comment']

    return redirect('/submitted')


@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')


@app.route('/submitted')
def submitted():
    return render_template('submitted_info.html', name=session['name'], location=session['location'],
                           language=session['language'], comment=session['comment'])


if __name__ == '__main__':
    app.run(debug=True)
