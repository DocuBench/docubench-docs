# Codex

Add a DocuBench workbench as an MCP server in your Codex configuration.

## Codex Desktop Application

The following steps have been verified on Mac. Codex Desktop for Windows has issue
setting up MCP server through UI. You may need to add it manually in the config file.
Follow the instruction in the section "Code CLI".

1. Open application Settings, select "MCP servers", then click "Add server".

   ![Codex - Setup 1](/images/connect-ai-agents/codex/mcp-setup-codex-app-1.png)

2. Enter a name for the MCP server, then select "Streamable HTTP".
3. In the URL field, paste the endpoint URL copied from the workbench.
4. Each entry in Headers section has two fields:
   1. Enter "Authorization" in the first field.
   2. Enter "Bearer \<token\>" in the second field. The _\<token\>_ value is
      copied from the workbench "Bearer Token" value.

   ![Codex - Setup 2](/images/connect-ai-agents/codex/mcp-setup-codex-app-2.png)

5. After saving the settings, you may need to restart the Codex application.
6. In the Codex application, check the "MCP servers" setting to confirm the
   server is connected.

   ![Codex - Setup 3](/images/connect-ai-agents/codex/mcp-setup-codex-app-3.png)

## Codex CLI

Create or edit your Codex config file and add a DocuBench MCP server.

```toml
[mcp_servers.docubench-demo]
url = "http://localhost:8286/mcp/demo/"

[mcp_servers.docubench-demo.http_headers]
Authorization = "Bearer <token>"
```

Replace the URL and token with the values shown in the DocuBench workbench.

The default config file location is at:

- Mac: `~/.codex/config.toml`
- Windows: `%USERPROFILE%\\.codex\\config.toml`

## Verify

Use the `/mcp` command in your session to list connected MCP servers.

![Codex - MCP List](/images/connect-ai-agents/codex/mcp-setup-codex-app-mcp-list.png)
