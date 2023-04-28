from flask import Blueprint, jsonify, request
from common.s3_uploader import upload_file
upload_api = Blueprint('upload_api', __name__)


@upload_api.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return 'No file uploaded.', 400
    file = request.files['file']

    s3_folder_path = request.args.get('folder', 'defaultFolder')

    uri, error = upload_file(file, s3_folder_path)
    if error:
        return error, 400
    if not uri:
        return 'Upload failed.', 400
    return jsonify({'uri': uri})
