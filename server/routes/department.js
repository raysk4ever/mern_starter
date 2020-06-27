const router = require('express').Router();
const DepartmentController = require('../controllers/department');
const router = require('express').Router();

router.get('/', DepartmentController.getAllDepartment);
router.post('/', DepartmentController.addNewDepartment);

module.exports = router;
