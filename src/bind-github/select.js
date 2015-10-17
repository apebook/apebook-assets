var $ = require('node').all;
var io = require('io');
module.exports = function() {
  var $select = $('.J_Orgs');
  if(!$select.length) return false;

  var $repoSelect = $('.J_Repos');
  var $tip = $('.J_ReposLoadingTip');

  io.getJSON('/api/github/orgs').then(function(result){
    var data = result[0];
    if(data.success){
      var currentOrg = $select.attr('data-org');
      var user = $select.attr('data-user');
      data = data.result;
      var options = '<option value="'+user+'" '+(currentOrg === user && 'selected'||'')+'>'+user+'</option>';

      if(data.length>0){
        data.forEach(function(item){
          var selected = '';
          if(currentOrg === item.login){
            selected = 'selected';
          }
          options += '<option value="'+item.login+'" '+selected+'>'+item.login+'</option>';
        });
        $select.html(options);
      }
    }
  });

  $select.on('change',function(){
    var name = $select.val();
    getRepos(name,true);

  });

  getRepos($repoSelect.attr('data-name'),$repoSelect.attr('data-isOrg')||false);

  function getRepos(userName,isOrg){
    $repoSelect.html('');
    $tip.show();
    var currentRepo = $repoSelect.attr('data-repo');
    io.getJSON('/api/github/repos',{userName:userName,isOrg:isOrg}).then(function(result){
      var data = result[0];
      if(data.success){
        data = data.result;
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
        alert(data.msg);
      }
    })
  }

};