# Contributing

Contributions are welcome, and they are greatly appreciated! Every little bit
helps, and credit will always be given.

## Developer Installation

If something goes wrong at any point during installing the library please see how
[our CI/CD on GitHub Actions](.github/workflows/build-main.yml) installs and builds the
project as it will always be the most up-to-date.

## Get Started!

Ready to contribute? Here's how to set up `access-eval` for local development.

1. Fork the `access-2020-localelections` repo on GitHub.

2. Clone your fork locally:

    ```bash
    git clone git@github.com:{your_name_here}/access-2020-localelections.git
    ```

3. Install [geckodriver](https://github.com/mozilla/geckodriver/releases)

    1. Download:

        - For Linux, download: geckodriver-v{version}-linux{arch}.tar.gz
        - For Max, download: geckodriver-v{version}-macos{arch}.tar.gz
        - For Windows, download: geckodriver-v{version}-win{arch}.tar.gz

        _(Fill in your version and architecture)_

    2. Unzip or un-tar the downloaded file.

    3. **On Mac & Linux**: add the filepath to the directory that contains the
       executable to your PATH.
       I.e. `export PATH=$PATH:/home/{user}/Downloads/geckodriver`

        _(Fill in your username)_

4. Install the project in editable mode.
   (It is also recommended to work in a virtualenv or anaconda environment):

    ```bash
    cd access-2020-localelections/
    pip install -e .[dev]
    ```

5. Create a branch for local development:

    ```bash
    git checkout -b {your_development_type}/short-description
    ```

    Ex: feature/read-tiff-files or bugfix/handle-file-not-found<br>
    Now you can make your changes locally.

6. When you're done making changes, check that your changes pass linting and
   tests, including testing other Python versions with make:

    ```bash
    make build
    ```

7. Commit your changes and push your branch to GitHub:

    ```bash
    git add .
    git commit -m "Resolves gh-###. Your detailed description of your changes."
    git push origin {your_development_type}/short-description
    ```

8. Submit a pull request through the GitHub website.

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
