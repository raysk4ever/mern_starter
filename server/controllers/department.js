const Department = require('../models/department');
const responseHandler = require('../helper/responseHandler');
const messages = require('../helper/messages');
const httpStatusCode = require('../helper/httpStatusCode');

module.exports = {
  async getAllDepartment(req, res) {
    try{
      let findOptions = {}
      let allDepartments = await Department.find(findOptions);
      responseHandler(res, false, messages.department.foundSuccess, allDepartments)
    }catch(err){
      console.log('err', err.message)
      responseHandler(res, true, messages.somethingWentWrong, null, httpStatusCode.notImplemented);
    }
  },
  async addNewDepartment(req, res) { 
    try {
      let {name} = req.body;
      let department = await Department.findOne({name});
      if(department) return responseHandler(res, true, messages.department.alreadyExitis, null, httpStatusCode.badRequest);

      department = new Department({name});
      department.save();
      responseHandler(res, false, messages.department.save, department);

    }catch(err) {
      console.log('err', err.message)
      responseHandler(res, true, messages.somethingWentWrong, null, httpStatusCode.notImplemented);
    }
  }
}