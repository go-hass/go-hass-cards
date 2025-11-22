.PHONY:
help:
	@echo Tasks:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# DEVELOPMENT SETUP
dev: ## Run Home Assistant Area Card development server
	bun run dev

build: ## Build Home Assistant Area Card application
	bun run build

lint: ## Lint Home Assistant Area Card application
	bun run lint

ssh-deploy: build ## Deploy Home Assistant Area Card over SSH
	bun run ssh-deploy

types: ## Generate types from https://github.com/home-assistant/frontend.git
	./scripts/generate-types.sh
