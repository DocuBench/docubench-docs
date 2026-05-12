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

The permission control on these MCP types are different to serve the purpose.
For the details of the permission control, refer to [Permission and Safety](../permissions-and-safety/).

## Navigation Tabs

Navigation tabs are general-purpose MCP tabs. AI agents can use them to browse
allowed sites, request approval for new sites when the workbench policy allows
it.

Web sites in navigation tabs are considered untrusted. AI agents
can get content or screenshot from web sites in navigation tab, and submit
HTTP GET based search form for search. General form submission is blocked.

## Site Agent Tabs

A site agent tab is a dedicated MCP tab for one configured website. Use site
agent tabs for sites that need preserved session state, repeated use, or
grant AI agents to perform trusted operations.

Site agent tabs stay inside their configured site boundary. Direct browser
navigation outside that boundary is blocked.

## Developer Host Tab

One developer host tab could be create in one workbench. Compared to Site Agent
Tabs, AI agent will get unmodified html content from the web site.

Site agent tabs and developer host tab stay inside their configured site
boundary. They do not use manual approval for cross-site navigation; attempts to
leave the configured site are blocked.
