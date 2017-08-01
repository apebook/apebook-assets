var $ = require('node').all;
var io = require('io');
module.exports = function() {
  var $avatar = $('.J_Avatar');
  if (!$avatar.length) return false;
  $avatar.each(function(avatar) {
    var name = avatar.attr('data-name');
    io.jsonp('https://api.github.com/users/'+name).then(function(result){
      var data = result[0].data;
      S.log(data);
      if(data){
        var url = data.avatar_url +'&s=100';
        avatar.attr('src',url);
      }
    })
  });
};