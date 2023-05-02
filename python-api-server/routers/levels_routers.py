# TODO
from flask import Blueprint, jsonify, request
from controllers.levels_controller import LevelsController
levels_api = Blueprint('level_api', __name__)

controller = LevelsController()

@levels_api.route('/levels/<int:id>', methods=['GET'])
def get_id(id):
    return controller.get_by_id(id)


@levels_api.route('/levels', methods=['GET'])
def get_levels():
    return controller.get()

@levels_api.route('/levels', methods=['POST'])
def create():
    data = request.get_json()
    return controller.create(data)

@levels_api.route('/levels/<int:id>', methods=['PATCH'])
def update(id):
    data = request.get_json()
    return controller.update(id, data)
