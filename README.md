# 🎓 CTP-Pococi — Transportation Scholarship Management System

⭐ If you find this project interesting, feel free to explore or fork the repository and gift me a star!.

CTP-Pococi is a web application designed to manage the student transportation scholarship process at Colegio Técnico Profesional de Pococí in Costa Rica.

The system aims to modernize and simplify the management of transportation scholarships by replacing manual processes with a centralized web-based platform.

## ✨ Features

- 🎓 Transportation scholarship management
- 🔎 Student information lookup
- 📋 Scholarship application management
- ✅ Scholarship approval and rejection workflow
- 📊 Centralized management of scholarship information
- 🖥️ Web-based interface for administrative users
- 📱 Responsive user interface

## 🎯 Project Purpose

The project was created to address the challenges associated with managing a large number of transportation scholarship applications through manual processes.

By moving the process to a web application, the system aims to make scholarship management more organized, efficient, and accessible for the people responsible for the process.

## 🛠️ Technologies

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Supabase**
- **PostgreSQL**
- **ESLint**
- **pnpm**

## 🏗️ Architecture

The application follows a modern frontend architecture built with React and TypeScript.

```text
┌──────────────────────────┐
│        React UI          │
│      TypeScript          │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│        Supabase          │
│                          │
│  Authentication          │
│  Database                │
│  Row Level Security      │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│       PostgreSQL         │
└──────────────────────────┘
```
# 🚀 Getting Started

Prerequisites

Make sure you have installed:

Node.js
pnpm

Installation
```js
Clone the repository:

git clone https://github.com/TonyyDev/ctp-pococi.git

cd ctp-pococi
```

Install the dependencies:
```js
pnpm install
```
Environment Variables
Create a .env file in the root directory and configure the required environment variables.

```js
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run the development server
```js
pnpm dev
```

The application will be available through the local development server provided by Vite.

```text
📂 Project Structure
ctp-pococi/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   └── ...
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
