# Employee Management System

This is a simple Employee Management System built with Node.js, Express, and MongoDB using Mongoose for data modeling.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)

## Features

- Manage employee information.
- Assign employees to departments.
- Track employment dates and department assignments.
- CRUD operations for employees and department assignments.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/employee-management.git
    cd employee-management
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your MongoDB connection string:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/employee_management
    PORT=3000
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Usage

The API will be available at `http://localhost:3000`.

You can use Postman or any other API client to interact with the endpoints.

## API Endpoints

### Department Employees

- **Get all department employees**
    ```http
    GET /department-employees
    ```

- **Create a new department employee**
    ```http
    POST /department-employees
    Body:
    {
        "emp_no": "employeeId",
        "department_no": "departmentId",
        "from_date": "2023-01-01",
        "to_date": "2023-12-31"
    }
    ```

- **Update a department employee**
    ```http
    PUT /department-employees/:id
    Body:
    {
        "emp_no": "employeeId",
        "department_no": "departmentId",
        "from_date": "2023-01-01",
        "to_date": "2023-12-31"
    }
    ```

- **Delete a department employee**
    ```http
    DELETE /department-employees/:id
    ```

## Models

### DepartmentEmployee

- `emp_no` (ObjectId, required): Reference to the Employee.
- `department_no` (ObjectId, required): Reference to the Department.
- `from_date` (Date, required): The start date of the department assignment.
- `to_date` (Date): The end date of the department assignment.
- `created_at` (Date): Automatically managed creation date.
- `updated_at` (Date): Automatically managed update date.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
