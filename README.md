# Personal Portfolio

A modern, responsive portfolio website built with React.js, showcasing my professional experience, skills, and projects.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📑 Multiple sections including:
  - About Me
  - Skills & Services
  - Project Showcase
  - Education History
  - Work Experience
  - Interests
  - Contact Form

## Technologies Used

- React.js
- Bootstrap 4
- Font Awesome Icons
- EmailJS for contact form
- React Typed for text animations
- React Carousel
- Particles.js for interactive backgrounds
- GitHub Pages for deployment

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/matijakocevar/myPortfolio.git
cd myPortfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Deployment

The site is deployed using GitHub Pages. To deploy new changes:

```bash
npm run deploy
```

This will build the project and deploy it to the gh-pages branch.

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── aboutMe.jsx
  │   ├── contacts.jsx
  │   ├── education.jsx
  │   ├── experience.jsx
  │   ├── interests.jsx
  │   ├── projects.jsx
  │   ├── skills.jsx
  │   └── styles/        # Component-specific styles
  ├── images/            # Static images
  └── App.js             # Main application component
```
