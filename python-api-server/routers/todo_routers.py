# TODO
from flask import Blueprint, jsonify, request
from controllers.todo_controllers import TodoModelController
todo_api = Blueprint('todo_api', __name__)

todo_controller = TodoModelController()

todo_api.route('/todos', methods=['GET'])(todo_controller.get_todos)