import boto3
from flask import request
import os
import uuid
import json

# Load AWS S3 configuration from environment variables
AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
AWS_REGION = os.environ.get('AWS_REGION')
S3_BUCKET = os.environ.get('S3_BUCKET')

s3 = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION
)


def upload_file(file, s3_folder_path: str):
    # 設定 TransferConfig
    # config = boto3.s3.transfer.TransferConfig(
    #     multipart_threshold=1024 * 25,  # 大於 25KB 的檔案使用 multipart 上傳
    #     max_concurrency=10,             # 最大併發數
    #     num_download_attempts=10,      # 下載失敗時的重試次數
    #     use_threads=True                # 是否使用多線程
    # )

    # file_name = file.filename
    error = ""
    s3_url = ""
    # total = file.content_length

    # def upload_progress_callback(bytes_uploaded):
    #     percent_completed = int(bytes_uploaded / total * 100)
    #     print(f"Upload progress: {percent_completed}%")

    random_str = str(uuid.uuid4()).replace('-', '')
    s3_file_path = f"{s3_folder_path}/{random_str}"
    try:
        # # 使用 put 方法上傳檔案
        # s3.put_object(
        #     Bucket=S3_BUCKET,
        #     Key=s3_file_path,
        #     Body=file,
        #     ContentType=file.content_type,
        #     # Callback=upload_progress_callback,
        #     # ACL='public-read'
        # )


        s3.upload_fileobj(
            file,
            S3_BUCKET,
            s3_file_path,
            Callback=lambda bytes_sent: print(json.dumps({
            'uploaded': bytes_sent,
            'total': file.content_length
        })),
            ExtraArgs={
                # 'ACL': 'public-read',
                'ContentType': file.content_type
            })
        print("Upload Successful")
    except Exception as e:
        print("AWS credentials not available.")
        error = str(e)

    # 获取上传文件的 URL
    s3_url = f"https://{S3_BUCKET}.s3.{AWS_REGION}.amazonaws.com/{s3_file_path}"

    return s3_url, error
