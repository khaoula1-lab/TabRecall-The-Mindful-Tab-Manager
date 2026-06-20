# 🧠 TabRecall: The Mindful Tab Manager

Have you ever looked at your browser and seen 20+ tabs open, only to realize you’ve forgotten *why* you opened half of them? 

**TabRecall** is a simple, beautiful, self-hosted web app that solves tab overload by forcing you to document *why* you are keeping a tab open, and reminding you to review it later.

This project was built step-by-step as a hands-on journey to learn **Python, APIs, databases, and frontend integration**.

---

## ✨ Features

- **"Remember Why" Prompts**: Every saved tab requires a short note explaining *why* it was saved and *when* you want to be reminded.
- **One-Click Bookmarklet**: A draggable browser button that allows you to save any tab instantly without leaving your current page.
- **Sleek Glassmorphism Dashboard**: A modern, interactive web portal to view, search, snooze, and archive your saved tabs.
- **Active Reminder Daemon**: A lightweight background service written in Python that pops up system notifications when a tab is ready to be processed.

---

## 🛠️ Tech Stack

- **Backend**: Python 3.10+, FastAPI (Asynchronous Web Framework), Uvicorn (ASGI Web Server)
- **Database**: SQLite (built-in relational database), SQLAlchemy (SQL Toolkit & ORM)
- **Frontend**: HTML5, Vanilla CSS3 (Custom Glassmorphic styles), JavaScript (Fetch API, asynchronous UI rendering)
- **Notification Engine**: `plyer` (Python desktop notifications wrapper)

---

## 🚀 Quick Start (Local Setup)

Follow these steps to run the project locally on your machine:

### 1. Clone & Navigate
```bash
git clone https://github.com/your-username/tab-recall.git
cd tab-recall
```

### 2. Set Up a Python Virtual Environment
Keep your Python dependencies clean and isolated.
```powershell
# Create the virtual environment
python -m venv venv

# Activate it (Windows PowerShell)
.\venv\Scripts\Activate.ps1

# Activate it (Mac/Linux Bash)
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Application
Start the FastAPI development server with auto-reload enabled:
```bash
python -m uvicorn app.main:app --reload
```
Once started, open your browser and navigate to:
- **Dashboard**: `http://localhost:8000`
- **Interactive API Documentation**: `http://localhost:8000/docs`

---

## 🧠 Python Learning Concepts Covered

Through building this project, we explored:
1. **Virtual Environments (`venv`) & Package Management (`pip`)**: Managing project-specific libraries.
2. **Object-Oriented Programming (OOP) & Data Validation**: Using Pydantic models for structured requests.
3. **Relational Databases (SQL)**: Creating database schemas, querying, and updating records using SQLAlchemy and SQLite.
4. **Asynchronous Programming (`async`/`await`)**: Running high-performance API endpoints in FastAPI.
5. **Background Threading**: Running a separate timer service concurrently with the web server to monitor and trigger reminders.
6. **API Design**: Building RESTful endpoints (`GET`, `POST`, `PUT`, `DELETE`) and working with JSON payloads.
7. **Frontend Integration**: Understanding Cross-Origin Resource Sharing (CORS) and making asynchronous fetch calls from JavaScript.
