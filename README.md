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

## Notes

- The frontend uses React Router for navigation
- The backend uses `json-server` for a simple REST API
- Change `server/db.json` to preload book data

