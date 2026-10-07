# XG Garage Management System

XG is a full-stack garage and automotive workshop management system being developed to digitize and streamline day-to-day workshop operations.

The system is designed around different garage staff roles, including administrators, service advisors, mechanics, inventory personnel, cashiers/accounts staff, and quality control personnel.

> **Project Status:** 🚧 Early-Stage Development

Authentication, user administration, database connectivity, routing, and the initial role-based frontend architecture have been implemented. Core garage operational modules are still under development.

## Currently Implemented

### Authentication & User Management

- User login
- Password hashing using bcrypt
- Administrator-controlled user registration
- PostgreSQL user storage
- Authentication API structure
- Frontend/backend communication using Axios

### Role-Based Interface

Initial interfaces have been created for:

- Administrator
- Service Advisor
- Mechanic
- Inventory / Parts
- Cashier / Accounts

Some role dashboards currently serve as placeholders for functionality planned in later development phases.

### Administration

Initial administration functionality includes:

- Admin dashboard
- Manage users interface
- Register user interface
- User-role based navigation

### Service Advisor

Initial Service Advisor interface and workflow structure have been created as the foundation for future workshop-management functionality.

## Technology Stack

### Frontend

- React
- Vite
- React Router
- Axios
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- PostgreSQL
- bcrypt
- JSON Web Token library
- CORS
- dotenv

### Development Tools

- Visual Studio Code
- DBeaver
- Postman
- Git
- GitHub

## Project Structure

```text
XG/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── .env.example
├── .gitignore
└── README.md
```

## Planned Features

The long-term system architecture is intended to include:

- Customer management
- Vehicle registration and profiles
- Search by registration plate or chassis number
- Digital job cards
- Service Advisor workflows
- Mechanic assignment
- Job status tracking
- Parts and inventory management
- Parts usage against job cards
- Supplier management
- Workshop scheduling
- Inspection and quality-control workflows
- Estimates and quotations
- Invoicing
- Payment processing
- Service history
- Management reports and dashboards
- Role-based access control

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

## Environment Configuration

Create a `.env` file inside the backend directory.

Refer to `.env.example` for the required environment variables.

Never commit production credentials or secrets to the repository.

## Development Direction

XG is intended to become an end-to-end workshop management platform covering the complete vehicle service process from customer arrival and job-card creation through workshop operations, parts usage, quality control, invoicing, and vehicle release.

## Author

**Abdirahman Abdullahi**

Full-Stack Developer

---

This project is under active development. Some interfaces and modules are placeholders for functionality planned in later development phases.