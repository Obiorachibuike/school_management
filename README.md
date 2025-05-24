Here is the full updated README with dashed separators for each section and a clickable table of contents:

```markdown
# 🏫 School Management API

This is a simple Express.js-based API for managing schools using MySQL as the database. The API allows you to add new schools and retrieve a list of schools sorted by proximity to a given location.

---

## 📋 Table of Contents
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
    - [Add School API](#-add-school-api)
    - [List Schools API](#-list-schools-api)
- [Running the Server](#▶️-running-the-server)
- [Postman Routes](#🧰-postman-routes)
- [Contributing](#📝-contributing)
- [License](#📄-license)
- [Contact](#📞-contact)
- [Additional Resources](#🔗-additional-resources)

---

## 🚀 Features
- ➕ Add a new school to the database with:
  - Name
  - Address
  - Latitude
  - Longitude

- 📍 Retrieve a list of schools sorted by proximity to a given user's location.

---

## 🛠️ Prerequisites
- 🔹 [Node.js](https://nodejs.org/) - JavaScript runtime.
- 🔹 [MySQL](https://www.mysql.com/) - Relational database management system.
- 🔹 [Postman](https://www.postman.com/) (optional) - API testing tool.

---

## 📦 Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up a MySQL database named `school_management` (or modify the `.env` file for a different database name).

4. Create the required `schools` table in your MySQL database using the following query:
   ```sql
   CREATE TABLE schools (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255),
     address VARCHAR(255),
     latitude FLOAT,
     longitude FLOAT
   );
   ```

---

## 🔧 Environment Variables
Create a `.env` file in the root of the project with the following variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_management
PORT=5000
```

- **DB_HOST**: The host of the MySQL database (usually localhost for local development).
- **DB_USER**: The MySQL username (default is root in XAMPP).
- **DB_PASSWORD**: The password for the MySQL user.
- **DB_NAME**: The name of your MySQL database (e.g., `school_management`).
- **PORT**: The port the Express server will listen on (default is 5000).

---

## 🔗 API Endpoints

### ➕ Add School API
- **Endpoint**: `POST /addSchool`
- **Description**: Adds a new school to the database.
- **Request Body**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.34567,
    "longitude": 98.76543
  }
  ```

- **Response**:
  - ✅ **Success**:
    ```json
    {
      "message": "School added successfully",
      "id": 1
    }
    ```

  - ❌ **Error** (if required fields are missing):
    ```json
    {
      "message": "All fields are required."
    }
    ```

---

### 📍 List Schools API
- **Endpoint**: `GET /listSchools`
- **Description**: Retrieves a list of schools sorted by proximity to the user's location.
- **Query Parameters**:
  - `latitude`: The user's latitude.
  - `longitude`: The user's longitude.

- **Example Request**: 
  ```
  GET /listSchools?latitude=12.34567&longitude=98.76543
  ```

- **Response**:
  ```json
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
  ```

The list of schools is sorted by the distance from the provided latitude and longitude.

---

## ▶️ Running the Server
1. After setting up the environment variables, start the server by running:
   ```bash
   npm start
   ```

2. The server will start and listen on the port defined in the `.env` file (default is 5000).

3. You can now use tools like Postman or CURL to test the API endpoints.

---

## 🧰 Postman Routes
You can import these routes into Postman or create them manually.

### ➕ Add School
- **Method**: `POST`
- **URL**: `http://localhost:5000/addSchool`
- **Body**: (raw JSON)
  ```json
  {
    "name": "Central High School",
    "address": "123 Main St",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
  ```

- **Expected Response**:
  ```json
  {
    "message": "School added successfully",
    "id": 1
  }
  ```

---

### 📍 List Schools
- **Method**: `GET`
- **URL**: `http://localhost:5000/listSchools?latitude=40.7128&longitude=-74.0060`

- **Expected Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Central High School",
      "address": "123 Main St",
      "latitude": 40.7128,
      "longitude": -74.0060,
      "distance": 0.0
    },
    {
      "id": 2,
      "name": "Westside Academy",
      "address": "456 West St",
      "latitude": 40.7130,
      "longitude": -74.0070,
      "distance": 0.2
    }
  ]
  ```

The response will include a list of schools sorted by their distance from the provided latitude and longitude. Each school entry will contain its ID, name, address, latitude, longitude, and the calculated distance from the user's location.

---

## 📝 Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure that your code adheres to the project's coding standards and includes appropriate tests.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact
For any inquiries or issues, please contact the project maintainer at [your_email@example.com].

---

## 🔗 Additional Resources
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/)

---

Thank you for using the School Management API! We hope it helps you manage your school data efficiently. Happy coding!
```

This README is structured with dashed separators for clarity, and the table of contents links to the respective sections for easy navigation.