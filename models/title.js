const mongoose = require('mongoose')

const titleSchema = new mongoose.Schema({
    emp_no: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    emp_title: String,
    from_date: Date,
    to_date: Date,
    created_at: { type: Date, default: Date.now },
    updated_at: Date,
})

const titlemodel = mongoose.model('Title', titleSchema)
module.exports = titlemodel