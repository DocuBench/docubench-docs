# Claude Code

Add DocuBench as an HTTP MCP server in Claude Code.

## Add the Server

Use this command to add MCP server with name _docubench-demo_:

```sh
claude mcp add --scope local --transport http \
  docubench-demo "<URL>" \
  --header "Authorization: Bearer <token>"
```

Replace the _URL_ and _token_ with the values shown in DocuBench.

## Verify

Run:

```sh
claude mcp list
```

Then start a new Claude Code session and confirm the DocuBench MCP server is
connected.
