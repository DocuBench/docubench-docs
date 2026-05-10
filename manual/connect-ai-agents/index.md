# Connect AI Agents

DocuBench exposes each running workbench as an MCP server. AI clients connect to
that server and receive browser tools for the workbench.

Each client setup guide uses the same values from DocuBench:

- MCP endpoint URL, for example `http://localhost:8286/mcp/demo/`
- Bearer token

> Screenshot placeholder: Workbench endpoint tab with copy buttons for the MCP
> URL and bearer token.

## Available Guides

- [Codex CLI](./codex-cli.md)
- [Claude Code](./claude-code.md)

## General Setup Pattern

1. Start the DocuBench workbench.
2. Copy the workbench MCP endpoint URL.
3. Copy the bearer token.
4. Add a new HTTP MCP server in your AI client.
5. Set the `Authorization` header to `Bearer <token>`.
6. Restart or refresh the AI client session.
7. Confirm the DocuBench tools are listed.

## Connection Notes

The endpoint is local to your machine. Keep DocuBench running while your AI
client is connected.

If you regenerate the workbench token, update every AI client that uses that
workbench.
