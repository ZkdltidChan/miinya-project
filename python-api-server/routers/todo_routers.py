# TODO
from flask import Blueprint, jsonify, request
from controllers.todo_controllers import TodoModelController
todo_api = Blueprint('todo_api', __name__)

todo_controller = TodoModelController()



@todo_api.route('/todos', methods=['GET'])
def get_todos():
    return todo_controller.get_todos()

@todo_api.route('/todos', methods=['POST'])
def create_todo():
    # 取得請求中的 JSON 資料
    data = request.get_json()
    # 在此將 data 儲存到資料庫中
    todo = todo_controller.create_todo(data)
    # 回傳回應
    return todo