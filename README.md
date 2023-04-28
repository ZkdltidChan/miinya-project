Before run:
- if you want to use the image upload, add the s3 config to ./config/.env.prod or ./config/.env.dev
    - AWS_ACCESS_KEY_ID=""
    - AWS_SECRET_ACCESS_KEY=""
    - AWS_REGION=""
    - S3_BUCKET=""

How to use:
- make run
    - with env.dev
- make run_prod
    - with env.prod

api doamin:
- localhost:5000

website doamin:
- localhost:3000