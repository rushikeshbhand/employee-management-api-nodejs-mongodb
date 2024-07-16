const express = require('express');
const router = express.Router();
const departmentManagerController = require('../controller/departmentManagerController');

router.get('/', departmentManagerController.getAllDepartmentManager);
router.post('/', departmentManagerController.createNewDepartmentsManager);
router.put('/:id', departmentManagerController.updateDepartmentsManager);
router.delete('/:id', departmentManagerController.deleteDepartmentsManager);

module.exports = router;
