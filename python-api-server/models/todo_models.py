from common.db import db
from datetime import datetime

class TodoModel(db.Model):
    # if none, the table name will be the class name in lowercase
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    description = db.Column(db.String(80))
    done = db.Column(db.Boolean)
    image_url = db.Column(db.String(150))

    def __init__(self, title, description, done, image_url):
        self.title = title
        self.description = description
        self.done = done
        self.image_url = image_url

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'done': self.done,
            'image_url': self.image_url,
        }
