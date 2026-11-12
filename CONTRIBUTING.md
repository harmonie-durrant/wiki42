# Contributing to Wiki42

Thanks for helping! Wiki42 is the unofficial 42 wiki, written by the 42 community for current and future students. Every fix, new page or clarification helps someone stuck on a project.

## What you can contribute

- **Fix a mistake**: a typo, an outdated rule, a broken link.
- **Improve a page**: clearer explanations, examples, diagrams.
- **Write a new page**: a project, a concept, a tool, a tip about life at 42.
- **Improve the site itself**: components, styling, search, accessibility.

Not sure whether something fits? [Open an issue](https://github.com/harmonie-durrant/wiki42/issues/new) first and ask.

## Ground rules

- **No project solutions.** Explain concepts, point to resources, share pitfalls, but never post code that solves a 42 project. It would hurt the students reading it and break the school's rules.
- **Write in English** so everyone on every campus can read it.
- **Be kind and accurate.** Check facts that may differ from campus to campus, and say so when they do.
- **Only add content you are allowed to share.** No copied subjects, no copyrighted material, no personal data.

## Make a contribution

### Small edits, from your browser

Every wiki page has an **Edit this page** link. It opens the file on GitHub, where you can edit it, and GitHub forks the repository and opens the pull request for you.

### Larger changes, on your machine

1. [Fork the repository](https://github.com/harmonie-durrant/wiki42/fork) and clone your fork:

   ```sh
   git clone https://github.com/<your-username>/wiki42.git
   cd wiki42
   ```

2. Create a branch:

   ```sh
   git checkout -b add-push-swap-page
   ```

3. Install the dependencies and start the site. You need Node.js 24 (see `.nvmrc`). The project uses Yarn 4, which ships with the repository, so you don't need to install it. Don't use `npm install`: it ignores `yarn.lock` and installs versions the site doesn't work with.

   ```sh
   corepack enable   # once, so that `yarn` uses the version in the repository
   yarn install
   yarn dev
   ```

   The site runs at http://localhost:3000 and the wiki is at http://localhost:3000/wiki.

4. Make your changes (see [Writing pages](#writing-pages) below).

5. If you changed code files, format them:

   ```sh
   yarn format:write
   ```

6. Commit, push to your fork and [open a pull request](https://github.com/harmonie-durrant/wiki42/compare). Say what you changed and why. Add screenshots if it changes how a page looks.

7. Add yourself to `components/Contributors/list.ts` in your first pull request, so you show up on the home page.

## Writing pages

Wiki pages are [MDX](https://mdxjs.com/) files (Markdown that can include React components) in the `content/` folder. Each file is served under `/wiki`:

| File                         | URL                        |
| ---------------------------- | -------------------------- |
| `content/index.mdx`          | `/wiki`                    |
| `content/piscine.mdx`        | `/wiki/piscine`            |
| `content/projects/libft.mdx` | `/wiki/projects/libft`     |

To add a page:

1. Create the `.mdx` file in `content/`, or in a subfolder to group related pages.
2. Start it with a short description, which search engines and link previews show, and a single `#` title:

   ```mdx
   ---
   description: "What Libft is, what it teaches and the mistakes students make most often."
   ---

   # Libft
   ```

3. Add the page to the `_meta.ts` file of its folder (`content/_meta.ts` for the top level) to set its place and title in the sidebar. A subfolder can have its own `_meta.ts`.

Use `##` and `###` headings to structure the page; they make the "On this page" menu. GitHub alerts turn into callouts:

```md
> [!TIP]
>
> Write your own tests before booking an evaluation.
```

The available types are `NOTE`, `TIP`, `IMPORTANT`, `WARNING` and `CAUTION`. The existing pages in `content/` are good examples to copy from.

## Pull request checklist

- [ ] The change is in English and contains no project solutions.
- [ ] New pages have a `description` and appear in a `_meta.ts`.
- [ ] Links work, and the page looks right in both light and dark mode.

## Licence

By contributing, you agree that your contribution is released under the project's [MIT licence](LICENCE).
