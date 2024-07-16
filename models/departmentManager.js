const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    department_no: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
    },
    emp_no:Number,
    from_date: Date,
    to_date: Date,

})

const employeeModel = mongoose.model('Employee', employeeSchema);
module.exports = employeeModel;
