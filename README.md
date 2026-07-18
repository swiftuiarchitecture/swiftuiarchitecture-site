# SwiftUI Architecture

A community-curated SwiftUI architecture resource library built with Astro and
deployed as a static website through GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the address printed by Astro, usually `http://localhost:4321`.

## Add a new resource

Create a Markdown file inside:  

```text
src/content/resources/
```

Example:

```markdown
---
title: "A Great SwiftUI Article"
author: "Author Name"
resourceType: "article"
topics:
  - "state-management"
difficulty: "intermediate"
url: "https://example.com/article"
publishedDate: "2026-07-17"
featured: false
summary: "A short description of the resource."
editorNote: "Why this resource is worth reading."
duration: "8 min read"
---

This body is optional because the site links to the original resource.
```

Commit and push the file. GitHub Actions rebuilds and publishes the website.

## Supported resource types

- `article`
- `video`
- `book`
- `open-source`
- `wwdc`

## Supported difficulty values

- `beginner`
- `intermediate`
- `advanced`

## Add or edit a topic

Edit:

```text
src/data/topics.ts
```

Each topic controls its title, description, editorial guidance, learning path,
and related topics.

## GitHub Pages setup

1. Create a GitHub repository and push this project.
2. Open **Settings → Pages**.
3. Choose **GitHub Actions** under Build and deployment.
4. Push to the `main` branch.
5. Add `swiftuiarchitecture.com` under Custom domain.
6. Point the domain's DNS records to GitHub Pages as instructed by GitHub.

The included workflow is located at:

```text
.github/workflows/deploy.yml
```

## Customize before launch

- Replace sample resource URLs with the exact original URLs.
- Replace the Formspree placeholder in `src/pages/submit.astro`.
- Connect the newsletter form in `src/components/Newsletter.astro`.
- Update About and editorial wording as desired.
