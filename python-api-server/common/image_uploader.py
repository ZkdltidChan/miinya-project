from flask import Flask, request


def upload_file(file: request.files, sub_url: str):
    if 'file' not in request.files:
        return 'No file uploaded', 400
    file = request.files['file']
    
    if file.mimetype.startswith(sub_url+'/image/'):
        file.save(file.filename)
        return 'File saved', 200
    
    return 'Invalid file type', 400
