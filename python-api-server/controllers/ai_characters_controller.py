from controllers.base_controller import BaseController
from common.response_handler import response_handler
from common.db import db
from models.ai_characters_model import AiCharactersModel
from models.ai_character_images_model import AiCharacterImagesModel
from models.levels_model import LevelsModel
from flask import jsonify


class AiCharactersController(BaseController):
    def __init__(self):
        super().__init__(AiCharactersModel)

    @staticmethod
    def add_images(data):
        if not data.get('id'):
            return jsonify('Id is null', 400)
        data.get('levels_id', 1)
        levels_id = data.get('levels_id', 1)
        level_model = LevelsModel.query.get_or_404(levels_id)
        db_model = AiCharactersModel.query.get_or_404(data['id'])

        images = data.get('images', [])
        db_model.add_image(levels_id, images)
        return jsonify(
            response_handler(db_model.to_dict())
        )
