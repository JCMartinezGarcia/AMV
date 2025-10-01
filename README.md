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

### 1. Clone the repository
```bash
git clone https://github.com/JCMartinezGarcia/AMV.git
```
### 2. Navigate into the folder
```
cd AMV/api
```
### 3. Install dependencies
```bash
npm install
```
### 4. Run API migrations and seeders
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
### 5. Run API project
```bash
npm start
```
### 6. Navigate into the client folder
```bash
cd AMV/client
```
### 6. Install dependencies
```
npm install
```
### 7. Run project
```bash
npm run dev
```
### 8. Go to the localhost URL in your browser
