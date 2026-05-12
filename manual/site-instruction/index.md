# Site Instruction

Site instruction provides guidance to the AI based on matching URLs. Use it to
describe where the agent should start, what workflow to follow, and which parts
of a site matter for the task.

When an AI agent uses browser tools to navigate to a website, DocuBench includes
matching user-defined site instruction in the tool response. This gives the agent
context for how to operate on the site. Site instructions are also included when
agents use `browser_list_tabs` to update their knowledge about each tab.

## Matching Rule

Site instruction is stored in the local database and matched to the navigated
URL using the longest prefix rule.

For example, you define two site instructions:

1. One site instruction for `xyz.com`
2. Another site instruction for `xyz.com/dashboard`.

When AI agents navigate the browser tab to `xyz.com/dashboard/sales`, the second
site instruction is returned. When AI agents navigate the browser tab to
`xyz.com/dashboard-review`, the second site instruction is also returned because
the second prefix string matches the URL. Add a trailing slash `/` to the prefix
string to remove this ambiguity.

## What to Include

Keep site instruction specific and operational:

- where the agent should begin
- which pages or controls matter
- expected workflow order
- important terms used by the site
- actions the agent should avoid

## What to Avoid

Do not put secrets in site instruction.

Avoid broad background notes that do not change how the agent should operate on
the site.
