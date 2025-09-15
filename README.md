# Quizzer Backend

This repository contains the **backend-only implementation** of a Quiz application. Due to time constraints, only the backend was developed. The backend is built with **NestJS**, uses **Prisma** for database access, and **JWT** for authentication.

## Features

* User registration and login using JWT
* Create quizzes with multiple questions, options, and correct answers
* Fetch all quizzes
* Delete a quiz by ID (with a known bug: deleting a quiz may cause the app to become unavailable)

## Endpoints

### Register a User

**POST** `/api/v1/auth/users`

```json
{
    "username": "test",
    "email": "test@gmail.com",
    "password": "Test1234@"
}
```

### Login a User

**POST** `/api/v1/auth/sessions`

```json
{
    "usernameOrEmail": "alex",
    "password": "Test1234@"
}
```

### Create a Quiz (Bearer token required)

**POST** `/api/v1/quizzes`

```json
{
  "title": "Sample Quiz",
  "questions": [
    {
      "text": "What is the capital of France?",
      "type": "SINGLE",
      "options": [
        { "text": "Paris" },
        { "text": "London" },
        { "text": "Berlin" }
      ],
      "correctAnswers": [
        { "text": "Paris" }
      ]
    },
    {
      "text": "Select all prime numbers",
      "type": "CHECKBOX",
      "options": [
        { "text": "2" },
        { "text": "3" },
        { "text": "4" },
        { "text": "5" }
      ],
      "correctAnswers": [
        { "text": "2" },
        { "text": "3" },
        { "text": "5" }
      ]
    },
    {
      "text": "Is the sky blue?",
      "type": "BOOLEAN",
      "options": [
        { "text": "True" },
        { "text": "False" }
      ],
      "correctAnswers": [
        { "text": "True" }
      ]
    }
  ]
}
```

### Get All Quizzes

**GET** `/api/v1/quizzes`

### Delete a Quiz by ID (Bearer token required)

**DELETE** `/api/v1/quizzes/{id}`

## Setup Instructions

1. Install **Docker**
2. Use the provided **Makefile**
3. Start the backend and the database with:

```bash
make compose-up
```

## Notes

* **Known Bug:** Deleting a quiz by ID removes the quiz but may make the app unavailable.
* This project focuses only on the backend; frontend was not implemented due to time constraints.
