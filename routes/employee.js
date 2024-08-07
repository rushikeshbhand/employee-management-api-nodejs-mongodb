const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');

router.get('/', employeeController.getAllEmployee);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
