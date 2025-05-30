# hueneu Studio Website

This is the official website for hueneu, a graphic design studio "Where stories find their aesthetic."

## About hueneu

hueneu (Hue + Neu) embodies creative color bursts grounded in neutrality. The studio's personality is quiet but bold, calm, mysterious, and a little playful, often surprising with unexpected design moments ("Who Knew?"). The design style is story-first, intentional, balanced, sometimes nostalgic, and always evocative. The voice is warm, poetic, and subtly humorous, aiming for soft sophistication.

This website is a one-page responsive experience designed to reflect hueneu's unique identity and story-first design philosophy.

## Tech Stack

- **Frontend:** Next.js (React 18+)
- **Styling:** Tailwind CSS
- **UI Components:** Headless UI (for accessible components)
- **Animations:** Framer Motion / GSAP (planned)
- **Contact Form Backend:** Next.js API Route (using SendGrid for email)

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm (comes with Node.js)

### Environment Variables

This project uses SendGrid to handle contact form submissions. You'll need to create a `.env.local` file in the root of the project and add your SendGrid API key and recipient email address:

```
SENDGRID_API_KEY='YOUR_SENDGRID_API_KEY'
SENDGRID_TO_EMAIL='your_recipient_email@example.com'
```

Replace `YOUR_SENDGRID_API_KEY` with your actual SendGrid API key and `your_recipient_email@example.com` with the email address where you want to receive contact form submissions.

### Installation & Running

1.  **Clone the repository (if applicable) or ensure all project files are in place.**
2.  **Make the startup script executable (if needed on your system):**
    ```bash
    chmod +x startup.sh
    ```
3.  **Run the startup script:**
    ```bash
    ./startup.sh
    ```
    This script will:
    - Install all necessary dependencies (`npm install`).
    - Build the Next.js application (`npm run build`).
    - Start the production server (`npm run start`), which will serve the application on `http://localhost:9000`.

## Available Scripts

In the project directory, you can also run individual scripts:

- `npm run dev`: Runs the app in development mode on `http://localhost:9000` with hot-reloading.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server (requires a prior build). Serves on `http://localhost:9000`.
- `npm run lint`: Lints the project files using Next.js's built-in ESLint configuration.

