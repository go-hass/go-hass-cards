.PHONY:
help:
	@echo Tasks:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# DEVELOPMENT SETUP
dev: ## Run Home Assistant Area Card development server
	pnpm dev

build: ## Build Home Assistant Area Card application
	pnpm build

ssh-deploy: build ## Deploy Home Assistant Area Card over SSH
	./scripts/ssh-deploy.sh