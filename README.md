# Project G-Scores

This application supports you to view score of students attending National High School Exam in VietNam in 2024.

This guide will walk you through setting up the project, installing dependencies, and running both the backend and frontend.

FRONTEND: ReactJS, ViteJS.<br>
BACKEND: NodeJS, ExpressJS.<br>
DATABASE: PostgreSQL.<br>

## 1. Setup Backend

### Step 1: Navigate to the Backend Directory

Use command
```bash 
cd Backend
```

### Step 2: Install Backend Dependencies
Install the necessary dependencies for the backend using npm.
```bash
npm install
```

### Step 3: Load data from diem_thi_thpt_2024.csv
Prerequisite to download dataset from this following link and add it to folder db 
[diem_thi_thpt_2024.csv](https://github.com/GoldenOwlAsia/webdev-intern-assignment-3/blob/main/dataset/diem_thi_thpt_2024.csv).<br>
Run this command to load data:
```bash
node scripts/loadData.js
```

### Step 4: Start Backend
Run the backend with command
```bash
npm run dev
```

## 2. Setup Frontend

### Step 1: Navigate to the Frontend Directory from Backend
Use command
```bash 
cd ../Frontend
```

### Step 2: Install Frontend Dependencies
Install the necessary dependencies for the backend using npm.
```bash
npm install
```

### Step 3: Start Frontend
Run the Frontend with command
```bash
npm run dev
```

P/S: Add .env file in Backend folder to set up for your user, password and database name and in Frontend one for API endpoint
