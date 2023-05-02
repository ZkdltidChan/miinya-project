from controllers.base_controller import BaseController
from models.tabs_model import TabsModel
from flask import jsonify, request
from common.response_handler import response_handler

class TabsController(BaseController):
    def __init__(self):
        super().__init__(TabsModel)
