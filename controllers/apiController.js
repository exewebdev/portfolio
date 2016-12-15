/***********************************************************************************************************************
 *  RESTful API for Portfolio application.
 **********************************************************************************************************************/
var Messages = require('../models/messageModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    /**
     * Return all the messages in the MongoDB in JSON format using mongoose API.
     */
    app.get('/api/message/', function(req, res, next) {

        Messages.find()
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
     * Save a new message in the MongoDB using mongoose API.
     */
    app.post('/api/message', function(req, res, next) {

        var newMessage = new Message({
            name: req.body.name,
            email: req.body.email,
            company: req.body.company,
            content: req.body.content
        });
        newMessage.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Saved message',
                obj: result
            })
        });
    });
};