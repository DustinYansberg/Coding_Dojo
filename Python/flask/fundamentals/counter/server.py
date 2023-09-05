from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = '42'


@app.route('/')
def index():
    if "visits" not in session:
        session["visits"] = 0
    session["visits"] += 1

    return render_template("index.html", visits=session["visits"])


@app.route('/count_increment', methods=['POST'])
def route_to_count():
    return redirect('/count')


@app.route('/count')
def count():
    session['visits'] += 1
    return render_template('index.html', visits=session['visits'])


@app.route('/destroy_session', methods=['POST'])
def destroy_session():
    session.pop('visits')
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)


