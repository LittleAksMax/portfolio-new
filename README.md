# Portfolio Scaffold Glossary

This repository is a scaffold for a document-style portfolio built with the Next.js App Router. The goal is to make the app feel like a lightweight editor: one permanent overview document, optional project documents opened in tabs, a command palette, and a small help panel.

## Core Flow

- The default route renders the shell in [src/app/page.tsx](src/app/page.tsx).
- Global document state lives in [src/contexts/document-context.tsx](src/contexts/document-context.tsx).
- The Overview document is always present and cannot be closed.
- Project cards open new documents instead of navigating away from the page.
- The command palette and help button are scaffolded UI entry points, not full product features yet.

## Folder Glossary

### [src/app](src/app)

App Router entry points and global app wiring.

- [layout.tsx](src/app/layout.tsx) sets metadata, fonts, and the root HTML/body shell.
- [page.tsx](src/app/page.tsx) mounts the document provider and top-level app layout.
- [globals.css](src/app/globals.css) imports the shared stylesheet scaffolds and theme layers.

### [src/components/layout](src/components/layout)

The application shell and its surrounding UI.

- [app-layout.tsx](src/components/layout/app-layout.tsx) composes the tab bar, main content, help button, and command palette.
- [main-content.tsx](src/components/layout/main-content.tsx) switches between the Overview and project document views.
- [floating-help.tsx](src/components/layout/floating-help.tsx) provides the lower-right help popover.

### [src/components/tabs](src/components/tabs)

Document tab UI.

- [document-tab-bar.tsx](src/components/tabs/document-tab-bar.tsx) renders the open document tabs.
- [document-tab.tsx](src/components/tabs/document-tab.tsx) renders one tab and its active state.
- [document-close-button.tsx](src/components/tabs/document-close-button.tsx) handles closing closable documents.

### [src/components/documents](src/components/documents)

Document bodies.

- [overview-document.tsx](src/components/documents/overview-document.tsx) contains the placeholder portfolio overview and table of contents.
- [project-document.tsx](src/components/documents/project-document.tsx) renders a placeholder project document.

### [src/components/command](src/components/command)

Command palette scaffolding.

- [command-palette.tsx](src/components/command/command-palette.tsx) controls the overlay, list state, and basic keyboard navigation.
- [command-search.tsx](src/components/command/command-search.tsx) is the search input stub.
- [command-list.tsx](src/components/command/command-list.tsx) is the list wrapper.
- [command-item.tsx](src/components/command/command-item.tsx) is one selectable command row.

### [src/components/projects](src/components/projects)

Placeholder project browsing UI.

- [project-grid.tsx](src/components/projects/project-grid.tsx) lays out the cards.
- [project-card.tsx](src/components/projects/project-card.tsx) opens a project document through the provided callback.

### [src/components/common](src/components/common)

Markdown-like building blocks used by the document views.

- [section.tsx](src/components/common/section.tsx) provides scroll-friendly section wrappers.
- [markdown-heading.tsx](src/components/common/markdown-heading.tsx) renders heading levels.
- [markdown-paragraph.tsx](src/components/common/markdown-paragraph.tsx) renders body text.
- [markdown-divider.tsx](src/components/common/markdown-divider.tsx) renders horizontal rules.
- [markdown-list.tsx](src/components/common/markdown-list.tsx) renders ordered or unordered lists.
- [markdown-quote.tsx](src/components/common/markdown-quote.tsx) renders quote blocks.
- [markdown-code-block.tsx](src/components/common/markdown-code-block.tsx) renders code-style blocks.

### [src/data](src/data)

Placeholder content sources.

- [projects.ts](src/data/projects.ts) contains sample project metadata used by the Overview document.

### [src/contexts](src/contexts)

Global React context.

- [document-context.tsx](src/contexts/document-context.tsx) owns open documents, the active document, and document actions.

### [src/hooks](src/hooks)

Reusable interaction hooks.

- [use-document-keyboard-shortcuts.ts](src/hooks/use-document-keyboard-shortcuts.ts) listens for Ctrl/Cmd + K and Escape.

### [src/lib](src/lib)

Small shared helpers.

- [document-utils.ts](src/lib/document-utils.ts) creates and normalizes document records.
- [utils.ts](src/lib/utils.ts) provides the shared `cn` helper.

### [src/types](src/types)

Shared TypeScript types.

- [documents.ts](src/types/documents.ts) defines document state shapes.
- [projects.ts](src/types/projects.ts) defines project metadata.

### [src/styles](src/styles)

Style placeholders only.

- Each file in this folder is a scaffold for a specific concern such as layout, markdown, tabs, or animations.
- The files currently hold comments so the structure is visible without introducing real styling logic.

## Notes

- The project intentionally avoids real portfolio content for now.
- The structure is designed so URL routing, search indexing, theme switching, and document persistence can be added later without reorganizing the whole app.
