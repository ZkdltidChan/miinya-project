# TODO
from flask import Blueprint, jsonify, request
from controllers.ai_character_images_controller import AiCharacterImagesController
ai_character_images_api = Blueprint('ai_character_images_api', __name__)

controllers = AiCharacterImagesController()

@ai_character_images_api.route('/ai_character_images', methods=['GET'])
def get_todos():
    return controllers.get_character_images()
