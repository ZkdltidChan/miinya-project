from common.db import db
from models.todo_models import TodoModel
from flask import jsonify, request

class TodoModelController:
    @staticmethod
    def get_todos():
        todos = TodoModel.query.all()
        return jsonify([todo.to_dict() for todo in todos])

    @staticmethod
    def create_todo(data):
        todo = TodoModel(title=data['title'], description=data.get('description'), done=False)
        db.session.add(todo)
        db.session.commit()
        return jsonify(todo.to_dict())

    @staticmethod
    def get_todo_by_id(id):
        todo = TodoModel.query.get_or_404(id)
        return jsonify(todo.to_dict())

    @staticmethod
    def update_todo_by_id(id, data):
        todo = TodoModel.query.get_or_404(id)
        todo.title = data['title']
        todo.description = data.get('description')
        todo.done = data.get('done', False)
        db.session.commit()
        return jsonify(todo.to_dict())

    @staticmethod
    def delete_todo_by_id(id):
        todo = TodoModel.query.get_or_404(id)
        db.session.delete(todo)
        db.session.commit()
        return jsonify({'message': 'TodoModel deleted successfully'})
