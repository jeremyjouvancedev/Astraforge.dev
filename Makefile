.PHONY: help install dev build start docker-build docker-run docker-stop clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	pnpm install

dev: ## Start development server
	pnpm dev

build: ## Build for production
	pnpm build

start: ## Start production server
	pnpm start

lint: ## Run linter
	pnpm lint

docker-build: ## Build Docker image
	docker build -t astraforge-landing:latest .

docker-run: ## Run Docker container
	docker compose up -d

docker-stop: ## Stop Docker container
	docker compose down

docker-logs: ## View Docker logs
	docker compose logs -f

docker-rebuild: ## Rebuild and restart Docker container
	docker compose down
	docker build -t astraforge-landing:latest .
	docker compose up -d

clean: ## Clean build artifacts and dependencies
	rm -rf .next node_modules out

deploy-portainer: docker-build ## Build image for Portainer deployment
	@echo "Image built: astraforge-landing:latest"
	@echo "Deploy this in Portainer using docker-compose.yml"
