const Title = require('../models/title')

// Controller function to get all title
exports.getAllTitles = async (req, res) => {
    try {
        const title = await Title.find();
        res.json(title);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a title
exports.createTitle = async (req, res) => {
    const newTitle = new Title({
        emp_no: req.body.emp_no,
        emp_title: req.body.emp_title,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
    });

    try {
        const title = await newTitle.save();
        res.status(201).json(title);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to update a title
exports.updateTitle = async (req, res) => {
    const title = await Title.findById(req.params.id);

    if (!title) return res.status(404).json({ message: 'Title not found' });

    title.title = req.body.title;
    title.from_date = req.body.from_date;
    title.to_date = req.body.to_date;

    try {
        const updatedTitle = await title.save();
        res.json(updatedTitle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller function to delete a title
exports.deleteTitle = async (req, res) => {
    const title = await Title.findByIdAndDelete(req.params.id);

    if (!title) return res.status(404).json({ message: 'Title not found' });

    res.json({ message: 'Title deleted successfully' });
};