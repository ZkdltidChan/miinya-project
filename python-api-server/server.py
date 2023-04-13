from flask import Flask
from flask_cors import CORS, cross_origin

server = Flask(__name__)
CORS(server)  # allow all origins all methods.
ALLOW_ORIGINS = ["*"]
@server.route('/')
@cross_origin(origins=ALLOW_ORIGINS, methods=["*"])
def example():
    return 'Hello, World!'


if __name__ == '__main__':
    server.run(debug=True)
