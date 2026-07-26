# skills

Claude Code project skills.

## ui-ux-pro-max

UI/UX design intelligence skill (v2.11.0), installed from
[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).
Provides searchable databases of UI styles, color palettes, typography,
UX guidelines, and stack-specific guidance for 22 frameworks, plus
companion skills for branding, design systems, banners, and slides.

Skill files live under `.claude/skills/` and are auto-discovered by
Claude Code. See `.claude/skills/ui-ux-pro-max/SKILL.md` for usage.

## frontend-design

Guidance for distinctive, intentional visual design when building or
reshaping UI — aesthetic direction, typography, and avoiding templated
defaults. Installed from
[anthropics/skills](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md).

## shadcn-component-discovery / shadcn-component-review

Two skills for [shadcn/ui](https://ui.shadcn.com) work, installed from
[mattbx/shadcn-skills](https://github.com/mattbx/shadcn-skills):
`shadcn-component-discovery` searches the shadcn ecosystem (official
registries + 30+ community registries) before building custom UI, and
`shadcn-component-review` audits existing components against shadcn
design patterns.

## shadcn MCP server

The official shadcn MCP server is configured in `.mcp.json` (via
`npx shadcn@latest mcp init --client claude`), giving Claude live search
over registries declared in this project's `components.json`. The
`shadcn-component-discovery` skill above complements it with awareness
of registries not yet configured.

## magic MCP server (legacy)

`.mcp.json` also configures `@21st-dev/magic`, from
[21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp). Note: the
maintainers have deprecated this package in favor of the unified
**21st MCP** (`npx @21st-dev/cli@latest init`) — this entry is kept as
the legacy stdio compatibility proxy per explicit request. Replace
`YOUR_21ST_API_KEY` in `.mcp.json` with a fresh key from
[21st.dev/mcp](https://21st.dev/mcp) — old Magic keys were reset and no
longer work.
