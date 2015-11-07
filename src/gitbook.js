var io = require('io');
var $ = require('node').all;
//书籍脚本
module.exports = function(){

  //github信息
  var $star = $('.J_CountStar');
  if($star.length){
    var user = $star.attr('data-user');
    var repo = $star.attr('data-repo');
    var key = user+':'+repo;
    if(sessionStorage){
      var starCount = sessionStorage.getItem(key);
      if(starCount){
        $star.all('span').html(starCount);
        $star.data('count',true);
      }
    }
    if(!$star.data('count')){
      io.jsonp('https://api.github.com/repos/'+user+'/'+repo).then(function(result){
        var data = result[0].data;
        var stargazers_count = data.stargazers_count;
        $star.all('span').html(stargazers_count);
        if(sessionStorage){
          sessionStorage.setItem(key,stargazers_count);
        }
      })
    }
  }

  //书籍信息
  var $view = $('.J_CountView');
  if($view.length){
    var api = $view.attr('data-api');
    if(sessionStorage){
      var viewCount = sessionStorage.getItem(api);
      if(viewCount){
        $view.all('span').html(viewCount);
        $view.data('count',true);
      }
    }
    if(!$view.data('count')){
      io.jsonp(api).then(function(result){
        var data = result[0];
        if(data.success){
          data = data.result;
          $view.all('span').html(data.view);
          if(sessionStorage){
            sessionStorage.setItem(api,data.view);
          }
        }
      })
    }
  }
};