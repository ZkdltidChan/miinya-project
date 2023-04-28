# from flask import Flask
from flask_cors import CORS, cross_origin

# server = Flask(__name__)
# CORS(server)  # allow all origins all methods.
# ALLOW_ORIGINS = ["*"]
# @server.route('/')
# @cross_origin(origins=ALLOW_ORIGINS, methods=["*"])
# def example():
#     return 'Hello, World!'


# if __name__ == '__main__':
#     server.run(debug=True)


from flask import Flask
from common.db import db
from flask_migrate import Migrate
# from flask_script import Manager

from routers.todo_routers import todo_api
from routers.upload_routers import upload_api
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)  # allow all origins all methods.
CORS(app, resources={r'*': {'origins': '*'}})

@app.route('/api/v1')
def hello():
    return 'hello word'

app.register_blueprint(todo_api, url_prefix='/api/v1')
app.register_blueprint(upload_api, url_prefix='/api/v1')

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
