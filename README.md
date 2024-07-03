## Task manager application details

![Untitled](https://github.com/problemsolver03/todonextjs/assets/64726338/f35c83c1-5fe5-4adb-b831-6aa59028202d)

#### [Click to view demo](https://todonextjs-lemon.vercel.app/)

#### Built using

React with NextJs(v13.0) framework, Tailwindcss(v3.2) and postgres for database.

#### Features

1. Register
2. Login
3. Add Tasks
4. Edit Tasks
5. View Tasks

#### Basic flow

![New Flowchart(1)](https://github.com/problemsolver03/todonextjs/assets/64726338/5bd14f5c-346e-491b-b469-511a4bb2c47f)

#### API Endpoints

```/api/register - POST
/api/login - POST
/api/addtasks - POST
/api/gettasks - GET
/api/udpatetasks - POST
```

#### Database Schema

```
USER SCHEMA

name:string,
email:string(unique),
password:string,
id:integer,
created_at:datetime
```

```
TASK SCHEMA

title:string,
description:string,
status:string,
userid:integer,
id:integer,
created_at:datetime
```

### Basic Security measures

```
1. JWT token to prevent access to api routes
2. Form validations
```

#### Tried to cover these points

```

1. A form to create a new task with fields for title, description, and status.

2. A list of tasks with the ability to update the status or delete a task.

3. A filter or dropdown to filter tasks by status (e.g., "All," "To Do," "In Progress," "Done").

4. User Experience: Implement smooth and responsive user interactions, including form validation to ensure that tasks cannot be created without a title. Use modern front-end technologies such as React, Angular, or Vue.js.

5. Styling: Style the application using CSS or a CSS preprocessor (e.g., SASS/SCSS). You can also use a CSS framework if preferred.

6. Responsive Design: Ensure that the application is responsive and works well on both desktop and mobile devices.

7. API Development: Create a RESTful API to handle the CRUD (Create, Read, Update, Delete) operations for tasks. The API should be built using a back-end technology of your choice (e.g., Node.js with Express, Ruby on Rails, Django, etc.).

8. Data Storage: Implement a database to store task data. You can use any database system (e.g., PostgreSQL, MySQL, MongoDB) and set up the necessary data models to represent tasks.

9. Validation: Implement server-side validation to ensure that task data is valid before saving it to the database. Tasks must have a title and a valid status.

10. Error Handling: Properly handle errors, including sending appropriate error messages and status codes in response.

11. Code Quality: Write clean, well-documented, and maintainable code. Use coding best practices and conventions for the chosen programming language and framework.

12.  Version Control: Use a version control system (e.g., Git) to track changes in your code and provide a Git repository for the assessment.

13. Security: Implement basic security measures to protect the application from common vulnerabilities.

14.  User authentication and authorization to restrict access to tasks.

15. Task sorting  capabilities.

```

#### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
