
---


# 🏫 School Management API

A simple Express.js API to manage schools using MySQL. Add new schools and get a list sorted by how close they are to a location.

## 📋 Table of Contents

- [✨ Features](#features)  
- [🛠️ Prerequisites](#prerequisites)  
- [📦 Installation](#installation)  
- [🔧 Environment Variables](#environment-variables)  
- [🚦 API Endpoints](#api-endpoints)  
  - [➕ Add School](#add-school)  
  - [📍 List Schools](#list-schools)  
- [▶️ Running the Server](#running-the-server)  
- [🧪 Testing with Postman](#testing-with-postman)  
- [🤝 Contributing](#contributing)  

---

## ✨ Features

- ➕ Add schools with name, address, latitude, and longitude.  
- 📍 Get a list of schools sorted by distance from a location you provide.

---

## 🛠️ Prerequisites

- 🟢 [Node.js](https://nodejs.org/en/) installed  
- 🐬 [MySQL](https://www.mysql.com/) installed and running  
- 🧰 (Optional) [Postman](https://www.postman.com/) for API testing  

---

Got it! Here’s the raw Markdown content for your README section:

## 📦 Installation

1. **📥 Clone this repo:**

   ```bash
   git clone <repository_url>
   cd <project_folder>

2. 📦 Install dependencies:

npm install


3. 🗄️ Set up your MySQL database:

Create a database named school_management (or update the name in your .env file):

CREATE DATABASE school_management;


4. 🧱 Create the schools table:

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);



---
🔧 Environment Variables

Create a .env file in your project root and add:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_management
PORT=5000

🏠 DB_HOST: Your MySQL host (usually localhost)

👤 DB_USER: MySQL username (default: root)

🔒 DB_PASSWORD: Your MySQL password

🗃️ DB_NAME: Database name (school_management by default)

🚪 PORT: Port your server will run on (default: 5000)



---

🚦 API Endpoints

➕ Add School

Method: POST

URL: /addSchool

Description: Adds a new school to the database.


Request Body:

{
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.34567,
  "longitude": 98.76543
}

✅ Success Response:

{
  "message": "School added successfully",
  "id": 1
}

❌ Error Response (missing fields):

{
  "message": "All fields are required."
}


---

📍 List Schools

Method: GET

URL: /listSchools?latitude=LAT&longitude=LON

Description: Returns schools sorted by distance to the given coordinates.


Query Parameters:

📌 latitude — User's latitude

📌 longitude — User's longitude


Example:

GET /listSchools?latitude=12.34567&longitude=98.76543

Response:

[
  {
    "id": 1,
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.34567,
    "longitude": 98.76543,
    "distance": 0.0
  }
]


---

▶️ Running the Server

Once .env is set up:

npm start

The server will start on the port you specified (5000 by default). Use Postman, CURL, or any API tool to test the endpoints.


---

🧪 Testing with Postman

You can manually create these routes or import them:

➕ Add School

Method: POST

URL: http://localhost:5000/addSchool

Body (raw JSON):


{
  "name": "Central High School",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.0060
}

📍 List Schools

Method: GET

URL: http://localhost:5000/listSchools?latitude=40.7128&longitude=-74.0060


Response will be a JSON array of schools sorted by distance.


---

🤝 Contributing

Want to help improve this project?

1. 🍴 Fork the repo


2. 🌿 Create a new branch


3. ✨ Make your changes


4. 📬 Submit a pull request




---

---

### Summary:
- The ToC links now use IDs without emojis or special characters, only the heading text lowercased and spaces replaced by hyphens.
- This matches how GitHub and most Markdown parsers generate anchor links.
- Try copying this raw and open it on GitHub or a Markdown viewer — clicking the ToC links will jump you to the sections.

---

If you want, I can also package this into a `.md` file and share it here! Just say the word.

