# Fetan Backend Task Manager

This is a backend API for a task management system built with NestJS and Prisma.  
It supports user authentication with JWT, task creation, status updates, pagination, and search.  
The API is designed to be simple, scalable, and easy to integrate with frontend applications.

## Features

- User signup and login with JWT authentication  
- Create, update, retrieve, and delete tasks  
- Task status: pending and completed  
- Pagination and search support for tasks  
- CORS enabled for all origins  

## API Endpoints

- POST /auth/signup  
- POST /auth/login  
- GET /profile  
- POST /tasks  
- GET /tasks  
- PATCH /tasks/:id  
- DELETE /tasks/:id 