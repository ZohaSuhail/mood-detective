# Mood Detective — MERN Monorepo

A kid-friendly educational app that teaches sentiment analysis through interactive games and AI detective characters.

## 🎯 Project Overview

**Mood Detective** helps 6th graders understand how computers can read feelings in text. Kids learn through:

- Interactive drag-and-drop games
- Character-guided learning with Luna, Tom, Maya, and Rex
- Real-time sentiment analysis demos
- Machine learning vs rule-based comparisons
- Achievement certificates

## 🏗️ Architecture

### Apps

- `apps/frontend` — React + Vite + TS + Tailwind + React Router
- `apps/backend` — Express + TS + MongoDB + Security middleware
- `packages/content` — Story content, characters, and assets
- `packages/sentiment-core` — Rule-based sentiment analysis engine

### Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion, Zustand
- **Backend**: Express, TypeScript, MongoDB Atlas, Mongoose
- **Tools**: ESLint, Prettier, pnpm workspaces
- **AI**: Rule-based sentiment analysis + TensorFlow.js (coming soon)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- MongoDB Atlas account

### Installation

```bash
# 1) Clone & install
git clone <repository-url>
cd mood-detective-starter
pnpm install

# 2) Set up environment
cp apps/backend/env.example apps/backend/.env
# Edit apps/backend/.env with your MongoDB URI

# 3) Start development
pnpm -F frontend dev  # http://localhost:5173
pnpm -F backend dev   # http://localhost:3000
```

### Development Commands

```bash
# Run both apps
pnpm dev

# Linting & formatting
pnpm lint
pnpm format

# Tests
pnpm test
```

## ✅ Final QA & Handoff

### Grading checklist

- Looks great: consistent design system, subtle fun animations (Framer Motion)
- 11-year-old friendly: large buttons, single primary task per screen
- Logic works: rule demo, 5-round game, optional ML peek page
- Storytelling: characters + copy integrated through flows
- Exercises: drag–drop matching, quiz-like game, certificate

### Hosted URLs (fill after deploy)

- Frontend (Vercel): https://<your-app>.vercel.app
- API (Railway/Render/Fly): https://<your-api-host>/api/health

### Privacy & analytics

- Light analytics only; no PII beyond optional first name on certificate.
- Disable analytics: add `?no-analytics` to the URL or click “Disable analytics” in footer.
- Plausible support: set `VITE_PLAUSIBLE_DOMAIN` to enable.

### Deploy & environment

- Frontend (Vercel): set `VITE_API_BASE_URL` to your backend URL for Preview and Production.
- Backend (Railway/Render/Fly): set `MONGODB_URI`, `ALLOWED_ORIGINS` (comma-separated; include Vercel preview & prod domains), `PORT`.
- CORS: backend reads `ALLOWED_ORIGINS`; previews work automatically if domains are included.

### CI/CD

- GitHub Actions: PRs run lint + tests; `main` also builds frontend and backend.
- Preview deployments: Vercel previews per PR. Merge to `main` promotes to prod.

### Teacher mode notes

- Sessions are anonymous; only `sessionId` is stored.
- Attempts and scores are recorded to support basic progress summaries.
- Certificate can be downloaded as PNG for classroom sharing.

## 📁 Project Structure

```
mood-detective-starter/
├── apps/
│   ├── frontend/          # React app with all pages
│   └── backend/           # Express API with MongoDB
├── packages/
│   ├── content/           # Story content & assets
│   └── sentiment-core/    # Sentiment analysis engine
├── .eslintrc.json         # Code quality
├── .prettierrc           # Code formatting
└── tsconfig.base.json    # Shared TypeScript config
```

## 🎮 Features

### ✅ Completed (Phase 0 & 1)

- [x] Complete content system with 40 example sentences
- [x] Character SVGs and story narrative
- [x] Monorepo setup with proper tooling
- [x] Frontend scaffold with React Router
- [x] Backend with MongoDB integration
- [x] Security middleware and error handling
- [x] Content package integration

### 🚧 In Progress

- [ ] Drag-and-drop game functionality
- [ ] Sentiment analysis API endpoints
- [ ] Game state management
- [ ] ML model integration

### 📋 Planned

- [ ] Certificate generation
- [ ] Leaderboards and scoring
- [ ] Multi-language support
- [ ] Advanced ML features

## 🎨 Design System

### Characters

- **Luna** 🕵️‍♀️ - Main AI detective guide
- **Tom** 😊 - Happy helper for positive emotions
- **Maya** 🤔 - Thoughtful friend for neutral emotions
- **Rex** 😐 - Emotion explorer for all feelings

### Color Palette

- Primary: Indigo (#4F46E5)
- Background: Sky blue gradients
- Accent: Pastel yellows and oranges
- Text: High contrast for accessibility

## 🔧 Development

### Adding New Content

```typescript
// Edit packages/content/src/strings.en.json
// Add new sentences, dialogue, or UI text
```

### Adding New Characters

```typescript
// 1. Add character data to strings.en.json
// 2. Create SVG in apps/frontend/public/assets/characters/
// 3. Add emoji to packages/content/src/emojis.ts
```

### Database Models

- `Session` - User game sessions
- `Attempt` - Individual sentence attempts
- `Score` - Game scores and achievements
- `Feedback` - User feedback and ratings

## 📚 Learning Resources

This project demonstrates:

- Monorepo architecture with pnpm workspaces
- TypeScript best practices
- React with modern patterns
- Express API design
- MongoDB with Mongoose
- Educational game development
- Sentiment analysis implementation

## 🤝 Contributing

1. Follow the established code style (ESLint + Prettier)
2. Add tests for new features
3. Update documentation
4. Ensure accessibility standards

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ for educational purposes**
