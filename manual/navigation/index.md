# Navigation Control

## Navigation Tabs Setting

General navigation tabs are MCP-owned browser tabs that AI agents can use for
ordinary browsing tasks. Depending on your plan and settings, a workbench may
have one or more general navigation tabs.

DocuBench maintains workbench-wise and global allow list and deny list to control
which web site AI agent may visit.

Before you start the workbench, you may modify the hosts in the allow list and
deny list, and specify the workbench approval behavior when AI agent navigates
to a new web site.

## Navigation Approval

Navigation approval applies when an AI agent tries to navigate a general navigation
tab to a site that is not already allowed by the workbench configuration.

The workbench policy decides what happens:

| Policy          | Behavior                                        |
| --------------- | ----------------------------------------------- |
| Reject all      | Unknown domains are blocked.                    |
| Manual approval | DocuBench asks you to approve or deny the site. |

When manual approval is configured, DocuBench shows a pending approval panel in
the workbench and send a system notification.

![Approval Panel](/images/manual/approval-panel.png)

Your approval or deny decision will be recorded in the allow list and deny list.
