from flask import Flask, render_template  # We need to import flask in order to use it!

app = Flask(__name__)  # Create an instance of flask - activating it, getting it ready for usage


@app.route('/')  # The user will go to localhost:5000/ to activate this route
def index():  # This is the function that runs when the route is activated
    return render_template("index.html", phrase="hello", times=5)


@app.route('/play')
def play(color='#9fc5f8'):
    return render_template("index.html", num=3, col=color)


@app.route('/play/<int:x>')
def play_num(x, color='#9fc5f8'):
    return render_template("index.html", num=x, col=color)


@app.route('/play/<int:x>/<color>')
def play_num_color(x, color='#9fc5f8'):
    return render_template("index.html", num=x, col=color)


if __name__ == "__main__":  # Only run if directly run by the user!
    app.run(debug=True)  # This will start the server!
