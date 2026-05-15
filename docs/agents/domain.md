# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Layout

This repo uses a multi-context domain documentation layout.

Expected structure:

```text
/
├── CONTEXT-MAP.md
├── docs/adr/
└── src/
    ├── <context>/
    │   ├── CONTEXT.md
    │   └── docs/adr/
    └── <context>/
        ├── CONTEXT.md
        └── docs/adr/
```

## Before exploring, read these

- `CONTEXT-MAP.md` at the repo root, if it exists. It points at one `CONTEXT.md` per context. Read each one relevant to the topic.
- `docs/adr/` for system-wide architectural decisions.
- `src/<context>/CONTEXT.md` for context-specific domain language.
- `src/<context>/docs/adr/` for context-specific architectural decisions.

If any of these files do not exist, proceed silently. Do not flag their absence or suggest creating them upfront. The producer skill (`/grill-with-docs`) creates them lazily when terms or decisions actually get resolved.

## Use the glossary's vocabulary

When output names a domain concept, such as in an issue title, refactor proposal, hypothesis, or test name, use the term as defined in the relevant `CONTEXT.md`.

Do not drift to synonyms the glossary explicitly avoids.

If the concept is not in the glossary yet, either reconsider whether the project already has a better term or note the gap for `/grill-with-docs`.

## Flag ADR conflicts

If output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> Contradicts ADR-0007 (`example-title`) but may be worth reopening because...
