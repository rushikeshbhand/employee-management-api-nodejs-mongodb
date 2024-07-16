const DepartmentEmployee = require('../models/department');

// Controller function to get all departments
exports.getAllDepartmentEmployee = async (req, res) => {
    try {
        const departmentsEmployee = await DepartmentEmployee.find();
        res.json(departmentsEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a department employee

exports.createDepartmentEmployee = async (req, res) => {
    const departmentEmployee = new DepartmentEmployee(
        {
            emp_no: req.body.emp_no,
            department_no: req.body.department_no,
        }
    );
    try {
        const savedDepartmentEmployee = await departmentEmployee.save();
        res.json(savedDepartmentEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to update a department employee
exports.updateDepartmentEmployee = async (req, res) => {
    const departmentEmployee = await DepartmentEmployee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!departmentEmployee) return res.status(404).json({ message: 'Department Employee not found' });
    res.json(departmentEmployee);
};

// Controller function to delete a department employee
exports.deleteDepartmentEmployee = async (req, res) => {
    const departmentEmployee = await DepartmentEmployee.findByIdAndDelete(req.params.id);
    if (!departmentEmployee) return res.status(404).json({ message: 'Department Employee not found' });
    res.json({ message: 'Department Employee deleted successfully' });
};