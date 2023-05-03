def response_handler(data):
    return data

def paginate_response_handler(data_list, total, pages, page):
    return {
        'total': total,
        'pages': pages,
        'page': page,
        'data_list': data_list,
    }