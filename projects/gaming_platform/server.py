from app import app
# import controllers
from app.controllers import user_controller, number_guess


if __name__ == '__main__':
    app.run(debug=True)
