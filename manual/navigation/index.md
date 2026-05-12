# Navigation Control

## Navigation Tab Settings

General navigation tabs are MCP-owned browser tabs that AI agents can use for
ordinary browsing tasks. Depending on your plan and settings, a workbench may
have one or more general navigation tabs.

DocuBench maintains workbench-level and global allow lists and deny lists to
control which websites AI agents may visit.

Before you start the workbench, you may modify the hosts in the allow list and
deny list, and specify the workbench approval behavior when an AI agent
navigates to a new website.

## Navigation Approval

Navigation approval applies when an AI agent tries to navigate a general navigation
tab to a site that is not already allowed by the workbench configuration.

The workbench policy decides what happens:

| Policy          | Behavior                                        |
| --------------- | ----------------------------------------------- |
| Reject all      | Unknown domains are blocked.                    |
| Manual approval | DocuBench asks you to approve or deny the site. |

When manual approval is configured, DocuBench shows a pending approval panel in
the workbench and sends a system notification.

![Approval Panel](/images/manual/approval-panel.png)

Your approve or deny decision is recorded in the allow list or deny list.
