# Portfolio

A minimal portfolio built with Next.js.

## Update the content

Edit `src/app/page.tsx` to update the introduction, project summaries, writing section, and links. Add and edit work and volunteer entries as Markdown files in `content/work/` and `content/volunteer/`. The filename controls the URL shortname; frontmatter supplies the role, organization, period, and optional tools shown on the page.

Experience page bodies are rendered from Markdown on the server with `react-markdown`; no raw HTML is enabled.

The visual styles are in `src/app/globals.css`. Replace `public/images/Chow.jpg` or `public/Resume.pdf` to update the portrait or résumé.

## Run locally

```bash
npm ci
npm run dev
```
