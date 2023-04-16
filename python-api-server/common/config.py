# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# import os

# # db = SQLAlchemy()

# class Singleton(type):
#     """單例模式"""
#     _instances = {}

#     def __call__(cls, *args, **kwargs):
#         if cls not in cls._instances:
#             cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
#         return cls._instances[cls]


# class AppConfig(metaclass=Singleton):
#     """應用配置"""
#     def __init__(self, name):
#         env = road_env()
#         self.name = name
#         self.config = {
#             'SQLALCHEMY_DATABASE_URI': env['DB_URI'],
#         }
#         self.app = Flask(self.name)
#         self.app.config.update(self.config)
#         # db.init_app(self.app)


# def road_env():
#     DB_USER = os.environ.get('DB_USER')
#     DB_PASSWORD = os.environ.get('DB_PASSWORD')
#     DB_HOST = os.environ.get('DB_HOST')
#     DB_PORT = os.environ.get('DB_PORT')
#     DB_NAME = os.environ.get('DB_NAME')
#     print(f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}',)
#     env = {
#         "DB_URI": f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}',
#         # TODO
#     }
#     return env

# def create_app(name):
#     """創建應用"""
#     app_config = AppConfig(name)
#     return app_config.app
