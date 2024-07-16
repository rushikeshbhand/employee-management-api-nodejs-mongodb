const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
   emp_no: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
   },
   salary: Number,
   from_date: Date,
   to_date: Date,
   created_at: { type: Date, default: Date.now },
   updated_at: Date,
})

const salaryModel = mongoose.model('Salary', salarySchema);
module.exports = salaryModel;
