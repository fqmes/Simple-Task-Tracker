# 📝 Simple Task Tracker

This is a lightweight task management web application built using **Node.js** and **Express.js**. It allows users to add, view, complete, and delete tasks. Instead of using a database, it stores data in a local `tasks.json` file for simplicity.

> 📁 Suitable for small projects or assignments requiring simple REST API and backend logic without frameworks like PHP or Python.

---

## 🚀 Features

- ✅ Add new tasks with title and description
- 📄 View all existing tasks
- 🔄 Toggle completion status
- 🗑️ Delete tasks
- 📦 JSON-based storage (no database)
- 🌐 RESTful endpoints using Express

---

## 🏗️ Tech Stack

- **Backend**: Node.js + Express
- **Storage**: JSON file (`tasks.json`)
- **Frontend**: Simple HTML + Fetch API
- **No database**, no frontend frameworks

---

## 📂 Project Structure

```txt
task-tracker/
├── server.js              # Main server file
├── tasks.json             # Data storage (acts like a database)
├── views/
│   └── index.html         # Frontend interface
├── public/
│   └── style.css          # Optional styling
├── README.md
```

---

## 📡 REST API Endpoints

| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| GET    | `/tasks`           | Returns list of all tasks     |
| POST   | `/tasks`           | Adds a new task (form data)   |
| GET    | `/delete/:id`      | Deletes a task by ID          |
| GET    | `/toggle/:id`      | Toggles task completion       |

> 📎 All data is stored and retrieved from `tasks.json`.

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/task-tracker.git
   cd task-tracker
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Server**

   ```bash
   node server.js
   ```

4. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## ✏️ Usage

- Fill in the title and description in the form to add a task.
- Existing tasks are listed below with links to:
  - ✅ Mark them as complete/incomplete
  - 🗑️ Delete them

Tasks are saved immediately in `tasks.json`.

---

## 📁 Sample `tasks.json` Content

```json
[
  {
    "id": 1721228728223,
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "completed": false
  },
  {
    "id": 1721228735341,
    "title": "Finish assignment",
    "description": "SCSJ4383 Assignment 2",
    "completed": true
  }
]
```

---

## 📽️ Demo Video Requirements

According to the assignment:

- Must be under 2 minutes
- .mp4 format
- Explain:
  - Framework setup (Node.js + Express)
  - REST endpoints (`GET /tasks`, `POST /tasks`)
  - Task operations (Add, View, Toggle, Delete)

---

## 📜 License

This project is open-source and free to use for learning purposes.

---

## 👤 Author

**Ahmed Saman**  
Qaiwan International University  
SCSJ4383 – Software Construction  
Semester II, 2024/2025
