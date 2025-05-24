
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

2. **📦 Install dependencies:**
   ```bash
   npm install

3. **🗄️ Set up your MySQL database:**

   Create a database named school_management (or update the name in your .env file):

   ```sql
   CREATE DATABASE school_management;

4. **🧱 Create the schools table:**

   ```sql
   CREATE TABLE schools (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255),
     address VARCHAR(255),
     latitude FLOAT,
     longitude FLOAT
   );


---

## 🔧 Environment Variables

Create a .env file in your project root and add:

- DB_HOST=localhost
- DB_USER=root
- DB_PASSWORD=your_mysql_password
- DB_NAME=school_management
- PORT=5000


   ### Variable Descriptions

- 🏠 **DB_HOST**: Your MySQL host (usually `localhost`)
- 👤 **DB_USER**: MySQL username (default: `root`)
- 🔒 **DB_PASSWORD**: Your MySQL password
- 🗃️ **DB_NAME**: Database name (default: `school_management`)
- 🚪 **PORT**: Port your server will run on (default: `5000`)




Here’s the entire content converted to clean Markdown format with emoji icons and code blocks for readability:


---
Here's the improved and properly indented version of your Markdown documentation with emoji icons:


---

# School Management API Documentation

---

## 🔧 Environment Variables

Create a `.env` file in your project root and add:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_management
PORT=5000

📘 Variable Descriptions

🏠 DB_HOST: Your MySQL host (usually localhost)

👤 DB_USER: MySQL username (default: root)

🔒 DB_PASSWORD: Your MySQL password

🗃️ DB_NAME: Database name (default: school_management)

🚪 PORT: Port your server will run on (default: 5000)



---

🚦 API Endpoints


---

➕ Add School

Method: POST

URL: /addSchool

Description: Adds a new school to the database.


📨 Request Body

{
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.34567,
  "longitude": 98.76543
}

✅ Success Response

{
  "message": "School added successfully",
  "id": 1
}

❌ Error Response (missing fields)

{
  "message": "All fields are required."
}


---

📍 List Schools

Method: GET

URL: /listSchools?latitude=LAT&longitude=LON

Description: Returns schools sorted by distance to the given coordinates.


🧭 Query Parameters

📌 latitude — User's latitude

📌 longitude — User's longitude


🔍 Example Request

GET /listSchools?latitude=12.34567&longitude=98.76543

📦 Example Response

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

Once .env is set up, start the server using:

npm start

The server will run on the port you specified (5000 by default). Use Postman, CURL, or any API testing tool.


---

🧪 Testing with Postman

You can manually create the routes or import them into Postman:

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


---

📍 List Schools

Method: GET

URL: http://localhost:5000/listSchools?latitude=40.7128&longitude=-74.0060


The response will be a JSON array of schools sorted by distance.


---

🤝 Contributing

Want to help improve this project?

1. 🍴 Fork the repository


2. 🌿 Create a new branch


3. ✨ Make your changes


4. 📬 Submit a pull request




---

📌 Summary

TOC links use lowercase headings with hyphens instead of spaces.

Compatible with GitHub and most Markdown parsers.



---

> Let me know if you'd like me to generate a .md file you can download.



Would you like me to generate and upload this as a ready-to-use `.md` file for GitHub or documentation sites?

