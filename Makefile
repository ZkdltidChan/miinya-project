conf:
	docker-compose --env-file ./config/.env.dev config

run:
	docker compose --env-file ./config/.env.dev up

run_prod:
	docker compose --env-file ./config/.env.prod up -d

stop:
	docker compose down