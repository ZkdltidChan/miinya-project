from common.db import db
from datetime import datetime
from models.base_model import BaseModel


class LevelsModel(BaseModel):
    # if none, the table name will be the class name in lowercase
    __tablename__ = 'levels'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    db_ai_character_images = db.relationship('AiCharacterImagesModel', backref='levels', lazy=True)

    def __init__(self, name):
        self.name = name

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }
