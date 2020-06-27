const User = require('../models/user');
const responseHandler = require('../helper/responseHandler')
const httpStatusCode = require('../helper/httpStatusCode')
const messages = require('../helper/messages')

module.exports = {
  async getAllUsers(req, res){
    try{
      let findOptions = {}
      let allUsers = await User.find(findOptions);
      responseHandler(res, false, messages.user.foundSuccess, allUsers)
    }catch(err){
      console.log('err', err.message)
      responseHandler(res, true, messages.somethingWentWrong, null, httpStatusCode.notImplemented);
    }
  }
}