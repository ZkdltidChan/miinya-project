FROM python:3.9-alpine
WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install psycopg2-binary
RUN pip install -r requirements.txt

# add app
COPY . .

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000
ENV FLASK_DEBUG=1
EXPOSE 5000


CMD ["flask", "run"]
