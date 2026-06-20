# TabRecall: The Mindful Tab Manager

Have you ever looked at your browser and seen 20+ tabs open, only to realize you’ve forgotten *why* you opened half of them? 

**TabRecall** is a simple, beautiful, self-hosted web app that solves tab overload by forcing you to document *why* you are keeping a tab open, and reminding you to review it later.
---

## Features

- **"Remember Why" Prompts**: Every saved tab requires a short note explaining *why* it was saved and *when* you want to be reminded.
- **One-Click Bookmarklet**: A draggable browser button that allows you to save any tab instantly without leaving your current page.
- **Sleek Glassmorphism Dashboard**: A modern, interactive web portal to view, search, snooze, and archive your saved tabs.
- **Active Reminder Daemon**: A lightweight background service written in Python that pops up system notifications when a tab is ready to be processed.

---

## Tech Stack

- **Backend**: Python 3.11, FastAPI (Asynchronous Web Framework), Uvicorn (ASGI Web Server)
- **Database**: SQLite (built-in relational database), SQLAlchemy (SQL Toolkit & ORM)
- **Frontend**: HTML5, Vanilla CSS3 (Custom Glassmorphic styles), JavaScript (Fetch API, asynchronous UI rendering)
- **Notification Engine**: `plyer` (Python desktop notifications wrapper)

---

## Quick Start (Local Setup)

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
