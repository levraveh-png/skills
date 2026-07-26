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
