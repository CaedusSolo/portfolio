# Portfolio

A minimal portfolio built with Next.js.

## Update the content

Edit `src/app/page.tsx` to update the introduction, project summaries, writing section, and links. Add and edit work and volunteer entries as Markdown files in `content/work/` and `content/volunteer/`. The filename controls the URL shortname; frontmatter supplies the role, organization, period, ordering, optional tools, and optional supplemental links shown on the page.

Add external references to an experience with frontmatter like:

```yaml
supplementalLinks:
  - label: Project blog post
    url: https://example.com/post
  - label: LinkedIn announcement
    url: https://www.linkedin.com/posts/example
```

Experience page bodies are rendered from Markdown on the server with `react-markdown`; no raw HTML is enabled.

The visual styles are in `src/app/globals.css`. Replace `public/images/Chow.jpg` or `public/Resume.pdf` to update the portrait or résumé.

## Run locally

```bash
npm ci
npm run dev
```
