from flask import jsonify, request
from common.response_handler import response_handler
from common.db import db

class BaseController():
    def __init__(self, model):
        self.model = model

    # def pageQuery(self):
    #     page = request.args.get('page', 1, type=int)
    #     per_page = request.args.get('per_page', 10, type=int)
    #     items = self.model.paginate(page=page, per_page=per_page)
    #     print(items)
    #     # return jsonify(total=items.total, pages=items.pages, page=items.page)
    #     # return 
    #     # return jsonify(response_handler(items))


    def create(self, data):
        return self.model.save(data)

    def get(self):
        return self.model.get()

    def get_by_id(self, id):
        obj = self.model.query.get_or_404(id)
        return jsonify(response_handler(obj.to_dict()))

    def delete(self, id):
        return self.model.delete(id)

    def update(self, id, data):
        return self.model.update(id, data)