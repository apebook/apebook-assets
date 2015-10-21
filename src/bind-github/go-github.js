var $ = require('node').all;

module.exports = function() {
  var $tip = $('.J_GithubTip');
  if(!$tip.length){
    return false;
  }
  //location.href = $tip.attr('data-url');
};