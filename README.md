# 🎓 CTP-Pococi — Transportation Scholarship Management System

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
