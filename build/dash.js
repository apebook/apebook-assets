KISSY.add('apebook/dash',["./dash/cover","./dash/update-book"],function(S ,require, exports, module) {
 var cover  = require('./dash/cover');
cover();

var updateBook = require('./dash/update-book');
updateBook();
});