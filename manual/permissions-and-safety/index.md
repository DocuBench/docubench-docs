# Permissions and Safety

DocuBench is designed so AI-driven browser activity stays visible and bounded.
Browser tools operate on MCP-owned tabs, not normal user tabs.

## User Tabs and MCP Tabs

Normal browser tabs that you control are separate from MCP-owned tabs. AI agents
receive MCP tab IDs only for tabs owned by the running workbench.

This separation lets you use the browser normally while keeping AI activity in
the workbench scope.

## Allowed Sites

Workbench navigation tabs use an allow list for external sites. Allowed domains
match the exact hostname and its subdomains.

For example, allowing `example.com` also allows `docs.example.com`.

Local development URLs such as `localhost` and `127.0.0.1` are allowed for local
HTTP or HTTPS workflows.

> Screenshot placeholder: Navigation Tabs allow-list settings.

## New-Site Approval

When an AI tries to navigate to an unknown site, the workbench policy decides
what happens:

| Policy | Behavior |
| --- | --- |
| Reject all | Unknown domains are blocked. |
| Manual approval | DocuBench asks you to approve or deny the site. |

When manual approval is required, DocuBench shows a pending approval panel in
the main window.

> Screenshot placeholder: Navigation approval panel for an unknown domain.

## Site Agent Boundaries

Site agents and developer host tabs stay inside their configured site boundary.
They do not use manual approval for cross-site navigation; attempts to leave the
configured site are blocked.

## Forms, Downloads, and Popups

DocuBench applies extra guards around browser actions that can have side effects.

- Downloads from MCP tabs are blocked.
- Popup and new-window requests are controlled or blocked.
- Sensitive or ambiguous form submissions can be blocked.
- Password and file-upload fields are restricted.

For general navigation tabs, ordinary search-like GET forms are allowed when
DocuBench can classify them safely.

## Audit Visibility

The workbench audit panel shows live activity while a workbench is running.
Depending on plan and settings, audit data can also be persisted to disk in the
configured work folder.

## Related Pages

- [Workbenches](../workbenches/)
- [Browser Tools](../browser-tools/)
- [Site Agents](../site-agents/)
