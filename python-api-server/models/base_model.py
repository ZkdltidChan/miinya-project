from flask import jsonify
from common.db import db
from common.response_handler import response_handler, paginate_response_handler


class BaseModel(db.Model):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(
        db.DateTime, default=db.func.now(), onupdate=db.func.now())

    def __init__(self, **kwargs):
        self.__dict__.update(kwargs)

    @classmethod
    def paginate(cls, page=1, per_page=10, order_by=None, **kwargs):
        query = cls.query.filter_by(**kwargs)
        total = query.count()
        if order_by:
            query = query.order_by(order_by)
        objs = query.paginate(page=page, per_page=per_page, error_out=False)
        return jsonify(paginate_response_handler(
            total=total,
            pages=objs.pages,
            page=objs.page,
            data_list=[obj.to_dict() for obj in objs.items]),
        )

    @classmethod
    def save(cls, data):
        try:
            db.session.add(cls(**data))
            db.session.commit()
            return jsonify(response_handler(cls.to_dict()))
        except Exception as e:
            db.session.rollback()
            raise e

    @classmethod
    def get(cls, page=1, per_page=10, order_by=None, **kwargs):
        return cls.paginate(page=page, per_page=per_page,
                            order_by=order_by, **kwargs)

    @classmethod
    def update(cls, id, data):
        obj = cls.query.get_or_404(id)
        for key, value in data.items():
            setattr(obj, key, value)
        db.session.commit()
        return jsonify(response_handler(cls.to_dict()))

    @classmethod
    def delete(cls, id):
        obj = cls.query.get_or_404(id)
        db.session.delete(obj)
        db.session.commit()
        return jsonify(response_handler(cls.to_dict()))
