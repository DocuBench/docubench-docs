# Troubleshooting

Use this page when an AI client cannot connect to DocuBench or browser tools do
not behave as expected.

## AI Client Cannot Connect

Check:

- DocuBench is open.
- The workbench is running.
- The client uses the exact MCP endpoint URL shown in DocuBench.
- The client includes the bearer token in the `Authorization` header.
- The token has not been regenerated since the client was configured.
- Some AI Client, such as Codex Desktop application, need to restart to pick up the MCP server setup.

## Cannot Connect to the DocuBench from Agent in Container

If you are running AI agent, such as Codex or Claude Code, inside a container,
and the DocuBench application is running on the host system, you need to change
bind address and connection URL.

1. Change the bind address to 0.0.0.0 for the DocuBench system.
2. For the agent in the container, you should change the url host to `host.docker.internal`.

## DocuBench Tools Do Not Appear

Restart or refresh the AI client session after adding the MCP server.

If a Site Agent tab was just started or stopped, refresh the client tool list when
your client supports it.

## Authorization Fails

Copy the token again from DocuBench and update the AI client configuration.

Token regeneration invalidates previous tokens for that workbench.

## Navigation Is Blocked

The target site may not be in the workbench allow list.

Options:

- add the domain to the workbench allow list
- switch the new-site policy to manual approval
- approve the site when the approval panel appears

Site agent tabs cannot navigate outside their configured site.

## A Page Looks Empty to the Agent

Some pages render content dynamically or rely on visual state. Ask the agent to
take a screenshot, wait for the page to load, or scroll the page.

If the content is inside a canvas or complex visual component, screenshot-based
actions may work better than text extraction.

## A Click or Form Submit Is Blocked

DocuBench blocks actions that appear unsafe or ambiguous, especially downloads,
file uploads, password fields, and sensitive form submissions.

For search boxes and filters, the agent may need to use a clearly labeled search
field or button.

## Screenshots to Capture for Support

When reporting a setup issue, useful screenshots include:

- Workbench endpoint tab
- AI client MCP server configuration
- Navigation approval panel
- Audit panel row for the failed action
