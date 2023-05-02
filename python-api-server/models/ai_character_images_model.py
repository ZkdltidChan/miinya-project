from common.db import db
from models.base_model import BaseModel

class AiCharacterImagesModel(BaseModel):
    # if none, the table name will be the class name in lowercase
    __tablename__ = 'ai_character_images'
    id = db.Column(db.Integer, primary_key=True)
    ai_character_id = db.Column(db.Integer, db.ForeignKey('ai_characters.id'),
                             nullable=False)
    levels_id = db.Column(db.Integer, db.ForeignKey('levels.id'),
                         nullable=False)
    image_url = db.Column(db.String(150))

    def __init__(self, ai_character_id,
                  levels_id, 
                  image_url):
        self.ai_character_id = ai_character_id
        self.levels_id = levels_id
        self.image_url = image_url

    def to_dict(self):
        return {
            'id': self.id,
            'levels_id': self.levels_id,
            'image_url': self.image_url,
        }
