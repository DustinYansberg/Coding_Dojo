from app import app
from app.controllers import users_controller
from app.controllers import recipes_controller

if __name__ == "__main__":
    app.run(debug=True)
