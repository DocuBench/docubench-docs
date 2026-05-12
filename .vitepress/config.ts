import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "DocuBench Manual",
  description: "User manual for DocuBench",
  cleanUrls: true,
  sitemap: {
    hostname: "https://docs.docubench.ai",
  },
  themeConfig: {
    siteTitle: "DocuBench Manual",
    search: {
      provider: "local",
    },
    nav: [{ text: "Manual", link: "/manual/getting-started" }],
    sidebar: [
      {
        text: "Start",
        items: [{ text: "Getting Started", link: "/manual/getting-started" }],
      },
      {
        text: "Connect AI Agents",
        items: [
          { text: "Overview", link: "/manual/connect-ai-agents/" },
          { text: "Codex", link: "/manual/connect-ai-agents/codex" },
          {
            text: "Claude Code",
            link: "/manual/connect-ai-agents/claude-code",
          },
        ],
      },
      {
        text: "Use DocuBench",
        items: [
          { text: "Workbenches and Audit", link: "/manual/workbenches/" },
          {
            text: "Navigation Control",
            link: "/manual/navigation/",
          },
          { text: "MCP Tabs", link: "/manual/mcp-tabs/" },
          { text: "Browser Tools", link: "/manual/browser-tools/" },
          { text: "Site Instruction", link: "/manual/site-instruction/" },
          {
            text: "Permissions and Safety",
            link: "/manual/permissions-and-safety/",
          },
        ],
      },
      {
        text: "FAQ",
        items: [
          { text: "Troubleshooting", link: "/manual/faq/" },
          { text: "Agent Prompt", link: "/manual/agent-prompt/" },
        ],
      },
    ],
    outline: {
      level: [2, 3],
    },
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
  },
});
