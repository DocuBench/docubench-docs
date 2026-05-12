# MCP Tabs

MCP tabs are browser tabs owned by a running DocuBench workbench. AI agents can
only operate MCP tabs exposed by the workbench; they cannot operate normal
user-controlled tabs.

## Tab Types

DocuBench uses different MCP tab types:

| Tab type           | Purpose                                                     |
| ------------------ | ----------------------------------------------------------- |
| Navigation tab     | General browsing controlled by workbench navigation policy. |
| Site Agent tab     | Dedicated tab for one configured website.                   |
| Developer Host tab | Dedicated tab for local or developer-controlled workflows.  |

Permissions differ by MCP tab type. For details, see
[Permissions and Safety](../permissions-and-safety/).

## Navigation Tabs

Navigation tabs are general-purpose MCP tabs. AI agents can use them to browse
allowed sites and request approval for new sites when the workbench policy
allows it.

Websites in Navigation tabs are considered untrusted. AI agents can read content,
capture screenshots, and submit HTTP GET based search forms when DocuBench can
classify them safely. General form submission is blocked.

## Site Agent Tabs

A Site Agent tab is a dedicated MCP tab for one configured website. Use Site
Agent tabs for sites that need preserved session state, repeated use, or trusted
agent operations.

Site agent tabs stay inside their configured site boundary. Direct browser
navigation outside that boundary is blocked.

## Developer Host Tab

One Developer Host tab can be created in a workbench. Compared to Site Agent
tabs, Developer Host tabs return unmodified HTML content from the website.

Site Agent tabs and Developer Host tabs stay inside their configured site
boundary. They do not use manual approval for cross-site navigation; attempts to
leave the configured site are blocked.
