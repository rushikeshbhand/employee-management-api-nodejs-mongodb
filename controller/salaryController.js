const Salary = require('../models/salary')

// Controller function to get all salary
exports.getAllSalaries = async (req, res) => {
    try {
        const salary = await Salary.find();
        res.json(salary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create new salary
exports.createSalary = async (req, res) => {
    const newSalary = new Salary({
        emp_no: req.body.emp_no,
        salary: req.body.salary,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
    });

    try {
        const savedSalary = await newSalary.save();
        res.json(savedSalary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to update salary
exports.updateSalary = async (req, res) => {
    try {
        const updatedSalary = await Salary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSalary) return res.status(404).json({ message: 'Salary not found' });
        res.json(updatedSalary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete salary
exports.deleteSalary = async (req, res) => {
    try {
        const deletedSalary = await Salary.findByIdAndDelete(req.params.id);
        if (!deletedSalary) return res.status(404).json({ message: 'Salary not found' });
        res.json("salaray deleted successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
