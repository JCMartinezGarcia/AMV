# Virtual Medical Assistant
A web application that helps doctors schedule appoinments and visualize relevant data for them with interactive charts. Also allows them to have registered all their patients.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This project is divided into two main parts:

- **api/** → Backend project (Node.js + Express + JWT authentication)
- **client/** → Frontend project (React + Vite + TailwindCSS)
  
## 📂 Project Architecture

```markdown
├── api/ # Backend (Express REST API)
│ ├── src/
│ │ ├── routes/ # Route definitions (auth, patients, doctors, etc.)
│ │ ├── models/ # Database models (e.g., User, Patient, Appointment)
│ │ ├── controllers/ # Business logic for each route
│ │ └── middleware/ # Auth middleware (JWT verification)
│ ├── package.json # Dependencies for backend
│ └── ...
│
├── client/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── context/ # AuthContext and global state
│ │ ├── pages/ # Page components (Login, Dashboard, Patients, etc.)
│ │ └── routes/ # Protected routes setup
│ ├── package.json # Dependencies for frontend
│ └── vite.config.js # Vite configuration
│
└── README.md # Project documentation
└── LICENSE # LICENSE
```
## 🛠️ Tech Stack

### Backend (`api`)
- Node.js + Express
- JWT Authentication
- Axios (for client requests testing)
- PostgreSQL / MySQL / MongoDB (depending on your setup)

### Frontend (`client`)
- React + Vite
- React Router DOM
- Context API for authentication
- TailwindCSS
- HeroUI

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/JCMartinezGarcia/AMV.git
cd AMV
```
### 2. Install Dependencies in API Project
```bash
cd api
npm install
```
### 3. Run API Migrations and Seeders
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
### 6. Run API Project
```bash
npm start
```
### 4. Install Dependencies in Client Project
```bash
cd client
npm install
```
### 5. Run Client Project
```bash
npm run dev
```
