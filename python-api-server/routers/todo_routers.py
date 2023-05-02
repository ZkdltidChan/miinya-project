# TODO
from flask import Blueprint, jsonify, request
from controllers.todos_controller import TodosController
todo_api = Blueprint('todo_api', __name__)
controller = TodosController()


@todo_api.route('/todos', methods=['GET'])
def get_todos():
    return controller.get()

@todo_api.route('/todos', methods=['POST'])
def create():
    # 取得請求中的 JSON 資料
    data = request.get_json()
    # 在此將 data 儲存到資料庫中
    todo = controller.create(data)
    # 回傳回應
    return todo