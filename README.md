<div align="center">

# 🎬 CineScope - movie app

### Discover movies you'll love — instantly.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-Cloud-FD366E?style=flat-square&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![TMDB](https://img.shields.io/badge/TMDB-API-01B4E4?style=flat-square&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

![Movie App Hero](public/hero.png)

</div>

---

## Overview

**CineScope** is a fast, responsive movie discovery app powered by the TMDB API and Appwrite. Search millions of movies in real time, track what's trending, and enjoy a polished dark-themed UI built for every screen size.

---

## Features

| Feature | Description |
|---|---|
| 🔎 **Real-time Search** | Debounced search queries for smooth, efficient API calls |
| 🔥 **Trending Movies** | Dynamically ranked trending content via Appwrite metrics |
| 📱 **Fully Responsive** | Optimized layout for desktop, tablet, and mobile |
| 🎨 **Modern UI** | Dark theme with Translucent design effects and fluid animations |
| ⚡ **Vite Powered** | Lightning-fast HMR and optimized production builds |

---

## Tech Stack

- **Frontend** — React 19 + Vite
- **Styling** — Tailwind CSS v4
- **Backend** — Appwrite Cloud (trending metrics & database)
- **Movie Data** — TMDB API

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v22+
- [npm](https://www.npmjs.com/)
- A free [TMDB API key](https://www.themoviedb.org/settings/api)
- A free [Appwrite](https://appwrite.io/) project

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/shasbinas/Movie-App.git
cd movie-app

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
```

Open `.env` and fill in your keys:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

```bash
# 4. Start the dev server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) 🚀

---

## Project Structure

```
movie-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Search.jsx
│   │   ├── MovieCard.jsx
│   │   └── Spinner.jsx
│   ├── assets/             # Images and icons
│   ├── appwrite.js         # Appwrite client & API logic
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Entry point
├── .env.example
├── vite.config.js
└── package.json
```

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

Released under the [MIT License](LICENSE). Free to use and modify.

---

<div align="center">
  <sub>Built with ❤️ using React, Tailwind CSS, and Appwrite</sub>
</div>