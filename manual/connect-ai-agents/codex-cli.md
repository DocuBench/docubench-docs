# Codex CLI

Add DocuBench as an MCP server in your Codex configuration.

## Add the Server

Create or edit your Codex configuration file and add a DocuBench MCP server.

```toml
[mcp_servers.docubench-demo]
url = "http://localhost:8286/mcp/demo/"

[mcp_servers.docubench-demo.http_headers]
Authorization = "Bearer <token>"
```

Replace the URL and token with the values shown in DocuBench.

## Verify

Start a new Codex session and confirm that DocuBench tools are available.

Expected tools include browser operations such as listing tabs, navigating,
reading page content, taking screenshots, clicking, typing, and scrolling.

## Common Issues

### Tools Do Not Appear

Check that the workbench is running and that the endpoint URL matches the
workbench path shown in DocuBench.

### Authorization Fails

Copy the bearer token again from DocuBench. If the token was regenerated, older
client configuration will stop working.
