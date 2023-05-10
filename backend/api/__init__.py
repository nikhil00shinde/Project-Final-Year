from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    from .userApi import userApi

    app.register_blueprint(userApi, url_prefix="/user")
    return app

