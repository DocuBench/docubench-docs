# Site Agents

A site agent is a dedicated MCP-owned browser tab for one configured website.
Use site agents for sites that need preserved session state, repeated use, or
site-specific guidance.

Site agents are different from general navigation tabs. They stay inside the
configured site boundary.

> Screenshot placeholder: Site Agents panel with a configured site agent.

## When to Use a Site Agent

Use a site agent when:

- the AI will repeatedly work with the same web app
- the site takes time to load
- the site requires sign-in state that should stay available
- the AI needs site-specific instructions
- you want the agent kept inside one site boundary

Use a general navigation tab for short one-off browsing tasks.

## Add a Site Agent

1. Open a workbench.
2. Find the Site Agents section.
3. Add a site URL.
4. Review the generated name.
5. Start the site agent while the workbench server is running.

The AI client may need to refresh its tool list after a site agent starts.

## Site Boundaries

A site agent allows activity inside the configured site hostname and blocks
navigation outside that hostname. Direct browser navigation is not available on
site agent tabs.

The AI should use browser interaction tools such as click, type, scroll, content
reading, and screenshots.

## Auto-Start

Site agents can be configured to start automatically when the workbench starts.
Use auto-start for sites that are part of your normal workflow.

## Site Instructions

Site instructions provide guidance to the AI when it works on matching URLs.
They can help the agent understand where to start, what workflow to follow, or
which parts of a site matter for a task.

Keep site instructions specific and operational. Avoid putting secrets in site
instructions.

## Related Pages

- [Browser Tools](../browser-tools/)
- [Permissions and Safety](../permissions-and-safety/)
