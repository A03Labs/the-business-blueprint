# Business Blueprint

A modern full-stack web application built with [React Router v7](https://reactrouter.com/), [React 19](https://react.dev/), and [Tailwind CSS v4](https://tailwindcss.com/).

## Tech Stack

- **Framework:** React Router v7 (SSR enabled)
- **UI & Runtime:** React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Bundler:** Vite
- **Deployment:** Docker / Node.js

## Project Structure

```text
├── app/
│   ├── routes/          # Application route modules
│   │   └── home.tsx     # Landing page route
│   ├── app.css          # Global styling & Tailwind configuration
│   ├── root.tsx         # Root document layout & error boundaries
│   └── routes.ts        # Route definitions
├── public/              # Static assets
├── Dockerfile           # Multi-stage production container configuration
└── vite.config.ts       # Vite & plugin configurations
```

## Getting Started

### Prerequisites

- Node.js >= 20 (recommended: Node 22+)
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Type Checking & Build

```bash
# Generate route types and run TypeScript check
npm run typecheck

# Build for production
npm run build

# Start production server
npm run start
```

## Docker Deployment

Build and run the production image using Docker:

```bash
docker build -t business-blueprint .
docker run -p 3000:3000 business-blueprint
```
