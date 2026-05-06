# 🚕 Radham Taxi App

A full-stack taxi booking web application built using:

```plaintext id="tvjlwm"
Frontend  : React.js
Backend   : Spring Boot
Database  : MySQL
Styling   : Glassmorphism UI + Responsive Design
Version Control : Git & GitHub
```

---

# 🌟 Features

✅ User Registration & Login
✅ Backend Authentication
✅ Responsive UI (Desktop + Mobile)
✅ Animated Login Success Screen
✅ Taxi Categories (Mini / Sedan / SUV)
✅ Dynamic Driver Assignment
✅ Ride Booking System
✅ Cash on Delivery Flow
✅ Ride Progress Animation
✅ User-specific Ride History
✅ MySQL Database Integration
✅ REST APIs using Spring Boot
✅ Glassmorphism Dashboard Design
✅ GitHub Version Control

---

# 📂 Project Structure

```plaintext id="hjlwm1"
Radham-Taxi-App
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
└── backend
    ├── src
    ├── pom.xml
    └── ...
```

---

# ⚙️ Tech Stack

| Technology  | Usage                 |
| ----------- | --------------------- |
| React.js    | Frontend UI           |
| Spring Boot | Backend APIs          |
| MySQL       | Database              |
| Axios       | API Communication     |
| Maven       | Dependency Management |
| Git/GitHub  | Version Control       |

---

# 🛠️ Backend Setup

## 1️⃣ Open backend folder

```bash id="xjlwm2"
cd backend
```

---

## 2️⃣ Configure MySQL

Create database:

```sql id="vjlwm3"
CREATE DATABASE taxi_app;
```

---

## 3️⃣ Update `application.properties`

```properties id="4jlwm4"
spring.datasource.url=jdbc:mysql://localhost:3306/taxi_app
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## 4️⃣ Run Backend

Windows:

```bash id="djlwm5"
mvnw spring-boot:run
```

Linux/Mac:

```bash id="qjlwm6"
./mvnw spring-boot:run
```

Backend runs on:

```plaintext id="9jlwm7"
http://localhost:8080
```

---

# 💻 Frontend Setup

## 1️⃣ Open frontend folder

```bash id="x9jlwm"
cd frontend
```

---

## 2️⃣ Install dependencies

```bash id="4mjlwm"
npm install
```

---

## 3️⃣ Start React App

```bash id="m0jlwm"
npm start
```

Frontend runs on:

```plaintext id="0jlwm1"
http://localhost:3000
```

---

# 🗄️ Database Tables

## Users Table

```sql id="1jlwm2"
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    role VARCHAR(50)
);
```

---

## Rides Table

```sql id="6jlwm3"
CREATE TABLE rides (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    ride_type VARCHAR(50),
    vehicle VARCHAR(100),
    driver_name VARCHAR(100),
    vehicle_number VARCHAR(50),
    payment_method VARCHAR(50),
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 🔌 REST APIs

## User APIs

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| POST   | `/users/register` | Register User |
| POST   | `/users/login`    | Login User    |

---

## Ride APIs

| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| POST   | `/rides/save`       | Save Ride      |
| GET    | `/rides/{username}` | Get User Rides |

---

# 🎨 UI Highlights

✅ Glassmorphism Design
✅ Animated Logo Transitions
✅ Animated Ride Progress Bar
✅ Responsive Layout
✅ 3D Hover Taxi Cards
✅ Modern Dashboard UI

---

# 📦 Git Commands

## Initialize Git

```bash id="9jlwm4"
git init
```

---

## Add Files

```bash id="mjlwm5"
git add .
```

---

## Commit Changes

```bash id="yjlwm6"
git commit -m "Initial commit"
```

---

## Connect GitHub Repository

```bash id="3jlwm7"
git remote add origin https://github.com/YOUR_USERNAME/Radham-Taxi-App.git
```

---

## Push Project

```bash id="0jlwm8"
git branch -M main
git push -u origin main
```

---

# 🚀 Future Improvements

```plaintext id="7jlwm9"
✅ JWT Authentication
✅ Online Payment Gateway
✅ Google Maps Integration
✅ Live Driver Tracking
✅ Admin Dashboard
✅ Driver Panel
✅ Ride Cancellation
✅ Push Notifications
✅ Deployment on Cloud
```

---

# 👨‍💻 Author

```plaintext id="2jlwm0"
Developed by Nihith
```

🚕 Radham Taxi App — Modern Full Stack Taxi Booking Platform
