const jwt = require("jsonwebtoken");
const responseHandler = require('../helper/responseHandler');
const messages = require('../helper/messages');
const httpStatusCode = require('../helper/httpStatusCode');

module.exports = function(req, res, next) {
  try {
    const token = req.header("x-auth-token");
    if (!token) return responseHandler(res, true, messages.auth.noToken, null, httpStatusCode.unauthorized);

    const decoded = jwt.verify(token, config.get("requests@switchon"));
    req.user = decoded;
    next();
  } catch (ex) {
    responseHandler(res, true, messages.auth.invalidToken, null, httpStatusCode.badRequest);
  }
};