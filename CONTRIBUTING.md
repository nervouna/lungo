# Contributing

Lungo is a personal project, but bug reports and fixes are welcome.

## Issues

- **Bugs:** use the bug report form. The most useful reports give your Pi version, terminal width, the footer as shown, what happened and what you expected; a suggested fix is a bonus.
- **Security problems:** report them privately, see [SECURITY.md](SECURITY.md).
- **Feature ideas:** open an issue to discuss it first. Lungo stays small on purpose, so not every idea will fit. Tool rendering belongs in [Expresso](https://github.com/nervouna/expresso).

## How the project is developed

- Lungo targets `@earendil-works/pi-coding-agent` and is tested against 1.0.2. For Pi integration, check the documentation and typings of the installed package rather than assume another version's API.
- `npm ci` and then `npm run verify` (TypeScript check and tests) pass. Node.js 22.19 or later.
- Tests cover layouts, Unicode and terminal escape handling, theme colors, usage accounting, request timing and cleanup. Add a test for the case you fix.

## Pull requests

Describe the change, link the issue if there is one, and list the commands you ran and their results. For layout changes, a terminal screenshot at a narrow and a wide width helps.
