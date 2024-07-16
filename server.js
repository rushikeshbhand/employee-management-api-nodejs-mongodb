const express = require("express")
const app = express()
require('dotenv').config(); // Load dotenv configuration
require('./config/dbConnection')

const employeeRoutes = require('./routes/employee')
const departmentRoutes = require('./routes/department')
const salaryRoutes = require('./routes/salary')
const titleRoutes = require('./routes/title')
const departmentManagerRoutes = require('./routes/departmentManager')
const departmentEmployeeRoutes = require('./routes/departmentEmployee')

// Is parse form data 
// app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('server page')
})

// Use route files for employee
app.use('/employee', employeeRoutes);

// Use route files for department
app.use('/department', departmentRoutes);

// Use route files for salary
app.use('/salary', salaryRoutes);

// Use route files for titles
app.use('/title', titleRoutes);

// Use route files for department Manager
app.use('/departmentManager', departmentManagerRoutes);

// Use route files for department Employee 
app.use('/departmentEmployee', departmentEmployeeRoutes);

app.listen(process.env.PORT, ()=>{console.log("app is live on "+ process.env.PORT);})