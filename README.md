# Blog App

This is a **Next.js-based** blog platform that fetches posts from the **NewsAPI** and allows users to view, search, and upvote/downvote posts.

## Features
- Fetches latest news articles dynamically
- Client-side routing with Next.js App Router
- Server-side rendering (SSR) and caching for better performance
- Search functionality with useDebounce for optimized filtering
- Claps system similar to Medium (Upvote/Downvote with a local JSON-based API)
- SEO optimizations (`metadata`, `openGraph`, `robots.txt`)
- Responsive Material-UI styling

---

## 🛠️ Tech Stack
- **Next.js 13+** (App Router)
- **React.js**
- **Material-UI** for styling
- **Mock DB via JSON-based claps API**

---

## 📌 Installation Guide

### 🔹 1. Clone the repository:
```sh
--open the terminal and run the following commands:
1.git clone https://github.com/your-username/tsachiel-blog-app.git
2.cd blog-app 
3.npm i after cloning the project

--Create a .env file in the root directory and add the following:
1. NEWS_API_BASE_URL=https://newsapi.org/v2/top-headlines
2. NEWS_API_KEY=148adb7948294936bd4491a0d69f99bf

--Run the development server: npm run dev (The project will be available at http://localhost:3000.)
