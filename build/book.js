KISSY.add('apebook/book',["./book/create-form","./dash/cover"],function(S ,require, exports, module) {
 var form = require('./book/create-form');
form();

var cover = require('./dash/cover');
cover();

});