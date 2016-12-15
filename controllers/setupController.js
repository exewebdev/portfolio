/***********************************************************************************************************************
 *  File to seed the MongoDB database using mongoose API.
 **********************************************************************************************************************/
var Messages = require('../models/messageModel');

module.exports = function(app) {
    
   app.get('/api/setupMessages', function(req, res) {
       
       // seed database
       var starterMessages = [
           {
               name: 'Roy',
               email: 'rzuniga64@gmail.com',
               company: 'Nokia',
               content: 'Hello'
           }
       ];
       Messages.create(starterMessages, function(err, results) {
           res.send(results);
       }); 
   });
};