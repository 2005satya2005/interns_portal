# Intern Portal

A simple web-based portal that displays intern information. The app starts with dummy data (alex, sara, john) and allows you to upload more intern details using a `.json` file converted from Excel.

✅ Prerequisites

- Python installed (version 3.7+ recommended)
- Flask and pandas installed
  - If not installed, use:  
    ```bash
    pip install flask pandas
    ```

📁 File/Folder Layout:
----------------------------------------------------
interns_portal/
│
├── devsatya.txt
├── README.md
│
├── backend/
│   ├── app.py
│   └── interns.json
│
└── frontend/
    ├── static/
    │   ├── script.js
    │   └── styles.css
    │
    └── templates/
        ├── index.html
        └── dashboard.html


🛠️ Step-by-Step Setup

### 🔹 Step 1: Download

1. Download the folder `intern_portal`.

2. Follow the step 2

### 🔹 Step 2: Run the Backend Server

1. Go to the `backend` folder:

   - Using command line:
     ```bash
     cd path_to/intern_portal/backend
     ```

   - Or right-click the `backend` folder and choose **"Open in Terminal"** or **"Open PowerShell window here"**.

2. Run the Flask server:

   ```bash
   python app.py

3. You will see output like:
Running on http://127.0.0.1:5000/

### 🔹 Step 3: Open the application 

1. Open your web browser.

2. Go to:
http://127.0.0.1:5000

3. The Intern portal appears
4. Enter the user name (Dummy username: alex,sara,john)
5. Click Login it will redirect to dashboard page, where the details of the intern appers.

