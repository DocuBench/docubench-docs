# Getting Started

DocuBench lets AI agents use controlled browser workbenches through MCP.

This manual covers setup and usage for DocuBench users.

## What You Need

An AI agent or MCP client such as Codex Application, Codex CLI or Claude Code.

## Basic Flow

1. Open DocuBench.
2. Create or select a workbench.
3. Start the workbench.
4. Copy the MCP endpoint URL.
5. Copy the bearer token.
6. Add the MCP server to your AI client.
7. Start a new AI client session and verify that DocuBench tools are available.

DocuBench ships with a Demo workbench configuration. The first time you start the app,
a tutorial will guide you through the basic flow and concepts:

- System Configuration and Workbench Configuration
- Navigation Control and Allow / Deny List
- Navigation Approval Request and Audit
- Site Agent and Site Instruction

## Choose an AI Client

Start with the client you already use. Each client has its own configuration
format, but all of them need the same two DocuBench values:

- MCP endpoint URL
- Bearer token

## Next Steps

- [Connect an AI agent](./connect-ai-agents/)
- [Learn how workbenches work](./workbenches/)
- [Review permissions and safety](./permissions-and-safety/)
