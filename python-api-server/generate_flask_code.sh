#!/bin/bash

# Get params
class_name=$1

regex='^([A-Z][a-z0-9]+)+$'

if [[ ! $class_name =~ $regex ]]; then
  echo "Error: class name is not valid"
  exit 1
fi

filename="$(echo "$class_name" | sed 's/\([^A-Z]\)\([A-Z]\)/\1_\2/g' | tr '[:upper:]' '[:lower:]')"

echo "filename: $filename"
echo "class name: $class_name"



echo "
from common.db import db
from datetime import datetime
from models.base_model import BaseModel


class ${class_name}Model(BaseModel):
    __tablename__ = '${filename}'

    id = db.Column(db.Integer, primary_key=True)

    def __init__(self):
        pass

    def to_dict(self):
        return {
            'id': self.id,
        }
" > "models/${filename}_model.py"


# Create controller
echo "from controllers.base_controller import BaseController
from common.db import db
from models.${filename}_model import ${class_name}Model

class ${class_name}Controller(BaseController):
    def __init__(self):
        super().__init__(${class_name}Model)
" > "controllers/${filename}_controller.py"

# TODO
#Create router