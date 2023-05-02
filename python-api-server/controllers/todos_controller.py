from controllers.base_controller import BaseController
from models.todos_model import TodosModel
from flask import jsonify, request

class TodosController(BaseController):
    def __init__(self):
        super().__init__(TodosModel)
