# CodeAtlas

### See the structure behind the source code.

A repository intelligence workbench that indexes code, maps dependencies, and explains architecture with source-grounded answers.

> **Category:** Developer Tools  
> **Repository:** `codeatlas`  
> **Status:** Specification ready · application implementation pending

## Why it exists

New or large repositories take time to understand because files, symbols, routes, models, and dependencies are dispersed.

**Designed for:** Software developers, open-source maintainers, technical leads, engineering students.

## Planned capabilities

- Safe repository import and ignore rules
- Syntax-aware file explorer
- Language and symbol indexing
- Import and dependency graph
- API and data-model discovery
- Assistant with file and line citations
- Incremental indexing

## Visual identity

**Art direction:** Voltage Archive — high-contrast, technical, kinetic.

| Color | Hex |
|---|---|
| Muted Sage Grey | `#A5A79B` |
| Warm Cream Beige | `#E8D2B5` |
| Deep Burgundy | `#590907` |
| Midnight Black | `#030407` |
| Electric Cobalt Blue | `#1558C9` |
| Acid Lime | `#D4FF24` |
| Pastel Orchid Pink | `#E7B0DE` |
| Deep Eggplant Violet | `#400849` |
| Signal Orange | `#FF5A0A` |

**Project emphasis:** `#1558C9`, `#D4FF24`, `#E8D2B5`, `#FF5A0A`. Cobalt leads navigation; lime marks verified states; cream supports reading; orange is reserved for high-salience signals.

The UI should feel editorial, tactile, responsive, accessible, and product-specific. Use color as a semantic system, not decoration; preserve contrast and reduced-motion preferences.

## Technology direction

- **Frontend:** React + TypeScript; Vite unless the repository establishes a justified alternative.
- **Backend:** typed API appropriate to the PRD and existing codebase.
- **Database:** Neon as the single canonical transactional store.
- **AI:** Optional, grounded model-provider abstraction with evaluation and spend controls.
- **Analytics:** Tinybird may be used for minimized aggregate events only.

Dependencies and versions must be verified using current documentation before installation.

## MCP workflow

Intended MCPs: **Linear, Stitch, v0, Context7, Neon, Tinybird**. Availability and exact tool scopes must be rechecked in the coding-agent session. Read `MCP_WORKFLOW.md` and the local `MCP_PLAYBOOK.md`. Use read-only discovery first; get approval before writes and migrations.

## Getting started

This repository contains product specifications, not a completed application. Add installation, environment, migration, development, test, and production-build commands only after the corresponding implementation exists and the commands have been run successfully. Do not publish guessed commands.

## Configuration and secrets

Add `.env.example` with placeholder values only. Keep real credentials in the local environment or approved secret store. Never commit API keys, database passwords, private tokens, certificates, personal records, or production data.

## Security

Security is part of the release definition. Follow `BUILD_PROMPT.md` and `SECURITY_AUDIT_PROMPT.md`. A real audit must produce `SECURITY_REPORT.md` with evidence and masked findings. This specification does not claim security certification or a completed audit.

## Roadmap

- [ ] Repository and existing-code audit
- [ ] Product-specific design system and responsive shell
- [ ] Domain model and secure server-side boundaries
- [ ] Primary workflow implemented end to end
- [ ] Search, reporting, and export appropriate to the product
- [ ] Approved MCP integrations
- [ ] Automated tests and accessibility review
- [ ] Defensive security audit and remediation
- [ ] Verified setup and deployment documentation

## Documentation

- [`PRD.md`](PRD.md) — product requirements and acceptance criteria.
- [`BUILD_PROMPT.md`](BUILD_PROMPT.md) — complete coding-agent build prompt.
- [`GITHUB.md`](GITHUB.md) — repository name, description, and topics.
- [`MCP_WORKFLOW.md`](MCP_WORKFLOW.md) — project-specific MCP sequence and permissions.
- [`SECURITY_AUDIT_PROMPT.md`](SECURITY_AUDIT_PROMPT.md) — complete defensive audit instructions.
- [`SECURITY_REPORT_TEMPLATE.md`](SECURITY_REPORT_TEMPLATE.md) — audit report structure.
- [`MCP_PLAYBOOK.md`](MCP_PLAYBOOK.md) — connected MCP roles and safety boundaries.
- [`IMPLEMENTATION_RULES.md`](IMPLEMENTATION_RULES.md) — universal quality and security rules.
- [`SECURITY_REPORT.md`](SECURITY_REPORT.md) — to be created and completed during the actual audit.

## GitHub topics

`developer-tools`, `open-source`, `product-engineering`, `ai`, `llm`, `analytics`, `observability`, `postgresql`

## License

Choose and add a license before public distribution. No license is implied by this specification.

---

**CodeAtlas — See the structure behind the source code.**
