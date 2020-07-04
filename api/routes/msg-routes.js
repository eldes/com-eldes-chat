'use strict';
module.exports = function(app) {
var messages = require('../controllers/msg-controller');
// messages Routes
app.route('/')
   .get(function(req, res) {
      res.json('version 1.0.0-alpha.2');
   });
app.route('/messages')
   .get(messages.list_all_messages)
   .post(messages.create_a_message);
app.route('/messages/:msgId')
   .get(messages.read_a_message)
   .put(messages.update_a_message)
   .delete(messages.delete_a_message);
};