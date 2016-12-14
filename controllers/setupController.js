/***********************************************************************************************************************
 *  File to seed the MongoDB database using mongoose API.
 **********************************************************************************************************************/
var Todos = require('../models/todoModel');

module.exports = function(app) {
    
   app.get('/api/setupTodos', function(req, res) {
       
       // seed database
       var starterTodos = [
           {
               username: 'test',
               content: 'Buy milk',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               content: 'Feed dog',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               content: 'Learn Node',
               isDone: false,
               hasAttachment: false
           }
       ];
       Todos.create(starterTodos, function(err, results) {
           res.send(results);
       }); 
   });
};