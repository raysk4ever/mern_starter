const httpStatusCode = require('./httpStatusCode');

module.exports = (res, error, message, data = null, status = httpStatusCode.ok) => {
	if(error) return res.status(status).json({
    status: !error,
    message,
    status: false,
    data,
  });
    
  return res.status(status).json({
    status: !error,
    message,
    data,
  });
};
	