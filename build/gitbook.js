KISSY.add('apebook/gitbook',["io","node"],function(S ,require, exports, module) {
 var io = require('io');
var $ = require('node').all;
//书籍脚本
module.exports = function(){

  //github信息
  var $star = $('.J_CountStar');
  if($star.length){
    var user = $star.attr('data-user');
    var repo = $star.attr('data-repo');
    io.jsonp('https://api.github.com/repos/'+user+'/'+repo).then(function(result){
      var data = result[0].data;
      var stargazers_count = data.stargazers_count;
      $star.all('span').html(stargazers_count);
    })
  }

  //书籍信息
  var $view = $('.J_CountView');
  if($view.length){
    var api = $view.attr('data-api');
    io.jsonp(api).then(function(result){
      var data = result[0];
      if(data.success){
        data = data.result;
        $view.all('span').html(data.view);
      }
    })
  }
};
});