# Lungo

A standalone footer for [Pi](https://github.com/earendil-works/pi), extracted from [Expresso](https://github.com/nervouna/expresso). It leaves tool rendering unchanged.

The footer shows the project and Git branch, model and thinking level, token totals, cache hit rate, average output tokens per second, and context usage. It keeps extension status messages below the footer and switches to a single project/model line when the terminal is too narrow.

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

If you also use Expresso, leave its footer disabled (`"expresso": { "footer": false }`). Pi has one custom footer slot, so enabling both makes them compete for it. Lungo does not read Expresso's settings.

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
