# IdentiPI React SPA

A modern, clean React single-page application for managing decentralized identity with the tagline **"One Tap. Zero Exposure."**

## Features

- **Login Page**: Dark, cyber-security themed login with animated neon accent
- **Dashboard**: Complete identity management interface with sidebar, top bar, and interactive cards
- **Modal System**: Reusable modal component for viewing DIDs, identity scores, requesting VCs, and managing incoming requests
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices
- **Mock Data**: No backend integration yet—all flows are simulated for front-end development

## Tech Stack

- **React 18** with hooks
- **Vite** for fast development and building
- **Plain CSS** (no Tailwind) with a modern design system
- **No routing library** — simple boolean state for login/dashboard switching

## Project Structure

```
src/
  App.jsx                    # Main app component with login/dashboard state
  index.jsx                  # React DOM entry point
  pages/
    LoginPage.jsx            # Login page with sidebar and card
    DashboardPage.jsx        # Main dashboard with cards and modals
  components/
    Sidebar.jsx              # Left navigation sidebar
    TopBar.jsx               # Top bar with title and user info
    StatCard.jsx             # Reusable stat/action card
    Modal.jsx                # Generic modal overlay
  styles/
    globals.css              # Global styles, design tokens, utilities
    login.css                # Login page specific styles
    dashboard.css            # Dashboard specific styles
    modal.css                # Modal specific styles
```

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Background (main) | Midnight Navy | #0A0F1F |
| Sidebar | Gradient Navy | #050814 → #0A0F1F |
| Cards | Dark Blue-Gray | #141B2D / #1A2334 |
| Primary Accent | Cardano Blue | #2E8BFF |
| Secondary Accent | Cyber Teal | #00E1D4 |
| Highlight | ZK Purple | #6A4BFF |
| Success | Trust Green | #00C853 |
| Error | Alert Red | #FF5252 |
| Main Text | White | #FFFFFF |
| Muted Text | Gray | #CED4E2 |

## Setup & Installation

1. **Navigate to project folder**:
   ```bash
   cd 'C:\Users\omkar\OneDrive\Documents\Cardano'
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start dev server**:
   ```bash
   npm run dev
   ```
   This will open `http://localhost:5173` automatically in your browser.

## Usage

### Login Page
- Displays the IdentiPI logo, tagline "One Tap. Zero Exposure.", and sidebar with Cardano + Midnight attribution.
- Right side contains the login form with email and password inputs.
- **Demo credentials**: Use any email and a password of at least 6 characters.
- Animated neon circle provides a modern visual accent.

### Dashboard
- **Sidebar**: Shows navigation (currently Dashboard active) and network status.
- **Top Bar**: Displays page title and user chip with avatar and placeholder email.
- **Cardano Wallet Hint**: Info text about future wallet integration.
- **Four Cards**:
  1. **Your DID** - View and copy your decentralized identifier.
  2. **Identity Score** - See your score (830/900) and verification summary.
  3. **Request VC** - Request a verification credential (dropdown for issuer selection).
  4. **Incoming Requests** - Approve/reject verification requests from TrustBank.

### Modals
All modals open from card buttons and display mock data with basic interactions:
- **DID Modal**: Copy button for the DID.
- **Score Modal**: Shows score badge and verification checklist.
- **Request VC Modal**: Issuer selection dropdown and info text.
- **Requests Modal**: Table with approve/reject actions.

## Future Enhancements

- Real backend API integration
- Cardano wallet connection (Lace, Eternl, etc.)
- Actual VC (Verifiable Credential) request/response flow
- Real-time notifications
- User profile settings
- Dark/light theme toggle
- Multi-language support

## Deployment

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Notes

- This is a front-end only demo with mock data.
- No real authentication or state persistence.
- Responsive design works on all screen sizes.
- Modern CSS with subtle animations and transitions.
- Accessible color contrast and semantic HTML structure.
