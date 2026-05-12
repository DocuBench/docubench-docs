# Site Instruction

Site instruction provides guidance to the AI based on matching URLs.
Use it to describe where the agent should start, what workflow to follow, and
which parts of a site matter for the task.

When AI agents use browser tools navigate to a web site, if there is user defined
site instruction, DocuBench system will include site instruction in the response
so AI agent could get the context how to operate on the site. Site instructions
will also be included in the response when AI agents use `browser_list_tabs` tool
to update its knowledge about each tabs.

## Matching Rule

Site instruction was stored in local database and was matched to the navigated
URL address using longest prefix rule.

For example, user defined two site instructions:

1. One site instruction for `xyz.com`
2. Another site instruction for `xyz.com/dashboard`.

When AI agents navigate the browser tab to `xyz.com/dashboard/sales`, the 2nd
site instruction will be returned. When AI agents navigate the browser tab to
`xyz.com/dashboard-review`, the 2nd site instruction will also be returned since
the 2nd prefix string match the url. Adding a ending slash `/` to the prefix
string will remove such ambiguity.

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
