from controllers.base_controller import BaseController
from common.db import db
from models.ai_character_images_model import AiCharacterImagesModel

class AiCharacterImagesController(BaseController):
    def __init__(self):
        super().__init__(AiCharacterImagesModel)