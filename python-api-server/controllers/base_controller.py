from flask import jsonify, request
from common.response_handler import response_handler
from common.db import db

class BaseController():
    def __init__(self, model):
        self.model = model

    def save(self, data):
        try:
            obj = self.model(**data)
            db.session.add(obj)
            db.session.commit()
            return jsonify(response_handler(obj.to_dict()))
        except Exception as e:
            db.session.rollback()
            raise e

    def create(self, data):
        return self.save(data)

    def get(self):
        objs = self.model.query.all()
        return jsonify(response_handler([obj.to_dict() for obj in objs]))

    def get_by_id(self, id):
        obj = self.model.query.get_or_404(id)
        return jsonify(response_handler(obj.to_dict()))

    def delete(self, id):
        obj = self.model.query.get_or_404(id)
        db.session.delete(obj)
        db.session.commit()
        return jsonify({'message': 'Object deleted successfully'})

    def update(self, id, data):
        obj = self.model.query.get_or_404(id)
        for key, value in data.items():
            setattr(obj, key, value)
        db.session.commit()
        return jsonify(response_handler(obj.to_dict()))
