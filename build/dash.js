KISSY.add('apebook/dash',["./dash/cover","./dash/update-book","./history/history"],function(S ,require, exports, module) {
 var cover  = require('./dash/cover');
cover();

var updateBook = require('./dash/update-book');
updateBook();

var history = require('./history/history');
history();
});