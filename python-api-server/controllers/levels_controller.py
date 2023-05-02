from controllers.base_controller import BaseController
from common.db import db
from models.levels_model import LevelsModel
from flask import jsonify, request
from common.response_handler import response_handler

class LevelsController(BaseController):
    def __init__(self):
        super().__init__(LevelsModel)
