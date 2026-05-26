# Book Management System

A lightweight React + JSON Server project for managing a personal book library.

## Structure

```
book-management-system/
├── client/           # React frontend app
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── index.jsx
│       ├── App.css
│       ├── index.css
│       ├── components/
│       └── pages/
└── server/           # json-server backend
    ├── db.json
    └── package.json
```

## Features

- Browse and search books
- Add new books
- Edit existing books
- Delete books
- Modern responsive UI

## Setup

### 1. Start the server

```bash
cd "book-management-system/server"
npm install
npm run start
```

The server will run on `http://localhost:5000` and expose the `books` resource at:

```text
http://localhost:5000/books
```

### 2. Start the frontend

```bash
cd "book-management-system/client"
npm install
npm run dev
```

The frontend will run on `http://localhost:5174` (or the next available port).

## Deploying to Vercel

This repository is a monorepo with the frontend inside `client`.

To deploy the frontend on Vercel:

1. Push the repo to GitHub, GitLab, or Bitbucket.
2. Create a new Vercel project.
3. Set the root directory to `client`.
4. Set the build command to:

```bash
npm run build
```

5. Set the output directory to:

```text
dist
```

6. Deploy.

> Note: `json-server` is a local development backend and is not suitable for direct deployment on Vercel. For a full production deployment, replace the backend with a real API or serverless endpoints.

## Notes

- The frontend uses React Router for navigation
- The backend uses `json-server` for a simple REST API
- Change `server/db.json` to preload book data

