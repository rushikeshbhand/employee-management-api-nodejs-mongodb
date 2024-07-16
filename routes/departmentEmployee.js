const express = require('express');
const router = express.Router();
const departmentEmployeeController = require('../controller/departmentEmployeeController');

router.get('/', departmentEmployeeController.getAllDepartmentEmployee);
router.post('/', departmentEmployeeController.createDepartmentEmployee);
router.put('/:id', departmentEmployeeController.updateDepartmentEmployee);
router.delete('/:id', departmentEmployeeController.deleteDepartmentEmployee);

module.exports = router;
