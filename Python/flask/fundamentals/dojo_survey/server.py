from flask import Flask, redirect, request, render_template, session

app = Flask(__name__)
app.secret_key = '42'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit():
    print(request.form)
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
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
