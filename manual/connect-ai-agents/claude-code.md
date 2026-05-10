# Claude Code

Add DocuBench as an HTTP MCP server in Claude Code.

## Add the Server

Run:

```sh
claude mcp add --transport http docubench-demo http://localhost:8286/mcp/demo/ --scope local --header "Authorization: Bearer <token>"
```

Replace the URL and token with the values shown in DocuBench.

## Verify

Run:

```sh
claude mcp list
```

Then start a new Claude Code session and confirm the DocuBench MCP server is
connected.

## Common Issues

### Server Is Listed but Not Connected

Make sure DocuBench is open and the selected workbench is running.

### Token Was Regenerated

Update the Claude Code MCP server entry with the new bearer token.
