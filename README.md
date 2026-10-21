# HelpDesk CI Workflow Repair

Modules 1-2 combined CA. Exactly three planted faults: production configuration
drift, ticket counter, and CI test command. No dependencies to install.
Use Git, Node.js 22 and npm. No Docker, cloud, secrets or deployment.

## Expected contract

Development remains serviceName HelpDesk, environment development, debug true.
Production must remain serviceName HelpDesk, environment production, debug false.
These are non-secret settings. Do not make both environments identical.
countTickets returns actual list length, including zero for empty lists.
Both configuration validation and all three unchanged tests must pass locally
and in GitHub Actions. Do not bypass checks or suppress their exit codes.

## Start in your fork

Fork, enable Actions if prompted, clone your fork and create fix/helpdesk-ci.
Follow instructor assessment. Work from repo root:

```sh
node --version
npm run check:config
npm test
git diff
```

Repair only config/prod.json, src/tickets.js, and the unit-test command in
.github/workflows/ci.yml. Keep development settings, tests, checker and package
scripts unchanged. No npm install needed. Review before committing.

After config and application repairs, commit and push branch FIRST. Open your
fork's Actions tab and capture actual failed Run unit tests step. Then repair
workflow command by comparing it with package.json scripts; commit and push.
Show both named steps and complete run passing at your final commit.
Forks do not inherit workflow runs; your push creates evidence in your fork.

Final handover: passing local checks, clean git status, repair history,
matching final commit on successful Actions run, and short cause/fix/result notes.
Submit one PDF with four labelled task sections. No PR or video required.
Do not open solution PR against instructor repository.
