from common.db import db
from datetime import datetime

from models.base_model import BaseModel

class TabsModel(BaseModel):
    __tablename__ = 'tabs'
    name = db.Column(db.String(80))
    def __init__(self, name, **kwargs):
        super().__init__(**kwargs)
        self.name = name

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }
