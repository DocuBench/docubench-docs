# Browser Tools

Browser tools let a connected AI agent operate DocuBench-owned browser tabs.
They are exposed through MCP and are scoped to the running workbench.

Browser tools do not operate on normal user-controlled tabs.

## What Agents Can Do

Depending on the tab type and safety rules, an agent can:

- list available MCP tabs
- create a new general navigation tab
- navigate a general navigation tab
- read page content
- take screenshots
- click links and buttons
- type into allowed fields
- scroll pages
- use visual coordinate actions for interactions that need screenshots

> Screenshot placeholder: AI client tool list showing DocuBench browser tools.

## Read Before Acting

Agents should usually inspect a page before interacting with it. A good workflow
is:

1. List tabs.
2. Navigate or select a tab.
3. Read page content or take a screenshot.
4. Choose a stable selector, text label, or visual coordinate.
5. Click, type, scroll, or continue reading.

## Tab Types

DocuBench uses different MCP tab types:

| Tab type | Purpose |
| --- | --- |
| Navigation tab | General browsing controlled by workbench navigation policy. |
| Site agent tab | Dedicated tab for one configured website. |
| Developer host tab | Dedicated tab for local or developer-controlled workflows. |

`browser_navigate` is for general navigation tabs. Site agent and developer host
tabs stay inside their configured site boundary and should be operated with page
interaction tools.

## Content and Screenshots

`browser_get_content` returns page content that the AI can reason over.

`browser_screenshot` captures visual state when layout, images, canvas content,
or coordinates matter.

Use screenshots when the page cannot be understood from text alone.

## Related Pages

- [Workbenches](../workbenches/)
- [Site Agents](../site-agents/)
- [Permissions and Safety](../permissions-and-safety/)
