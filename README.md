# Navi Ads Company - Project Documentation

This document outlines the architecture, technology stack, and setup instructions for the Navi Ads Company full-fledged website and backend system.

## Project Structure

The project has been restructured into a monorepo-style setup containing a distinct frontend and backend to decouple the user interface from the API and database.

```text
a:\projects\works\navi-ads-company-website Secondary
├── frontend/             # React + Vite Application
│   ├── src/
│   │   ├── App.tsx       # Main layout and UI components
│   │   ├── index.css     # Tailwind v4 configuration and global styles
│   │   └── utils/        # E2E Encryption utility
│   └── package.json
└── backend/              # Node.js + Express + Prisma API
    ├── src/
    │   ├── server.ts     # Express entry point
    │   ├── routes/       # API endpoints routing
    │   └── controllers/  # Request handlers
    ├── prisma/
    │   └── schema.prisma # PostgreSQL database schema
    ├── .env              # Environment configuration
    └── package.json
```

## Technology Stack

### Frontend (Client-Side)
- **Framework**: React 19 via Vite
- **Styling**: Tailwind CSS v4 (Custom configured for a premium corporate aesthetic without AI-like generic artifacts)
- **Typography**: Inter and Manrope from Google Fonts
- **Icons**: Lucide React
- **Security**: Web Crypto API for End-to-End (E2E) encryption of contact form submissions before they are transmitted over the network.

### Backend (Server-Side)
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma Client
- **Security**: Receives and stores encrypted payloads.

## Features

1. **Premium Corporate UI**: A custom-designed, highly responsive interface utilizing a refined color palette (Dark Navy, Emerald Green, Gold Accent), glassmorphism effects, and smooth scroll-triggered animations.
2. **Responsive Design**: Mobile-first architecture with a dedicated slide-out mobile menu, adjusting fluidly across all device types.
3. **End-to-End Encryption**: Form data (such as names, emails, and project details) is encrypted using AES-GCM on the client side before ever leaving the browser. The backend securely stores the cipher text and initialization vector (IV).
4. **Scalable Database**: Uses PostgreSQL via Prisma, making it ready for long-term production use and complex data relations.

---

## Setup and Run Instructions

### 1. Database Setup (PostgreSQL)
Ensure you have a PostgreSQL server running locally (or use a cloud provider like Neon/Supabase).
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Verify your connection string in `backend/.env`:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/navi_ads?schema=public"
   ```
3. Sync the Prisma schema to create the database tables:
   ```bash
   npx prisma db push
   ```

### 2. Running the Backend
In the `backend` directory, install dependencies and start the development server:
```bash
npm install
npm run dev
```
The backend will listen on `http://localhost:5000`.

### 3. Running the Frontend
Open a new terminal window, navigate to the `frontend` directory, install dependencies, and start the Vite development server:
```bash
cd frontend
npm install
npm run dev
```
The frontend will typically run on `http://localhost:5173`. Open this URL in your browser to view the application.
# navads
