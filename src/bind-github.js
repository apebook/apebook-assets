var io = require('io');
var $ = require('node').all;

var goGithub = require('./bind-github/go-github');

goGithub();

var $repoSelect = $('.J_Repos');
if($repoSelect.length){
  var $tip = $('.J_ReposLoadingTip');
  var currentRepo = $repoSelect.attr('data-repo');
  io.getJSON('/api/github/repos',{userName:$repoSelect.attr('data-name')}).then(function(result){
    var data = result[0];
    if(data.success){
      data = data.result.data;
      $tip.hide();
      var html = '';
      data.forEach(function(repo){
        var selected = '';
        if(currentRepo === repo.name){
          selected = 'selected';
        }
        html += '<option value="'+repo.name+'" '+selected+'>'+repo.name+'</option>';
      });
      $repoSelect.html(html);
    }else{
      $tip.text(data.msg);
    }
  })
}