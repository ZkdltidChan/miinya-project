from flask import Blueprint, jsonify, request
from controllers.tabs_controller import TabsController
tabs_api = Blueprint('tabs_api', __name__)

controller = TabsController()


@tabs_api.route('/tabs/<int:id>', methods=['GET'])
def get_by_id(id):
    return controller.get_by_id(id)

@tabs_api.route('/tabs', methods=['GET'])
def get():
    return controller.get()


@tabs_api.route('/tabs', methods=['POST'])
def create():
    data = request.get_json()
    return controller.create(data)


@tabs_api.route('/tabs/<int:id>', methods=['PATCH'])
def update(id):
    data = request.get_json()
    return controller.update(id, data)
