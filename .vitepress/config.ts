import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'DocuBench Manual',
  description: 'User manual for DocuBench',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://docs.docubench.ai'
  },
  themeConfig: {
    siteTitle: 'DocuBench Manual',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Manual', link: '/manual/getting-started' }
    ],
    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Getting Started', link: '/manual/getting-started' }
        ]
      },
      {
        text: 'Connect AI Agents',
        items: [
          { text: 'Overview', link: '/manual/connect-ai-agents/' },
          { text: 'Codex CLI', link: '/manual/connect-ai-agents/codex-cli' },
          { text: 'Claude Code', link: '/manual/connect-ai-agents/claude-code' }
        ]
      },
      {
        text: 'Use DocuBench',
        items: [
          { text: 'Workbenches', link: '/manual/workbenches/' },
          { text: 'Browser Tools', link: '/manual/browser-tools/' },
          { text: 'Site Agents', link: '/manual/site-agents/' },
          { text: 'Permissions and Safety', link: '/manual/permissions-and-safety/' },
          { text: 'Troubleshooting', link: '/manual/troubleshooting/' }
        ]
      }
    ],
    outline: {
      level: [2, 3]
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    }
  }
})
