.PHONY: clean build gen-docs docs help
.DEFAULT_GOAL := help

define BROWSER_PYSCRIPT
import os, webbrowser, sys

try:
	from urllib import pathname2url
except:
	from urllib.request import pathname2url

webbrowser.open("file://" + pathname2url(os.path.abspath(sys.argv[1])))
endef
export BROWSER_PYSCRIPT

define PRINT_HELP_PYSCRIPT
import re, sys

for line in sys.stdin:
	match = re.match(r'^([a-zA-Z_-]+):.*?## (.*)$$', line)
	if match:
		target, help = match.groups()
		print("%-20s %s" % (target, help))
endef
export PRINT_HELP_PYSCRIPT

BROWSER := python -c "$$BROWSER_PYSCRIPT"

help:
	@python -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)

clean:  ## Clean all build, python, and testing files
	rm -fr build/
	rm -fr dist/
	rm -fr .eggs/
	find . -name '*.egg-info' -exec rm -fr {} +
	find . -name '*.egg' -exec rm -f {} +
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -fr {} +
	rm -fr .tox/
	rm -fr .coverage
	rm -fr coverage.xml
	rm -fr htmlcov/
	rm -fr .pytest_cache
	rm -fr .mypy_cache

build: ## Run tox / run tests and lint
	tox

gen-docs: ## Generate Sphinx HTML documentation, including API docs
	rm -f docs/access_eval*.rst
	rm -f docs/modules.rst
	sphinx-apidoc -o docs/ access_eval **/tests/
	$(MAKE) -C docs html

docs: ## Generate Sphinx HTML documentation, including API docs, and serve to browser
	make gen-docs
	$(BROWSER) docs/_build/html/index.html

test-generate-report: ## Generate an accessibility report for evamaxfield.github.io as a test
	rm -Rf evamaxfield.github.io/
	$(MAKE) generate-report url="https://evamaxfield.github.io/"

generate-report: ## Generate an accessibility evaluation report for provided url
	scrapy crawl AccessEvalSpider -a url=$(url) -L INFO
	process-access-eval-results $(url)