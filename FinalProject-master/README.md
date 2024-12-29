# TodoApp Project

## Overview
The **TodoApp** project is a full-stack web application developed to manage tasks effectively. It integrates a responsive React-based frontend and a robust Java backend built using Spring Boot. The project allows users to create, update, and delete tasks, organized under "Todo," "In Progress," and "Completed" categories.

---

## Features

### Frontend
- **Responsive Design:** Built using React.js and styled with Bootstrap for a seamless user experience.
- **Interactive UI:** Includes task columns (Todo, In Progress, Completed) with hover effects.
- **Add Task Modal:** Allows users to specify task title, description, and deadline.
- **Dynamic Updates:** Tasks are dynamically rendered in the chosen column.

### Backend
- **REST API:** Built with Spring Boot to handle task-related operations.
- **Database Integration:** Uses Hibernate and JPA for seamless database communication.
- **Task Management:** CRUD operations for tasks with real-time updates.
- **Service Layer Architecture:** Clean separation of concerns with Controller, Service, and Repository layers.

---

## Project Structure

### Backend Directory Structure (IntelliJ)
```
- src
  - main
    - java
      - com.example.todoapp
        - Controller
          - TaskController.java
        - model
          - Task.java
        - repository
          - TaskRepository.java
        - service
          - TaskService.java
          - TaskServiceImpl.java
        - TodoappApplication.java
    - resources
      - application.properties
      - graphql/
      - static/
      - templates/
  - test
```

### Frontend Directory Structure (React)
```
- public
  - favicon.ico
  - index.html
  - logo192.png
  - logo512.png
  - manifest.json
  - robots.txt
- src
  - components
    - Footer
      - Footer.module.css
    - Navbar
      - Navbar.jsx
      - Navbar.module.css
    - TaskBoard
      - TaskBoard.jsx
      - TaskBoard.module.css
    - TaskColumn
      - TaskColumn.jsx
    - TaskModal
      - TaskModal.jsx
  - ui
    - App.css
    - App.js
    - App.test.js
    - index.css
    - index.js
    - setupTests.js
  - icons
    - bin.jsx
    - dropdown.jsx
```

---

## Getting Started

### Prerequisites
- **Java 11+**
- **Node.js** (v14 or above)
- **npm** or **yarn**
- **IntelliJ IDEA**
- **React Developer Tools**

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd TodoApp
   ```

2. **Backend Setup:**
   - Open the project in IntelliJ IDEA.
   - Navigate to `src/main/resources/application.properties` and configure your database credentials.
   - Build and run the Spring Boot application.

3. **Frontend Setup:**
   - Navigate to the `src` folder in the terminal.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

---

## Usage

### Add Task
1. Click the "Add Task" button above the task columns.
2. Fill in the task details in the modal.
3. Select the appropriate category (Todo, In Progress, Completed).
4. Click "Add." The task will appear in the chosen column.

### Manage Tasks
- **Move Task:** Drag and drop tasks between columns.
- **Delete Task:** Click the delete icon on a task card.
- **Edit Task:** Click the task card to edit details.

---

## Technologies Used

### Frontend
- React.js
- Bootstrap 5

### Backend
- Spring Boot
- Hibernate & JPA
- MySQL (or any other RDBMS)

### Development Tools
- IntelliJ IDEA
- Visual Studio Code

---

## Screenshots

### Application Interface
![Screenshot 2024-12-29 192038](https://github.com/user-attachments/assets/38153fd6-ba3a-4130-849e-d69c1e4a6ff0)

![Screenshot 2024-12-29 174556](https://github.com/user-attachments/assets/33b05810-f2de-4acf-a336-27eabd4f5b73)

![Screenshot 2024-12-29 134830](https://github.com/user-attachments/assets/6b4c3cc4-a395-4925-9dd9-859ab80f6fef)




---

## Future Enhancements
- **Authentication:** Add user login and registration.
- **Drag-and-Drop Functionality:** Enhance task movement.
- **Notifications:** Implement deadline reminders.

---

## Contributors
- **[Your Name]** - Full-Stack Developer

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- Thanks to the React and Spring Boot communities for their comprehensive documentation and support.

