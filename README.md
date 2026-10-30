# Lungo

[![Release](https://img.shields.io/github/v/release/nervouna/lungo)](https://github.com/nervouna/lungo/releases/latest)
![Pi extension](https://img.shields.io/badge/Pi-extension-lightgrey)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

<!-- banner -->

Lungo is a footer for the [Pi](https://github.com/earendil-works/pi) coding agent's terminal interface. It shows the project and Git branch, model and thinking level, token totals, cache hit rate, average output tokens per second, and context usage. It leaves tool rendering unchanged.

<!-- screenshots -->

## Status

Lungo is a personal project, used daily by its author. It was extracted from [Expresso](https://github.com/nervouna/expresso), which no longer has a footer of its own. It is tested with `@earendil-works/pi-coding-agent` 1.0.2 and is not meant for the older `@mariozechner` packages; other Pi versions may differ. The package declares Node.js 22.19 or later. Nerd Font icons are optional and need a Nerd Font in the terminal.

Releases are source only: Pi installs the extension straight from this repository, with no build step.

See also [Expresso](https://github.com/nervouna/expresso), which collapses tool calls in Pi's transcript into one-line summaries. See [CONTRIBUTING.md](CONTRIBUTING.md) to report a bug or send a fix, and [SECURITY.md](SECURITY.md) for security problems.

## Install

```sh
pi install git:github.com/nervouna/lungo
```

Restart Pi or run `/reload` to load the extension.

## Update and remove

```sh
pi update --extension git:github.com/nervouna/lungo
pi remove git:github.com/nervouna/lungo
```

Run `/reload` or restart Pi afterwards. Removing Lungo leaves its hidden throughput entries in existing sessions.

## Layout

The footer keeps extension status messages below itself and switches to a single project/model line when the terminal is too narrow.

## Data and network

Lungo makes no network requests and reads no files of its own. The project name, Git branch, model, token usage and context usage all come from Pi. It reads its settings through Pi and, while the footer is on, writes one hidden `lungo:request-throughput` entry per completed model request to the current session, holding the output token count and the request time.

## Try it

From this directory:

```sh
pi -e ./src/index.ts
```

To install this local checkout:

```sh
pi install /absolute/path/to/lungo
```

The footer is enabled by default in interactive mode. It does nothing in print, JSON, or RPC mode. This package targets `@earendil-works/pi-coding-agent` and is tested against version 1.0.2; it is not intended for the older `@mariozechner` packages.

## Settings

Add optional settings to `~/.pi/agent/settings.json` or your project's `.pi/settings.json`:

```json
{
  "lungo": {
    "footer": true,
    "nerdFonts": false
  }
}
```

Set `nerdFonts` to `true` if your terminal uses a Nerd Font. Otherwise the footer uses text labels and Unicode symbols. Set `footer` to `false` to disable the footer and throughput collection. Run `/reload` after changing settings.

Current Expresso has no footer, so the two work together. Older Expresso versions had their own footer; if you run one of those, turn it off with `"expresso": { "footer": false }`, because Pi has one custom footer slot. Lungo does not read Expresso's settings.

## Metrics

Token totals cover the whole session, including other branches, tool usage, compaction, and standalone usage records. Cache hit rate comes from the latest assistant message. Context usage comes from Pi and uses green below 50%, yellow below 80%, and red at 80% or above.

Throughput is total output tokens divided by total measured request time. Request time includes first-token latency but excludes idle time, tool execution between requests, and retry backoff. Failed and aborted requests are excluded. Measurements are saved as `lungo:request-throughput` session entries and survive reloads. Existing Expresso measurements are not imported; the rate is unknown until Lungo records a completed request.

## Development

Requires Node.js 22.19 or newer.

```sh
npm ci
npm run verify
```

Tests cover responsive layouts, Unicode and terminal escape handling, theme colors, usage accounting, request timing, and footer lifecycle cleanup.

## Source and license

Adapted from Expresso commit [`80baa527425469556bf8f7f5fa68ff9ff2b4ce54`](https://github.com/nervouna/expresso/tree/80baa527425469556bf8f7f5fa68ff9ff2b4ce54). The footer, throughput tracker, and their tests retain the upstream MIT license and copyright notice in [LICENSE](LICENSE).
