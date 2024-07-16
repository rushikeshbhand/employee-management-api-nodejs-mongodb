const mongoose = require('mongoose')

const departmentEmployeeSchema = new mongoose.Schema({
    emp_no: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    department_no: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
    },
    from_date: Date,
    to_date: Date,
    created_at: Date,
    updated_at: Date
})

const departmentEmoployeeModel = mongoose.model('EmployeeDepartment', departmentEmployeeSchema)
module.exports = departmentEmoployeeModel