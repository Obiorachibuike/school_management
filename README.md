School Management API
This is a simple Express.js-based API for managing schools using MySQL as the database. The API allows you to add new schools and retrieve a list of schools sorted by proximity to a given location.

Table of Contents
Features
Prerequisites
Installation
Environment Variables
API Endpoints
Add School API
List Schools API
Running the Server
Contributing
Features
Add a new school to the database with name, address, latitude, and longitude.
Retrieve a list of schools sorted by proximity to a given user's location.
Prerequisites
Node.js - JavaScript runtime.
MySQL - Relational database management system.
Postman (optional) - API testing tool.
Installation
Clone this repository:

git clone <repository_url>
cd <project_directory>
Install dependencies:

npm install
Set up a MySQL database named school_management (or modify the .env file if you want a different database name).

Create the required schools table in your MySQL database using the following query:

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);
Environment Variables
Make sure to create a .env file in the root of the project with the following variables:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_management
PORT=5000
DB_HOST: The host of the MySQL database (usually localhost for local development).
DB_USER: The MySQL username (default is root in XAMPP).
DB_PASSWORD: The password for the MySQL user.
DB_NAME: The name of your MySQL database (e.g., school_management).
PORT: The port the Express server will listen on (default is 5000).
API Endpoints
Add School API
Endpoint: POST /addSchool

Description: Adds a new school to the database.

Request Body:

{
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.34567,
  "longitude": 98.76543
}
Response:

Success:

{
  "message": "School added successfully",
  "id": 1
}
Error (if required fields are missing):

{
  "message": "All fields are required."
}
List Schools API
Endpoint: GET /listSchools

Description: Retrieves a list of schools sorted by proximity to the user's location.

Query Parameters:

latitude: The user's latitude.
longitude: The user's longitude.
Example Request:

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
The list of schools is sorted by the distance from the provided latitude and longitude.

Running the Server
After setting up the environment variables, start the server by running:

npm start
The server will start and listen on the port defined in the .env file (default is 5000).

You can now use tools like Postman or CURL to test the API endpoints.

Contributing
If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request.