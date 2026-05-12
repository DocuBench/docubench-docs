# Browser Tools

Browser tools let a connected AI agent operate DocuBench-owned browser tabs.
They are exposed through MCP and are scoped to the running workbench.

## What Agents Can Do

AI agents can use browser tools to operate websites, depending on the tab type
and safety rules.

| Tool                           | Purpose                                                        |
| ------------------------------ | -------------------------------------------------------------- |
| `browser_list_tabs`            | List MCP tabs owned by the current workbench.                  |
| `browser_navigate`             | Navigate a general MCP tab to a URL.                           |
| `browser_get_content`          | Read sanitized HTML or text content from a tab.                |
| `browser_screenshot`           | Capture a tab screenshot as PNG image content.                 |
| `browser_scroll_tab`           | Scroll the page by a pixel amount.                             |
| `browser_create_tab`           | Create a new general MCP navigation tab.                       |
| `browser_click`                | Click a link, button, or interactive icon by selector or text. |
| `browser_type`                 | Pre-fill an allowed input, textarea, or rich text editor.      |
| `browser_click_point`          | Click visual coordinates from a screenshot.                    |
| `browser_drag`                 | Drag between two visual coordinates.                           |
| `browser_mouse_wheel`          | Send a wheel event at visual coordinates.                      |
| `browser_keyboard_type`        | Type raw keyboard events into the focused element.             |
| `browser_history_step_back`    | Navigate back one step in the tab's browser history.           |
| `browser_history_step_forward` | Navigate forward one step in the tab's browser history.        |

AI agents should choose tool calls based on the user's natural language
instruction. You can also explicitly ask an agent to take a screenshot or use a
screenshot to determine click coordinates.

## Tab Types and Tool Behaviors

DocuBench defines three MCP tab types:

| Tab type           | Purpose                                                     |
| ------------------ | ----------------------------------------------------------- |
| Navigation tab     | General browsing controlled by workbench navigation policy. |
| Site Agent tab     | Dedicated tab for one configured website.                   |
| Developer Host tab | Dedicated tab for local or developer-controlled workflows.  |

Some tools are restricted in certain tab types. For details, see
[Permissions and Safety](../permissions-and-safety/).

`browser_get_content` returns different results based on the tab type.

In Navigation tabs and Site Agent tabs, HTML content is sanitized. The goal is
to return useful page structure and text while removing behavior,
presentation noise, tracking artifacts, and large inline graphics that inflate
the response without helping the AI reason about the page. Sensitive data, such
as CSRF tokens and hidden session/security form fields, are also removed during
this sanitization process.

In Developer Host tabs, `browser_get_content` returns unmodified HTML DOM data
for agent-assisted development workflows.
