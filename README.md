# Virtual Medical Assistant
A web application that helps doctors schedule appoinments and visualize relevant data for them with interactive charts. Also allows them to have registered all their patients.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
## ✨ Features
- User authentication with JWT
- Create, edit, and delete tasks
- Responsive design for mobile and desktop
  
## 🛠️ Tech Stack

### Backend (`api`)
- Node.js + Express
- JWT Authentication
- Axios (for client requests testing)
- SQLite

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
