<div align="center">

# 🌿 FlowLeave  
 
### Leave management, without the paperwork. 

A modern, role-based leave management platform for organizations to manage employees, departments, leave balances, approvals, and requests — all from one place.

<br/>   

<a href="YOUR_FRONTEND_URL"> 
  <img src="https://img.shields.io/badge/Live%20Application-Visit%20FlowLeave-0f766e?style=for-the-badge&logo=render&logoColor=white" alt="Live Application"/>
</a>
<a href="https://github.com/BhagathK7/FlowLeave">
  <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github" alt="GitHub"/>
</a> 
 
<br/><br/>

<img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=flat-square&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Spring%20Boot-Backend-6DB33F?style=flat-square&logo=springboot&logoColor=white"/>
<img src="https://img.shields.io/badge/Java-21-ED8B00?style=flat-square&logo=openjdk&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
<img src="https://img.shields.io/badge/Render-Deployment-46E3B7?style=flat-square&logo=render&logoColor=black"/>
<img src="https://img.shields.io/badge/Neon-Cloud%20Database-00E5A0?style=flat-square&logo=postgresql&logoColor=black"/>

</div>

---
 
## ✦ Overview

**FlowLeave** is a full-stack leave management system built to simplify the complete employee leave lifecycle.

Instead of managing leave requests through spreadsheets, emails, or disconnected systems, FlowLeave provides a centralized workspace where:

**Employees** apply for leave and track their balances. 
**Managers** review, approve, or reject requests.
**Administrators** manage employees, departments, and organization-wide leave activity.

```text
                    ┌─────────────────────┐
                    │      FLOWLEAVE          │
                    │  Leave Management       │
                    └──────────┬──────────┘
                                 │
              ┌────────────────┼────────────────┐
              │                   │                   │
              ▼                  ▼                   ▼
        ┌───────────┐    ┌───────────┐    ┌───────────┐
        │ EMPLOYEE    │    │  MANAGER    │    │   ADMIN     │
        ├───────────┤    ├───────────┤    ├───────────┤
        │ Apply       │    │ Review      │    │ Employees   │
        │ Track       │    │ Approve     │    │ Depts       │
        │ Balance     │    │ Reject      │    │ Dashboard   │
        └───────────┘    └───────────┘    └───────────┘
```

---
 
# ✨ Why FlowLeave?

Traditional leave management often looks like:

```text
Employee → Email → Manager → Spreadsheet → HR → Manual Update
```

FlowLeave turns that into:

```text
Employee
    ↓
Leave Request
    ↓
Manager Review
    ↓
Approval / Rejection
    ↓
Leave Status & Balance
```

Everything stays connected.

---

# 🚀 Core Features

<table>
<tr>
<td width="50%">

### 👤 Employee Management

Create and manage employee profiles with:

* Employee codes
* Personal information
* Designation
* Department
* Joining date
* Role
* Account credentials

</td>
<td width="50%">

### 🏢 Department Management

Organize employees by department.

* Create departments
* Maintain department information
* Associate employees
* View organizational structure

</td>
</tr>

<tr>
<td width="50%">

### 📝 Leave Requests

Employees can submit leave requests with:

* Leave type
* Start date
* End date
* Reason
* Request status

</td>
<td width="50%">

### 📊 Leave Balances

Employees can track available leave through their personal balance.

Supported leave categories include:

* Casual Leave
* Sick Leave
* Earned Leave

</td>
</tr>

<tr>
<td width="50%">

### ✅ Manager Approvals

Managers can:

* View requests
* Review leave details
* Approve requests
* Reject requests
* Add remarks

</td>
<td width="50%">

### 📈 Admin Dashboard

Administrators get an overview of:

* Employees
* Departments
* Pending requests
* Approved requests
* Recent leave activity

</td>
</tr>
</table>

---

# 🔐 Role-Based Experience

FlowLeave is built around three distinct roles.

### 🟢 Employee

```text
Login
  ↓
Employee Dashboard
  ├── Leave Balance
  ├── Apply for Leave
  └── Track Requests
```

### 🔵 Manager

```text
Login
  ↓
Manager Dashboard
  ├── View Requests
  ├── Approve Leave
  ├── Reject Leave
  └── Add Remarks
```

### 🟣 Administrator

```text
Login
  ↓
Admin Dashboard
  ├── Employee Management
  ├── Department Management
  ├── Leave Monitoring
  └── Organization Overview
```

---

# 🔄 Leave Lifecycle

A leave request follows a simple, transparent workflow:

```text
                         ┌──────────────┐
                         │   PENDING    │
                         └──────┬───────┘
                                │
                   ┌────────────┴────────────┐
                   │                         │
                   ▼                         ▼
             ┌───────────┐             ┌───────────┐
             │ APPROVED  │             │  REJECTED │
             └───────────┘             └───────────┘
```

The employee can always see the current state of their request.

---

# 🧩 System Architecture

FlowLeave follows a clean three-tier architecture.

```text
┌─────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                        │
│                                                         │
│                 React + Vite Frontend                   │
│                                                         │
└───────────────────────────┬─────────────────────────────┘
                            │
                            │ HTTPS / REST API
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                    │
│                                                         │
│              Spring Boot REST Backend                   │
│                                                         │
│   Controllers → Services → Repositories → Hibernate     │
│                                                         │
└───────────────────────────┬─────────────────────────────┘
                            │
                            │ JDBC
                            ▼
┌─────────────────────────────────────────────────────────┐
│                       DATA LAYER                        │
│                                                         │
│                  PostgreSQL / Neon                      │
│                                                         │
│     Employees • Departments • Balances • Requests      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Production architecture

```text
                     INTERNET
                         │
                         ▼
              ┌────────────────────┐
              │   Render Frontend  │
              │     React + Vite   │
              └─────────┬──────────┘
                        │
                        │ HTTPS
                        ▼
              ┌────────────────────┐
              │   Render Backend   │
              │   Spring Boot     │
              │      Docker       │
              └─────────┬──────────┘
                        │
                        │ PostgreSQL
                        ▼
              ┌────────────────────┐
              │       Neon         │
              │    PostgreSQL      │
              └────────────────────┘
```

---

# 🛠️ Technology Stack

<div align="center">

| Layer                  | Technology                      |
| ---------------------- | ------------------------------- |
| 🎨 Frontend            | React                           |
| ⚡ Build Tool           | Vite                            |
| 🌐 HTTP Client         | Axios                           |
| 🧭 Routing             | React Router                    |
| ☕ Backend              | Spring Boot                     |
| 💻 Language            | Java 21                         |
| 🗃️ ORM                | Spring Data JPA / Hibernate     |
| 🔒 Password Security   | Spring Security Crypto / BCrypt |
| 🛢️ Local Database     | MySQL                           |
| 🐘 Production Database | PostgreSQL                      |
| ☁️ Database Hosting    | Neon                            |
| 🚀 Application Hosting | Render                          |
| 🐳 Containerization    | Docker                          |
| 🔧 Source Control      | Git + GitHub                    |

</div>

---

# 📂 Project Structure

```text
FlowLeave/
│
├── 📁 backend/
│   │
│   ├── 📁 src/
│   │   └── 📁 main/
│   │       ├── 📁 java/
│   │       │   └── 📁 com/flowleave/backend/
│   │       │       │
│   │       │       ├── 📁 config/
│   │       │       ├── 📁 controller/
│   │       │       ├── 📁 entity/
│   │       │       ├── 📁 repository/
│   │       │       └── 📁 service/
│   │       │
│   │       └── 📁 resources/
│   │           ├── application.properties
│   │           └── data.sql
│   │
│   ├── 🐳 Dockerfile
│   ├── 📄 pom.xml
│   └── 📄 .gitignore
│
├── 📁 frontend/
│   │
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 pages/
│   │   ├── 📁 services/
│   │   └── ...
│   │
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   └── 📄 .gitignore
│
└── 📄 README.md
```

---

# 🗄️ Data Model

The application revolves around four core entities:

```text
┌─────────────────┐
│   Department    │
└────────┬────────┘
         │
         │ 1 : N
         ▼
┌─────────────────┐
│    Employee     │
└──────┬─────┬────┘
       │     │
       │     │ 1 : N
       │     ▼
       │ ┌─────────────────┐
       │ │  Leave Request  │
       │ └─────────────────┘
       │
       │ 1 : 1
       ▼
┌─────────────────┐
│  Leave Balance  │
└─────────────────┘
```

### Core tables

```text
departments
employees
leave_balances
leave_requests
```

### Leave types

```text
CASUAL
SICK
EARNED
```

### Request states

```text
PENDING
APPROVED
REJECTED
CANCELLED
```

---

# 🔑 Authentication

FlowLeave provides a centralized login flow:

```text
User
 │
 ▼
Login Form
 │
 ▼
POST /api/auth/login
 │
 ▼
Spring Boot
 │
 ▼
Employee Repository
 │
 ▼
Role Identified
 │
 ├── ADMIN ──────► Admin Dashboard
 ├── MANAGER ────► Manager Dashboard
 └── EMPLOYEE ───► Employee Dashboard
```

Passwords are handled using BCrypt-based password hashing.

> Production credentials are provided through environment variables and are never required in the frontend.

---

# 🌍 Live Deployment

FlowLeave is deployed using a lightweight cloud-native setup.

### Frontend

**Render**

```text
React + Vite
```

### Backend

**Render**

```text
Spring Boot + Docker
```

### Database

**Neon**

```text
PostgreSQL
```

### Production flow

```text
Browser
   │
   ▼
Render Frontend
   │
   │ REST / HTTPS
   ▼
Render Backend
   │
   │ JDBC
   ▼
Neon PostgreSQL
```

---

# ⚙️ Run Locally

## Prerequisites

Install:

* Java 21
* Maven
* Node.js
* npm
* MySQL
* Git

---

## 1. Clone

```bash
git clone https://github.com/BhagathK7/FlowLeave.git
cd FlowLeave
```

---

## 2. Start the Backend

```bash
cd backend
```

Run:

```bash
mvn spring-boot:run
```

Backend:

```text
http://localhost:8080
```

---

## 3. Start the Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development mode:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🔧 Environment Configuration

Production configuration uses environment variables.

```properties
DB_URL
DB_USERNAME
DB_PASSWORD
PORT
```

Example:

```text
DB_URL=jdbc:postgresql://<host>/neondb?sslmode=require
DB_USERNAME=<username>
DB_PASSWORD=<secret>
PORT=8080
```

### 🔒 Security rule

Never commit:

```text
.env
application-local.properties
application-local-mysql.properties
application-postgres.properties
```

or any file containing real credentials.

Production secrets belong in the hosting platform's environment-variable settings.

---

# 🐳 Docker

The backend includes a Docker configuration for deployment.

Build:

```bash
cd backend
docker build -t flowleave-backend .
```

Run:

```bash
docker run -p 8080:8080 flowleave-backend
```

---


# 🧠 Engineering Highlights

FlowLeave demonstrates a complete full-stack development workflow:

```text
Design
  ↓
React UI
  ↓
REST APIs
  ↓
Spring Services
  ↓
JPA / Hibernate
  ↓
PostgreSQL
  ↓
Docker
  ↓
Cloud Deployment
```

The project also demonstrates:

* REST API design
* Layered backend architecture
* Entity relationships
* CRUD operations
* Role-based application flows
* Password hashing
* CORS configuration
* Environment-based configuration
* PostgreSQL migration from MySQL
* Docker-based deployment
* Cloud database integration
* Git-based deployment workflow

---

# 🌟 Project Vision

FlowLeave is built around a simple idea:

> **Leave management should be transparent for employees, efficient for managers, and effortless for administrators.**

The goal isn't just to digitize a leave form.

It's to create a complete workflow where every request has a clear owner, every decision is visible, and every employee knows exactly where their leave stands.

---

# 👨‍💻 Author

<div align="center">

### Bhagath K

Full-Stack Developer • Java • Spring Boot • React

<a href="https://github.com/BhagathK7">
  <img src="https://img.shields.io/badge/GitHub-BhagathK7-181717?style=for-the-badge&logo=github" alt="GitHub"/>
</a>

<br/><br/>

**FlowLeave · Full-Stack Leave Management Platform**

</div>

---

<div align="center">

### 🌿 FlowLeave

**Manage leave. Simplify work.**

<br/>

If you found this project interesting, consider giving it a ⭐ on GitHub.

</div>
