# Workbenches

A workbench is the DocuBench control surface for one MCP browser environment.
Each workbench has its own endpoint, token, settings, and MCP tabs.

Use separate workbenches when you want separate AI agents to connect the browser
environment with different allowed sites, different tab limits, or different
audit settings.

## Create a Workbench

Click the '+' icon next to the "MCP Workbench" header to create a new workbench.
DocuBench derives the MCP path from the workbench name. For example, a workbench
named `Research Demo` can use a path like `/mcp/research-demo/`.

## Start and Stop

DocuBench uses one HTTP server to host all running workbenches. The HTTP server
binds to localhost on the port specified in the System Configuration section.

Start the workbench before connecting an AI client. While the workbench is
running, DocuBench serves the MCP endpoint and owns the browser tabs used by AI
tools.

Stop the workbench when you want to disconnect clients and release MCP-owned
tabs.

## Endpoint and Token

Each MCP workbench has its own endpoint and bearer token.
Use the endpoint URL and bearer token when configuring an AI client.

Regenerating the token invalidates older client configuration for that
workbench.

## Work Folder and Audit Settings

After the workbench starts, you can monitor and review the AI agent's operation
event log in the Audit Panel. Live audit entries are visible in the workbench
Audit Panel during a running session. Use the panel to review navigation attempts,
approvals, denials, and tool actions.

A workbench can use a work folder to save audit data when audit persistence is
enabled. This is a paid subscription feature.

## Tiered Features

| Feature                          | Free Tier | Paid Subscriber |
| -------------------------------- | --------- | --------------- |
| Workbench run time               | 1 hour    | No restriction  |
| Max concurrent running workbench | 1         | 4               |
| Audit Persistence                | No        | Yes             |
