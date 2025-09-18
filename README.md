# Quizzer Fullstack Application

This repository contains the **fullstack implementation** of a Quiz application. It includes a **NestJS backend** (with Prisma ORM and JWT authentication) and a **Next.js frontend** built with modern React features. Docker Compose is provided to orchestrate the database, backend, and frontend.

---

## Pages Overview

The frontend exposes the following pages:

- `/` (Home): Landing page with navigation.
- `/sign-in`: User login form.
- `/sign-up`: User registration form.
- `/quizzes`: Displays a list of all quizzes.
- `/quizzes/:id`: Displays a single quiz with its questions and answers.
- `/create`: Allows authenticated users to create a new quiz.

---

## Environment Configuration

Environment variables are separated per service. Each service provides a `.env.example` file:

### `/infra/dev/.env.example`

```env
# Database configuration
POSTGRES_PASSWORD=your_password
POSTGRES_USER=your_username
POSTGRES_DB=your_database_name
POSTGRES_HOST=quizzer-db
POSTGRES_PORT=5432

# JWT configuration
JWT_SECRET=your_jwt_secret
JWT_ACCESS_EXPIRES_IN=your_jwt_access_expires_in
JWT_REFRESH_EXPIRES_IN=your_jwt_refresh_expires_in

# Misc configuration
PORT=8080
PASSWORD_SALT_ROUNDS=10
```

### `/backend/.env.example`

```env
# Database configuration
DATABASE_URL=postgresql://your_username:your_password@quizzer-db:5432/your_database_name

# JWT configuration
JWT_SECRET=your_jwt_secret
JWT_ACCESS_EXPIRES_IN=your_access_expires_in
JWT_REFRESH_EXPIRES_IN=your_jwt_refresh_expires_in

# Misc configuration
PORT=8080
PASSWORD_SALT_ROUNDS=10
```

### `/frontend/.env.example`

```env
NEXT_PUBLIC_API_BASE_URL=http://quizzer-backend:8080/api/v1
```

Rename `.env.example` to `.env` and fill in the required values before running the application.

---

## Database Setup

The backend uses **Prisma ORM**. Before running the application for the first time, you must generate the Prisma client and apply migrations:

```bash
pnpm run db:generate
pnpm run db:migrate
```

---

## Running the Application

### With Docker Compose

1. Navigate to the root projec directory.
2. Start all services:

```bash
make compose-up
```

This will start:

- **quizzer-db**: PostgreSQL database
- **quizzer-backend**: NestJS backend
- **quizzer-frontend**: Next.js frontend

The application will be available at: [http://localhost:3000](http://localhost:3000)

---

## How to Use

1. **Register a User** → Go to `/sign-up` and create an account.
2. **Login** → Go to `/sign-in` and authenticate.
3. **Create a Quiz** → Go to `/create` to add a new quiz (requires authentication).
4. **Browse Quizzes** → Navigate to `/quizzes` to see available quizzes.
5. **View a Quiz** → Click a quiz to open `/quizzes/:id` and view its content.
6. **Delete a Quiz** → Go to `/quizzes`, select a quiz, and delete it (requires authentication).

---

## Notes

- All `.env` files are excluded from version control — use the provided `.env.example` files as templates.
- Make sure to run database migrations before using the application.
