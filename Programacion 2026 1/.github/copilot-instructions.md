Repository summary
------------------

This repository is a minimal classroom JavaScript workspace. The repository currently contains a single root file: `CLASE#!.JS` (empty). There is no `package.json`, no tests, and no CI configuration discoverable.

What the agent should know (big picture)
---------------------------------------

- **Single-file project:** Changes should be small and explicit. The main artifact is `CLASE#!.JS` at the repository root.
- **No build system detected:** There is no bundler, no `package.json`, and no test runner. Assume edits are runnable with a plain Node runtime unless the user requests adding tooling.

Running & debugging
-------------------

- Run the file with Node. The filename contains punctuation and must be quoted on Windows:

  `node "CLASE#!.JS"`

- If you need a specific Node version, ask the user before adding `.nvmrc` or modifying the environment.

Project-specific conventions and constraints
------------------------------------------

- Filename pattern observed: `CLASE#!.JS` — uppercase letters and punctuation. When creating new files, prefer conventional names (lowercase, hyphens) and avoid special characters unless the user asks otherwise.
- Do not introduce new dependencies or tooling without explicit approval. If a dependency is needed, propose adding a minimal `package.json` and explain why.

Changes, commits and PRs
-----------------------

- Keep edits minimal and localized. Provide a short commit message following this format: `type: short description` (e.g., `fix: correct example usage`, `feat: add helper script`).
- When adding a new file, include a one-line comment at top explaining intent and a short README entry if the change is non-trivial.

Patterns and examples from this repo
-----------------------------------

- Example run command (Windows PowerShell / CMD):

  `node "CLASE#!.JS"`

- There are no tests to run; if you add tests, include commands in a new `README.md` and update `package.json` scripts accordingly.

Integration points & external dependencies
----------------------------------------

- None discoverable. Before integrating external services (APIs, databases, SDKs), ask the user for credentials, approval, and desired persistence format.

When to ask the user
--------------------

- Before adding any dependency or CI configuration.
- Before renaming or deleting `CLASE#!.JS` (its name may be meaningful for course exercises).

If anything here is unclear or you want me to expand a section (build, tests, or add example code), tell me what to focus on and I'll iterate.
