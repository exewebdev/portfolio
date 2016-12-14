/***********************************************************************************************************************
 *  RESTful API for Todo application.
 **********************************************************************************************************************/
var Todo = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    /**
     * Return all the portfolio in the MongoDB in JSON format using mongoose API.
     */
    app.get('/api/todo/', function(req, res, next) {

        Todo.find()
            .exec(function (err, docs) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: docs
                });
            });
    });

    /**
     * Save a new todo in the MongoDB using mongoose API.
     */
    app.post('/api/todo', function(req, res, next) {

        var newTodo = Todo({
            username: req.body.username,
            content: req.body.content,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        });
        newTodo.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Saved todo',
                obj: result
            })
        });
    });

    /**
     * Edit a todo in the MongoDB using mongoose API.
     */
    app.patch('/api/todo/:id', function(req, res, next) {

        Todo.findById(req.params.id, function(err, doc) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!doc) {
                return res.status(500).json( {
                    title: 'No todo found',
                    error: {todo: 'Todo not found'}
                });
            }
            doc.content = req.body.content;
            doc.save(function(err, result) {
                if (err) {
                    return res.status(500).json( {
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(201).json({
                    message: 'Updated todo',
                    obj:result
                });
            });
        });
    });

    /**
     * Deletes a todo in the MongoDB using mongoose API.
     */
    app.delete('/api/todo/:id', function(req, res, next) {

        Todo.findById(req.params.id, function(err, doc) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                })
            }
            if (!doc) {
                return res.status(500).json({
                    title: 'No todo found',
                    error: {todo: 'Todo could  not be found'}
                });
            }
            doc.remove(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Deleted todo',
                    obj: result
                });
            });
        });
    });
};