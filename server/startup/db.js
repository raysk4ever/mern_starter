const mongoose = require('mongoose');

module.exports = () => {
  const url = 'mongodb://localhost:27017/switchon';
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  
  mongoose.connect(url, options)
  .then(()=> console.log('Connected to MongoDB'))
  .catch(err=> console.log(`Mongo Error: ${err.message}`))

}