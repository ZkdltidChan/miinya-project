from common.db import db
from datetime import datetime
from models.ai_character_images_model import AiCharacterImagesModel
from models.base_model import BaseModel

class AiCharactersModel(BaseModel):
    # if none, the table name will be the class name in lowercase
    __tablename__ = 'ai_characters'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    description = db.Column(db.String(80))
    profile_image = db.Column(db.String(150))
    images = db.relationship('AiCharacterImagesModel',
                             backref='images', lazy=True)

    def __init__(self, name, description, profile_image, images=[]):
        self.name = name
        self.description = description
        self.profile_image = profile_image
        self.images = images

    # def add_image(self, levels_id, images):
    #     image_models = []
    #     for image in images:
    #         image_model = AiCharacterImagesModel(
    #             image_url=image, ai_character_id=self.id, levels_id=levels_id)
    #         image_models.append(image_model)
    #     db.session.bulk_save_objects(image_models)
    #     db.session.commit()

    # def delete_image(self, image_id):
    #     image_model = AiCharacterImagesModel.query.get(image_id)
    #     if image_model:
    #         db.session.delete(image_model)
    #         db.session.commit()

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'profile_image': self.profile_image,
            'description': self.description,
            'images': [image.to_dict() for image in self.images],
        }
