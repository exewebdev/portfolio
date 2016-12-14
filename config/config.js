/**
 * This file requires config.json and gets the object with this method on it and returns the connection string to db.
 * We'll use that to connect to MongoDB use mongoose.
 */
var configValues = require('../config/config.json');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.name + ':' + configValues.pwd + '@ds133428.mlab.com:33428/my-portfolio';
    }
};