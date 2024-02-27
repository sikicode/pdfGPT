# CONTRIBUTING

When contributing to this repository, please first discuss the change you wish to make via [issues](https://github.com/sikicode/ChatGPT-Clone/issues), [discord](https://discord.gg/PaNXHQNuaP).

Please note if you are working on a certain issue then make sure to stay active with development.

## Git Commit, Branch, and PR Naming Conventions

When you are working with git, please be sure to follow the conventions below on your pull requests, branches, and commits:

```text
PR: [#ISSUE ID] Title of the PR
Branch: [ISSUE ID]-title-of-the-pr (shorter)
Commit: [[ISSUE ID]] [ACTION]: what was done
```

Examples:

```text
PR: #2 Add Docker container for Postgres
Branch: 2-add-container-postgres
Commit: [2] feat: add docker container for postgres
```

## Prerequisites

You will need to [create a MongoDB cluster](https://www.mongodb.com/docs/atlas/getting-started/) and save the connection string locally.

You will need to [request an OpenAI API key](https://platform.openai.com/api-keys) and save it locally.

## Installation

To get started with chatgpt-clone locally, follow these steps

1. Make sure you have saved all secrets locally (See above Prerequisites)

2. Fork the repo

3. Clone your fork

   ```sh
    git clone https://github.com/<YOUR_GITHUB_ACCOUNT_NAME>/chatgpt-clone.git
   ```

4. Navigate to the project directory

   ```sh
   cd chatgpt-clone
   ```

5. Create a `.env` file inside the project's `backend/` directory.

6. Copy and paste secrets (see prerequisite) from local into `backend/.env`

7. Install NPM packages

   ```sh
   npm i
   ```

8. Start the backend dev server under `/backend` directory

   ```sh
   npm run dev
   ```
 
Test API endpoints through <http://localhost:5000> with Postman.

## Working on New Features

If you want to work on a new feature, follow these steps.

1. Fork the repo
2. Clone your fork
3. Checkout a new branch
4. Do your work
5. Commit
6. Push your branch to your fork
7. Go into Github UI and create a PR from your fork & branch, and merge it into upstream MAIN

## Pulling in changes from upstream

You should pull in the changes that we add in daily, preferably before you checkout a new branch to do new work.

```sh
git checkout main
```

```sh
git pull upstream main
```

## Before Submitting a Pull Request

Before submitting a **Pull Request**, you should

1. Check your code safety with Linter and TypeScript, and make sure your code can build successfully.

```sh
npm run pr:precheck
```

2. (Optional) Do an E2E test to ensure application functions properly

```
npm run e2e -w @code-racer/app
```

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a friendly experience for everyone, regardless of any experience
to give everyone an opportunity to contribute in this project.

### Our Responsibilities

The primary responsibility of contributors is to provide high-quality code contributions to the project. This involves writing, reviewing, and submitting code changes that improve the project's functionality, fix bugs, or implement new features.

Contributors should actively participate in project discussions and communicate effectively with other contributors, maintainers, and users. This includes joining [discord](https://discord.gg/4kGbBaa) server solely created for this project.

Contributors can play a role in the long-term maintenance of the project by actively monitoring the project's issue tracker, addressing bug reports and feature requests, and collaborating with other contributors to ensure the project remains healthy and sustainable.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.
