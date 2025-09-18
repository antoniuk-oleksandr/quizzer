.PHONY: compose-up compose-down compose-rebuild

compose-up:
	docker-compose -f infra/dev/docker-compose.yaml up -d

compose-down:
	docker-compose -f infra/dev/docker-compose.yaml down

compose-rebuild:
	docker-compose -f infra/dev/docker-compose.yaml up -d --build
