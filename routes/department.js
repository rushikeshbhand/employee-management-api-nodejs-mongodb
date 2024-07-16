const express = require('express');
const router = express.Router();
const departmentController = require('../controller/departmentController');

router.get('/', departmentController.getAllDepartment);
router.post('/', departmentController.createDepartment);
router.put('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
