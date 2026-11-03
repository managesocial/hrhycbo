Horizon Rivers of Hope Youth CBO

Welcome to the official web platform repository for Horizon Rivers of Hope Youth CBO, a youth-led organization based in Eldoret, Uasin Gishu County, Kenya. Our mission centers on four core pillars: Youth Empowerment, Environmental Sustainability & Circular Economy, Health & Well-being, and Peace, Global Citizenship & Sister City Partnerships.
🛠 Tech Stack

    Framework: Next.js (App Router)

    Language: TypeScript

    Styling: Tailwind CSS (featuring Glassmorphism UI components)

    Animations: Framer Motion

    Icons: Tabler Icons (@tabler/icons-react)

🚀 Getting Started

First, clone the repository and install dependencies:
Bash

npm install

# or

yarn install

# or

pnpm install

Then, run the development server:
Bash

npm run dev

# or

yarn dev

# or

pnpm dev

Open http://localhost:3000 in your browser to view the application locally.

📁 Project Structure Overview
Plaintext

src/
├── app/
│ ├── (public)/ # App Router Route Group (shares primary layout)
│ │ ├── about/ # Leadership, Chairman & Patron notes
│ │ ├── contact/ # Contact & Community involvement forms
│ │ ├── gallery/ # Media & photo showcase
│ │ ├── news/ # Announcements & Impact Updates hub
│ │ ├── privacy/ # Privacy Policy
│ │ ├── projects/ # Core project updates (CESIP, Peace Initiatives)
│ │ ├── terms/ # Terms of Service
│ │ ├── layout.tsx # Primary root layout
│ │ └── page.tsx # Homepage (Hero, Core Pillars, CTAs)
│ ├── globals.css # Tailwind CSS directives & custom theme rules
│ └── providers.tsx # Context providers (Theme, Motion, etc.)
└── components/ # Reusable UI sections and dynamic modals

🌟 Key Features

    Announcements & Impact Updates Hub: Dynamic project filtering for upcoming and completed community initiatives.

    Interactive Core Pillars: Modal showcases highlighting initiative breakdowns, including the Bishop Korir Peace & Social Cohesion Initiative.

    Mobile Responsive Design: Tailored glassmorphism impact cards, responsive dark overlays, and adaptive layout ordering for optimal viewports across devices.

    Direct Engagement CTAs: Integrated PayPal donation portals and direct contact links for upcoming projects.

🚀 Deployment

The site is configured for seamless deployment on Vercel:

    Push your changes to GitHub / GitLab / Bitbucket.

    Import the repository into your Vercel Dashboard.

    Vercel will automatically detect Next.js and handle building static & dynamic routes.
