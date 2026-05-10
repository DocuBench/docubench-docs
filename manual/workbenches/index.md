# Workbenches

A workbench is the DocuBench control surface for one MCP browser environment.
Each workbench has its own endpoint, token, settings, browser tabs, and optional
site agents.

Use separate workbenches when you want separate MCP URLs, different allowed
sites, different tab limits, or different audit settings.

> Screenshot placeholder: Workbench list in the sidebar and selected workbench
> panel in the main window.

## Create a Workbench

1. Open the MCP Workbench section in DocuBench.
2. Choose New MCP Workbench.
3. Enter a name.
4. Create the workbench.

DocuBench derives the MCP path from the workbench name. For example, a workbench
named `Research Demo` can use a path like `/mcp/research-demo/`.

## Start and Stop

Start the workbench before connecting an AI client. While the workbench is
running, DocuBench serves the MCP endpoint and owns the browser tabs used by AI
tools.

Stop the workbench when you want to disconnect clients and release MCP-owned
tabs.

## Endpoint and Token

The endpoint tab shows:

- MCP endpoint URL
- Bearer token
- Token regeneration control
- Session idle timeout

Use the endpoint URL and bearer token when configuring an AI client.

Regenerating the token invalidates older client configuration for that
workbench.

## Navigation Tabs

General navigation tabs are MCP-owned browser tabs that AI agents can use for
ordinary browsing tasks. Depending on your plan and settings, a workbench may
have one or more general navigation tabs.

## Work Folder and Audit Settings

A workbench can use a work folder for saved audit data when audit persistence is
enabled. Live audit entries are visible in DocuBench during a session even when
disk persistence is not enabled.

## Related Pages

- [Connect AI Agents](../connect-ai-agents/)
- [Browser Tools](../browser-tools/)
- [Permissions and Safety](../permissions-and-safety/)
