const Request = require('../models/request');
const responseHandler = require('../helper/responseHandler')
const httpStatusCode = require('../helper/httpStatusCode')
const messages = require('../helper/messages')

module.exports = {
  async sendNewRequest(req, res) {
    try{
      // create new request goes here...
    }catch(err){
      console.log('err', err.message)
      responseHandler(res, true, messages.somethingWentWrong, null, httpStatusCode.notImplemented);
    }
  }
}