# Contributing

Contributions are welcome, and they are greatly appreciated! Every little bit
helps, and credit will always be given.

## Developer Installation

If something goes wrong at any point during installing the library please see how
[our CI/CD on GitHub Actions](.github/workflows/build-main.yml) installs and builds the
project as it will always be the most up-to-date.

## Get Started!

Ready to contribute? Here's how to set up `access-eval` for local development.

1. Fork the `campaign-access-eval` repo on GitHub.

2. Clone your fork locally:

    ```bash
    git clone git@github.com:{your_name_here}/campaign-access-eval.git
    ```

3. Install `geckodriver`:

    **Using Mac:**

    1. `brew install geckodriver`

    **Using Linux:**

    1. Download from [geckodriver releases]((https://github.com/mozilla/geckodriver/releases))

    2. Unzip or un-tar the downloaded file.

    3. Add the path to the directory that contains the executable to your PATH.
       I.e. `export PATH=$PATH:/home/{user}/Downloads/`

        _(Fill in your username)_

4. Create a Python 3.9 environment:

    1. Install [miniconda](https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links)
    
    2. Create environment:

        ```bash
        conda create --name {some-name} python=3.9
        ```

    3. Activate environment:

        ```bash
        conda activate {some-name}
        ```

    All Python packages will now be stored in this environment.
    Each time you want to work on this project be sure to create or active your environment.

    While the maintainers of this project use miniconda as our environment manager,
    there are many other Python environment managers, use what works for you.

5. Install the project in editable mode. (It is also recommended to work in a virtualenv or anaconda environment):

    ```bash
    cd campaign-access-eval/
    pip install -e .[dev]
    ```

6. Create a branch for local development:

    ```bash
    git checkout -b {your_development_type}/short-description
    ```

    Ex: feature/read-tiff-files or bugfix/handle-file-not-found<br>
    Now you can make your changes locally.

7. When you're done making changes, check that your changes pass linting and
   tests, including testing other Python versions with make:

    ```bash
    make build
    ```

8. Commit your changes and push your branch to GitHub:

    ```bash
    git add .
    git commit -m "Resolves gh-###. Your detailed description of your changes."
    git push origin {your_development_type}/short-description
    ```

9. Submit a pull request through the GitHub website.

## Deploying

A reminder for the maintainers on how to deploy.
Make sure all your changes are committed.
Then run:

```bash
$ bump2version patch # possible: major / minor / patch
$ git push
$ git push --tags
```

This will release a new package version on Git + GitHub and publish to PyPI.
