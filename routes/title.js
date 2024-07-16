const express = require('express');
const router = express.Router();
const titleController = require('../controller/titleController');

router.get('/', titleController.getAllTitles);
router.post('/', titleController.createTitle);
router.put('/:id', titleController.updateTitle);
router.delete('/:id', titleController.deleteTitle);

module.exports = router;
