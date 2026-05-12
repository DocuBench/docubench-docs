# Codex

Add DocuBench workbench as an MCP server in your Codex configuration.

## Codex Desktop Application

1. Open application Settings, select "MCP servers", then click "Add server".

   ![Codex - Setup 1](/images/connect-ai-agents/codex/mcp-setup-codex-app-1.png)

2. Enter a name for the MCP server, then select "Streamable HTTP".
3. In the URL field, paste the endpoint URL copied from the workbench.
4. Each entry in Headers section has two fields:
   1. Enter "Authorization" in the first field.
   2. Enter "Bear \<token\>" in the second field. The _\<token\>_ value is
      copied from the workbench "Bear Token" value.

   ![Codex - Setup 2](/images/connect-ai-agents/codex/mcp-setup-codex-app-2.png)

5. After save the settings, you may need to restart the Codex application.
6. In Codex application, check "MCP servers" setting to confirm the server is connected.

   ![Codex - Setup 3](/images/connect-ai-agents/codex/mcp-setup-codex-app-3.png)

## Codex CLI

Create or edit your Codex configuration file and add a DocuBench MCP server.

```toml
[mcp_servers.docubench-demo]
url = "http://localhost:8286/mcp/demo/"

[mcp_servers.docubench-demo.http_headers]
Authorization = "Bearer <token>"
```

Replace the URL and token with the values shown in the DocuBench workbench.

## Verify

Use `/mcp` command in your session to list connected MCP server.

![Codex - MCP List](/images/connect-ai-agents/codex/mcp-setup-codex-app-mcp-list.png)

# Next Step

Be sure to read the topics in "Use DocuBench" section for usage and security control.
