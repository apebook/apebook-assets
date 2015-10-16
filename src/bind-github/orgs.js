var $ = require('node').all;
var io = require('io');
module.exports = function() {
  var $select = $('.J_Orgs');
  if(!$select.length) return false;
  io.getJSON('/api/github/orgs').then(function(result){

  });
};