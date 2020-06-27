const jwt = require("jsonwebtoken");
const responseHandler = require('../helper/responseHandler');
const messages = require('../helper/messages');
const httpStatusCode = require('../helper/httpStatusCode');

module.exports = function(req, res, next) {
  try {
    const token = req.header("x-auth-token");
    if (!token) return responseHandler(res, true, messages.auth.noToken, null, httpStatusCode.unauthorized);

    //"requests@switchon"
    jwt.verify(token, process.env.JWT_KEY, async function(error, data){
      if(error) return responseHandler(res, true, messages.auth.unAuthorized, null, httpStatusCode.unauthorized)
      
      let user = await User.findOne({'_id': data._id, 'tokens.token': token});
      if (!user) return responseHandler(res, true, messages.auth.unAuthorized, null, httpStatusCode.unauthorized)

      req.user = user
      req.token = token
      console.log('user logged in ==> ', req.user._id);
      next()
    });


  } catch (ex) {
    responseHandler(res, true, messages.auth.invalidToken, null, httpStatusCode.badRequest);
  }
};