# RealEstate CRM - Demo

A modern, interactive demo of a CRM application for the Indian real estate sector, featuring agent collaboration, lead management, property inventory, and AI-powered insights.

## Features

### Core CRM Features
- **Dashboard** - Key metrics, AI insights, and activity overview
- **Lead Management** - AI-scored leads with filtering and tracking
- **Property Inventory** - Comprehensive property portfolio management
- **Analytics** - Performance charts and reports
- **Mobile App** - Mobile-first interface showcase

### Agent Collaboration Features
- **Agent Onboarding** - 5-step wizard with RERA verification
- **Agent Network** - Agent directory with lead sharing marketplace
- **Deal Rooms** - Collaborative workspace for co-broking
- **Commission Management** - Transparent earnings tracking with calculator

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: Wouter
- **Charts**: Recharts
- **Build Tool**: Vite

## Local Development

### Prerequisites
- Node.js 18+ or pnpm 10+

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# or
pnpm build
```

The build output will be in the `dist/` folder.

## Deployment to Vercel

### Option 1: Via Vercel Dashboard
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Option 2: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   └── const.ts        # Constants
├── public/             # Static assets
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## Demo Data

All data in this demo is mock data for demonstration purposes only. No real backend functionality is implemented.

## License

MIT
