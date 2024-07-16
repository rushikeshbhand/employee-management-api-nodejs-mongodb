const Department = require('../models/department');

// Controller function to get all departments
exports.getAllDepartment = async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a department
exports.createDepartment = async (req, res) => {
    const department = new Department(req.body);
    try {
        const savedDepartment = await department.save();
        res.json(savedDepartment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to update a department by id
exports.updateDepartment = async (req, res) => {
    try {
        const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(updatedDepartment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to delete a department by id
exports.deleteDepartment = async (req, res) => {
    try {
        const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
        if (!deletedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json("Department deleted successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
