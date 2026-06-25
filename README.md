<<<<<<< HEAD
# may30_AyeshaTabasum_CartShare

**CartShare** is a real-time collaborative shopping cart web application built with React, Vite, Tailwind CSS, and a Node.js/Express backend. Multiple users can share a room code, add and manage items in a shared cart, and see each other's activity live.

---

## Features Implemented

1. **User Room Access** — Enter a username to create a new room (generates a unique 6-character code) or join an existing room using a shared code.
2. **Backend Room Persistence** — Room state is saved server-side in `server/db.json` via a REST API, so data survives page refreshes and is shared across all users in the room.
3. **Shared Shopping Cart** — Add, edit, delete, and search items with quantity and price tracking. Total cost updates automatically.
4. **Live Sync (Polling)** — Dashboard polls the backend every 3 seconds so all participants see updates without refreshing.
5. **Live Activity Log** — Every action (item added, removed, user joined) is recorded with the username and timestamp.
6. **Participant Avatars** — Displays all users currently in the room with color-coded initials avatars.
7. **Printable Receipt** — Generates a print-ready receipt modal showing all items and totals.
8. **Dark Mode** — Toggle between light and dark themes; preference persists across reloads via localStorage.
9. **Responsive Layout** — Fully responsive across mobile, tablet, and desktop using Tailwind CSS breakpoints.

---

## Project Structure

```
B55_AyeshaTabasum_CartShare/
├── server/
│   ├── db.json               # JSON file used by the Express backend for persistence
│   ├── index.js              # Express backend — REST API routes
│   └── package.json          # Server dependencies
├── src/
│   ├── components/
│   │   ├── ActivityLog.jsx   # Live activity feed
│   │   ├── Cart.jsx          # Shopping cart (add/edit/delete items)
│   │   ├── Navbar.jsx        # Top navigation bar
│   │   ├── Participants.jsx  # Room participants display
│   │   └── Receipt.jsx       # Printable receipt modal
│   ├── pages/
│   │   ├── Dashboard.jsx     # Main room dashboard
│   │   └── Home.jsx          # Landing page (create/join room)
│   ├── utils/
│   │   ├── api.js                  # Fetch wrappers for the REST API
│   │   ├── backendStorageUtils.js  # Room + session helpers
│   │   └── roomUtils.js            # Room code generation
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
=======
# CartShare - Collaborative Shopping Cart

**CartShare** is a React shopping cart collaboration app. It supports a frontend UI and a minimal Express backend for room persistence.

This project uses **React**, **Vite**, **Tailwind CSS**, and a small **Express** backend storing room data in `server/db.json`.

---

Key Features

1. **User Room Access**: Enter a username to create a new room or join an existing room using a 6-character code.
2. **Backend Room Persistence**: Room state is saved to a backend API instead of only localStorage.
3. **Shared Shopping Cart**: Add, edit, delete, and search items with quantity and price.
4. **Live Activity Log**: Tracks user actions with timestamps.
5. **Participant Avatars**: Displays user initials and deterministic color-coded avatars.
6. **Printable Receipt**: Generates a print-ready receipt modal.
7. **Dark Mode**: Theme preference persists across reloads.
8. **Responsive Layout**: Works on mobile and desktop.

---

Project Structure

```text
cartshare/
├── server/
│   ├── db.json            # JSON file used by the Express backend
│   ├── index.js           # Express backend routes and persistence logic
│   └── package.json       # Server dependencies and start script
├── src/
│   ├── components/
│   │   ├── ActivityLog.jsx
│   │   ├── Cart.jsx
│   │   ├── Navbar.jsx
│   │   ├── Participants.jsx
│   │   └── Receipt.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Home.jsx
│   ├── utils/
│   │   ├── api.js
│   │   ├── backendStorageUtils.js
│   │   └── roomUtils.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite-env.d.ts
>>>>>>> 0146629a657c242331c12e77aaac0c615c46fe47
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

<<<<<<< HEAD
## How to Run Locally

This project has two parts — a **frontend** (React/Vite) and a **backend** (Express). Both must be running at the same time.

### Prerequisites
- Node.js v18 or higher
- npm

---

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/may30_AyeshaTabasum_CartShare.git
cd B55_AyeshaTabasum_CartShare
```

### Step 2 — Install frontend dependencies

```bash
npm install
```

### Step 3 — Install backend dependencies
=======
Installation and Running

This project contains both frontend and backend components.

### 1. Install frontend dependencies

```bash
cd c:/Users/abdul/Downloads/ayesha_project/B55_AyeshaTabasum_CartShare
npm install
```

### 2. Install backend dependencies
>>>>>>> 0146629a657c242331c12e77aaac0c615c46fe47

```bash
cd server
npm install
<<<<<<< HEAD
cd ..
```

### Step 4 — Start the backend server

Open a terminal in the `server/` folder and run:

```bash
cd server
npm start
```

The backend will start at `http://localhost:4000`.

### Step 5 — Start the frontend

Open a **second terminal** in the root project folder and run:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## Testing Room Functionality Across Multiple Sessions

1. Open `http://localhost:5173` in **Browser A** — create a room and note the 6-character room code.
2. Open `http://localhost:5173` in **Browser B** (or incognito) — enter a different username and paste the room code to join.
3. Add/edit/delete items in either browser — changes appear in both within a few seconds.

---

## Backend API

The Express backend exposes a minimal REST API at `http://localhost:4000/api/rooms`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/rooms` | Create a new room |
| `GET` | `/api/rooms/:roomCode` | Fetch room data |
| `PUT` | `/api/rooms/:roomCode` | Update room data |
| `DELETE` | `/api/rooms/:roomCode` | Delete a room |

Room data is persisted in `server/db.json`.

---

## Useful Commands

```bash
# Frontend
npm run dev        # Start development server
npm run build      # Build for production

# Backend (run from /server folder)
npm start          # Start Express server on port 4000
=======
```

### 3. Start the backend server

```bash
npm start
```

The backend runs on `http://localhost:4000` by default.

### 4. Start the frontend app

In another terminal:

```bash
cd c:/Users/abdul/Downloads/ayesha_project/B55_AyeshaTabasum_CartShare
npm run dev
```

Open the printed Vite URL (usually `http://localhost:5173`).

### 5. Production build

```bash
npm run build
>>>>>>> 0146629a657c242331c12e77aaac0c615c46fe47
```

---

<<<<<<< HEAD
## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| Persistence | JSON file (server/db.json) |
| Icons | Lucide React |

---

## Notes

- The backend is intentionally file-based for easy local demo and testing.
- For production deployment, replace `server/db.json` with a proper database (PostgreSQL, MongoDB, etc.).
- The frontend is deployable to Vercel or Netlify; the backend can be deployed to Render or Railway.
=======
##  Backend Behavior

- The backend exposes a minimal REST API at `/api/rooms`.
- Room state is persisted in `server/db.json`.
- Available endpoints:
  - `POST /api/rooms` to create a room
  - `GET /api/rooms/:roomCode` to fetch room data
  - `PUT /api/rooms/:roomCode` to update room data
  - `DELETE /api/rooms/:roomCode` to delete a room

---

##  How the App Works
How It Works (Technical Explanations)

### Room persistence
- `src/utils/backendStorageUtils.js` now communicates with the backend API.
- The frontend still stores user session information in `localStorage`.

### Room creation
- Creating a room sends a backend request to save the initial room structure.
- After creation, the session is saved locally and the user is redirected to the room.

### Joining a room
- The app validates room existence through the backend before joining.
- If the room exists, the user is allowed into the dashboard.

### Dashboard updates
- Cart updates and activity log entries are saved through backend PUT requests.
- This keeps room state persistent across browser sessions.

---

##  Notes
Viva Q&A (Project Defence Prep)

- This backend is intentionally minimal and file-based for easy local demo use.
- It is suitable for local testing and demo purposes, not production.
- For production, replace `server/db.json` with a proper database such as PostgreSQL or MongoDB.

---

##  Useful Commands

```bash
# frontend
npm run dev
npm run build

# backend
cd server
npm start
```
>>>>>>> 0146629a657c242331c12e77aaac0c615c46fe47
