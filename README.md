# Tic-Tac-Toe

A clean, modern implementation of the classic Tic-Tac-Toe game built with React, TypeScript, Vite, and Tailwind CSS. This project is set up with ESLint for code quality and pnpm for fast dependency management.

## Overview

This app renders a 3x3 game board with responsive, accessible UI components styled using Tailwind CSS. The current version displays a static board as a foundation for adding game logic (turns, win detection, draw state, and reset).

## Features

- **Responsive UI** using Tailwind CSS and utility composition (`clsx`, `tailwind-merge`).
- **Modern React 19 + TypeScript** with strict typing.
- **Vite** for lightning-fast dev server and builds.
- **ESLint** configured for React, hooks, and TypeScript.
- **pnpm** lockfile for deterministic installs.

## Tech Stack

- React 19, React DOM
- TypeScript 5
- Vite (rolldown-vite@7)
- Tailwind CSS 4 with `@tailwindcss/vite` plugin
- ESLint 9

## Project Structure

```
.
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Board.tsx        # Renders a 3x3 grid of `Square` components
│  │  ├─ Square.tsx       # Displays X/O icon or empty state
│  │  ├─ Footer.tsx       # Site footer (imported in App)
│  │  └─ Navbar.tsx       # Top navigation (imported in App)
│  ├─ icons/
│  │  ├─ CircleIcon.tsx   # O icon
│  │  └─ XIcon.tsx        # X icon
│  ├─ App.tsx             # App shell, composes Navbar, Board, Footer
│  ├─ main.tsx            # React root, imports global styles
│  ├─ index.css           # Global styles & Tailwind entry
│  └─ types.ts            # Shared types (if any)
├─ index.html             # Vite HTML entry (mounts #root)
├─ vite.config.ts         # Vite config with React SWC plugin
├─ eslint.config.js       # ESLint config
├─ package.json           # Scripts and dependencies
├─ pnpm-lock.yaml         # pnpm lockfile
├─ tsconfig*.json         # TypeScript configs
└─ README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm 8+ (preferred). You can also use npm or yarn.

### Install

Using pnpm (recommended):

```bash
pnpm install
```

Using npm:

```bash
npm install
```

### Run in Development

```bash
pnpm dev
```

Then open the URL shown in your terminal (typically http://localhost:5173).

### Build for Production

```bash
pnpm build
```

The output will be in `dist/`.

### Preview Production Build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## How It Works

- `src/components/Board.tsx` renders a 3x3 grid using the `Square` component. Right now, it maps a hard-coded `squares` array to illustrate layout and styling.
- `src/components/Square.tsx` chooses which icon to render based on `value` ("X" or "O"). It uses `clsx` and `tailwind-merge` to compose classes safely.
- `src/App.tsx` composes the `Navbar`, `Board`, and `Footer` to form the page.
- `src/main.tsx` mounts the app with React’s `StrictMode` and imports global styles from `src/index.css`.

## Tailwind CSS Setup Notes

This project uses Tailwind CSS v4 with the official Vite plugin.

- Dependencies:
  - `tailwindcss`
  - `@tailwindcss/vite`
- The Vite plugin is declared in `package.json` and integrated through the build system. Global styles and Tailwind layers should be configured in `src/index.css`.

## Available Scripts

The following scripts are defined in `package.json`:

- `dev` — Start the Vite dev server
- `build` — Type-check (`tsc -b`) and build for production
- `preview` — Preview the production build locally
- `lint` — Run ESLint on the project

## Roadmap

- Add click handling on `Square` to mark moves.
- Alternate turns (X starts, then O).
- Track and display game status (whose turn, winner, draw).
- Win detection (rows, columns, diagonals).
- Reset/new game button.
- Persist recent game state (optional).
- Simple AI for single-player mode (optional).

## Contributing

Contributions are welcome! Feel free to open issues or submit PRs to improve features, fix bugs, or enhance documentation.

## License

Add your preferred license here (e.g., MIT) and include a `LICENSE` file at the project root.

## Acknowledgements

- Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).
