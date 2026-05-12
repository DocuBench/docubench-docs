# Browser Tools

Browser tools let a connected AI agent operate DocuBench-owned browser tabs.
They are exposed through MCP and are scoped to the running workbench.

## What Agents Can Do

AI agents can use browser tools to operate on the web site, depending on the tab type and safety rules.

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

AI agents should be able to call tool name based on user's natural language instruction. User may
give AI agents explicit instructions for taking screenshot, or using screenshot image to determine
click coordinates.

## Tab Types and Tool Behaviors

DocuBench defined 3 MCP tab types:

| Tab type           | Purpose                                                     |
| ------------------ | ----------------------------------------------------------- |
| Navigation tab     | General browsing controlled by workbench navigation policy. |
| Site Agent tab     | Dedicated tab for one configured website.                   |
| Developer Host tab | Dedicated tab for local or developer-controlled workflows.  |

Some tools may not be allowed to be called by the AI agent in certain tab types.
For the details of the permission control, refer to [Permission and Safety](../permissions-and-safety/).

`browser_get_content` will return different results based on the tab types.

In Navigation tab and Site Agent tab, the html content will be sanitized. The goal
is to return useful page structure and text while removing behavior,
presentation noise, tracking artifacts, and large inline graphics that inflate
the response without helping the AI reason about the page. Sensitive data, such
as CSRF tokens and hidden session/security form fields, are also removed during
this sanitization process.

In Developer Host tab, the `browser_get_content` will return unmodified HTML
DOM data for AI agents or workflow.
