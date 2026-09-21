# Raj Kumar Shrestha — Portfolio

Personal portfolio website for **Raj Kumar Shrestha**, a Frontend Developer specializing in React, Next.js, Vue, Nuxt, TypeScript, and modern frontend architecture.

Built from the ground up with **Next.js 15, React, TypeScript, and Tailwind CSS**.

**Live:** [rajkshrestha1.com.np](https://rajkshrestha1.com.np)

---

## Tech Stack

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* JavaScript
* ESLint
* Git / GitHub
* Vercel

---

## Features

* Responsive design
* Light and dark mode
* Next.js App Router
* Type-safe project and experience data
* Dynamic project case-study pages
* SEO-friendly metadata
* Responsive navigation
* Experience timeline
* Technical expertise section
* About section
* Contact CTA
* Sitemap and robots configuration
* Vercel-ready deployment

---

## Project Structure

```text
.
├── app/
│   ├── about/
│   ├── work/
│   │   ├── [slug]/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── home/
│   ├── navigation/
│   ├── projects/
│   └── ui/
│
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
│
├── lib/
│   └── metadata.ts
│
├── public/
│   ├── images/
│   ├── favicon/
│   └── resume.pdf
│
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## Content

Portfolio content is managed through typed data files:

```text
data/projects.ts
data/experience.ts
data/skills.ts
```

This keeps the portfolio content separate from the UI components and makes it easy to update without modifying the underlying page structure.

---

## Assets

Static assets are stored inside:

```text
public/
```

Project images can be added to:

```text
public/images/projects/
```

The resume can be placed at:

```text
public/Raj-Kumar-Shrestha-Resume.pdf
```

---

## Deployment

The portfolio is optimized for deployment on **Vercel**.

Connect the repository to Vercel and use the default Next.js configuration.

```text
Build Command: npm run build
Install Command: npm install
```

---

## Design

The portfolio follows a minimal editorial approach focused on:

* Strong typography
* Clear visual hierarchy
* Generous whitespace
* Responsive layouts
* Subtle interactions
* Accessible UI
* Performance
* Maintainable component architecture

---

## Author

**Raj Kumar Shrestha**

Frontend Developer specializing in React, Next.js, Vue, Nuxt, and TypeScript.

* Website: [rajkshrestha1.com.np](https://rajkshrestha1.com.np)
* GitHub: [github.com/srestraj](https://github.com/srestraj)
* LinkedIn: [linkedin.com/in/srestraj](https://linkedin.com/in/srestraj)

---

## License

This repository contains the source code for a personal portfolio website. Personal content, branding, images, and other assets are not licensed for reuse.