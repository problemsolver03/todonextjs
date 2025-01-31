Assignment Title: Full-Stack Developer Challenge

Introduction: You are tasked with building a simple task management application. The application will allow users to create, update, and delete tasks. Tasks should have a title, description, and a status (e.g., "To Do," "In Progress," "Done"). Users should also be able to view a list of tasks and filter them by status.

If you are attempting this as Frontend(mobile/web) Assignment, feel free to use firebase for db and authentication.

Front-End Requirements:

    User Interface: Create a user-friendly interface for the task management application. It should have atleast the following components:
        A form to create a new task with fields for title, description, and status.
        A list of tasks with the ability to update the status or delete a task.
        A filter or dropdown to filter tasks by status (e.g., "All," "To Do," "In Progress," "Done").

You can be creative in adding additional features here.

    User Experience: Implement smooth and responsive user interactions, including form validation to ensure that tasks cannot be created without a title. Use modern front-end technologies such as React, Angular, or Vue.js.

    Styling: Style the application using CSS or a CSS preprocessor (e.g., SASS/SCSS). You can also use a CSS framework if preferred.

    Responsive Design: Ensure that the application is responsive and works well on both desktop and mobile devices.

Back-End Requirements:

    API Development: Create a RESTful API to handle the CRUD (Create, Read, Update, Delete) operations for tasks. The API should be built using a back-end technology of your choice (e.g., Node.js with Express, Ruby on Rails, Django, etc.).

    Data Storage: Implement a database to store task data. You can use any database system (e.g., PostgreSQL, MySQL, MongoDB) and set up the necessary data models to represent tasks.

    Validation: Implement server-side validation to ensure that task data is valid before saving it to the database. Tasks must have a title and a valid status.

    Error Handling: Properly handle errors, including sending appropriate error messages and status codes in response.

General Requirements:

    Code Quality: Write clean, well-documented, and maintainable code. Use coding best practices and conventions for the chosen programming language and framework.

    Version Control: Use a version control system (e.g., Git) to track changes in your code and provide a Git repository for the assessment.

    Testing: Write unit tests for critical parts of your application, such as API endpoints and data validation.

    Security: Implement basic security measures to protect the application from common vulnerabilities.

Bonus Features (Optional):

You can implement additional features to make your project stand out:

    User authentication and authorization to restrict access to tasks.
    Task due dates and reminders.
    Task sorting and searching capabilities.
    User profiles with avatars.

Submission:

    Provide a link to your version-controlled repository (e.g., GitHub, GitLab).
    Include clear instructions on how to set up and run your application.
    Share any additional documentation or notes that might help reviewers understand your project.

Assessment Criteria:

Your assignment will be evaluated based on:

    Functionality: Does the application meet the specified requirements and work as expected?

    Code Quality: Is the code clean, organized, and well-documented?

    User Experience: Is the user interface intuitive and responsive?

    Security: Are there basic security measures in place?

    Testing: Are there unit tests for critical components?

    Bonus Features: If implemented, do they enhance the application's usability?

This assignment is designed to assess your full-stack development skills, so feel free to showcase your capabilities and creativity. Good luck!

P.S. Any assumptions taken while design / implementation should be documented in README file

Plan

Schema

User
email
password
name
id

tasks
id
title
description
status
user:id

Pages

1.  Login
2.  Register
3.  Dashboard
4.  Myprofile

APIS

1.  Authentication
    req = {email,password}
    res {email,name,tasks}

2.  Create Tasks
    req = { title,description,status}
    res =[{tasks}]

3.  Update Tasks,
    req ={
    taskid,title,description,status
    }
    res{[tasks]}

4.  Load user details
    req{userid}
    res {email,name}

5.  Search tasks.
    req={query}
    res{[tasks]}

Security
Encrypyt password

Technical details
Full stack application using Nextjs,
frontend interactive is handled using react and tailwindcss, backend api's are built using node using next wrapper, database used is supabase(postgre sql).

Flow
New users

1.  Register -> Dashboard -> CreateTasks-> ViewTasks ->UpdateTasks
    Existing users
2.  Login -> Dashboard -> ViewTasks/CreateTasks -> UpdateTasks

Demo url
https://todonextjs-lemon.vercel.app/
