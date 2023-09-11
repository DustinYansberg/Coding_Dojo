from app import app
# TODO import controllers
from app.controllers import email_controller

if __name__ == '__main__':
    app.run(debug=True)
