const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    departmentName: String,
    departmentNumber: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: Date,
})

const departmentModle = mongoose.model('Department', departmentSchema)
module.exports = departmentModle;