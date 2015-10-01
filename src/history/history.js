var io = require('io');
var view = require('./view');
var Xtpl = require('kg/xtemplate/4.3.0/runtime');
var $ = require('node').all;

module.exports = function() {
  var $wapper = $('.J_HistoryWrapper');
  if (!$wapper.length){
    return false;
  }
  var api = $wapper.attr('data-api');
  if(!api){
    return false;
  }
  var $more = $('.J_HistoryMore');

  var start = 0;
  var limit = 10;
  function append(){
    io.jsonp(api,{start:start}).then(function(result){
      var data = result[0];
      if(data.success){
        var html = new Xtpl(view).render({historys:data.result});
        $wapper.append(html);
        start += limit;
        if(data.result.length< limit){
          $more.hide();
        }
      }
    });
  }

  append();

  $more.on('click',function(ev){
    ev.halt();
    append();
  })
};