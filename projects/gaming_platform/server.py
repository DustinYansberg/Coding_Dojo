from app import app
# import controllers
from app.controllers import user_controller, number_guess, button_smasher_controller, games_controller


if __name__ == '__main__':
    app.run(debug=True)
