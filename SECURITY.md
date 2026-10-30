# Security

Lungo runs inside Pi with Pi's permissions and draws a footer in your terminal. Some of what it shows comes from outside: the Git branch name of the project you opened, the model name, and status messages from other extensions. Lungo must show that text as text and must not change what Pi does.

## Reporting a vulnerability

Please do not open a public issue for a security problem. Report it privately through GitHub: **Security → Report a vulnerability** on this repository ([direct link](https://github.com/nervouna/lungo/security/advisories/new)). Include what you did, what happened, the commit you tested and your Pi version.

You will get an answer within a week. Fixes land on `main`; there are no maintained release branches.

## In scope

- A branch name, model name or extension status message that makes the footer send terminal escape sequences the terminal acts on
- A way for Lungo's throughput entries to enter model context or to change other session entries

## Out of scope

- Pi's own footer, transcript and tool output: report those to [Pi](https://github.com/earendil-works/pi)
- Wrong numbers that come from the usage a provider reports
- Anything that needs control of your Pi settings or of the machine Pi runs on
