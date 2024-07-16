const DepartmentManager = require('../models/department');

// Controller function to get all departments
exports.getAllDepartmentManager = async (req, res) => {
    try {
        const departmentsManager = await DepartmentManager.find();
        res.json(departmentsManager);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a new department manager
exports.createNewDepartmentsManager = async (req, res) => {
    const newDepartmentsManager = new DepartmentManager({
        
    });
    try {
        const savedDepartmentsManager = await newDepartmentsManager.save();
        res.json(savedDepartmentsManager);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controller function to update a department manager

exports.updateDepartmentsManager = async (req, res) => {
    const updatedDepartmentsManager = await DepartmentManager.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDepartmentsManager) return res.status(404).json({ message: 'Department manager not found' });
    res.json(updatedDepartmentsManager);
}

// Controller function to delete a department manager by id

exports.deleteDepartmentsManager = async (req, res) => {
    const deletedDepartmentsManager = await DepartmentManager.findByIdAndDelete(req.params.id);
    if (!deletedDepartmentsManager) return res.status(404).json({ message: 'Department manager not found' });
    res.json(deletedDepartmentsManager);
}