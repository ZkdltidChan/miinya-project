def response_handler(data, status_code=200, error_message=None):
    return {
        'status_code': status_code,
        'data': data,
        'error_message':  error_message,
    }