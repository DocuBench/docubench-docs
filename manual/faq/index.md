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

## DocuBench Tools Do Not Appear

Restart or refresh the AI client session after adding the MCP server.

If a site agent tab was just started or stopped, refresh the client tool list when
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
