const Employee = require('../models/employee');

// Controller function to get all employees
exports.getAllEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}