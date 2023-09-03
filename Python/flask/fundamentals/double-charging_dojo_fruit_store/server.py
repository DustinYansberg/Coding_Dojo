from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/checkout', methods=['POST'])
def checkout():
    print(request.form)

    straw_q = request.form['strawberry']
    raspb_q = request.form['raspberry']
    apple_q = request.form['apple']
    fi_name = request.form['first_name']
    la_name = request.form['last_name']
    stud_id = request.form['student_id']

    return render_template("checkout.html", straw_q=straw_q, raspb_q=raspb_q, apple_q=apple_q, fi_name=fi_name,
                           la_name=la_name, stud_id=stud_id)


@app.route('/fruits')
def fruits():
    strawberry_img = './static/img/strawberry.png'
    apple_img = './static/img/apple.png'
    blackberry_img = './static/img/blackberry.png'
    raspberry_img = './static/img/raspberry.png'
    return render_template("fruits.html", strawberry=strawberry_img, blackberry=blackberry_img, apple=apple_img,
                           raspberry=raspberry_img)


if __name__ == "__main__":
    app.run(debug=True)
