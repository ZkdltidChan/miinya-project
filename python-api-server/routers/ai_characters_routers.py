# TODO
from flask import Blueprint, jsonify, request
from controllers.ai_characters_controller import AiCharactersController
ai_characters_api = Blueprint('ai_characters_api', __name__)

controller = AiCharactersController()

@ai_characters_api.route('/ai_characters', methods=['GET'])
def get():
    return controller.get()

@ai_characters_api.route('/ai_characters', methods=['POST'])
def create():
    data = request.get_json()
    return controller.create(data)

@ai_characters_api.route('/ai_characters/<int:id>', methods=['PATCH'])
def update(id):
    data = request.get_json()
    return controller.update(id, data)

@ai_characters_api.route('/ai_characters/<int:id>', methods=['GET'])
def get_id(id):
    return controller.get_by_id(id)


@ai_characters_api.route('/ai_characters/images', methods=['PATCH'])
def add_images():
    data = request.get_json()
    return controller.add_images(data)
