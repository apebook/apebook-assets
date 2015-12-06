/**
 * 登录
 */
var $ = require('node').all;
var Modal = require('kg/modal/1.5.2/index');
module.exports = function() {
  var $login = $('.J_Login');
  if(!$login.length){
    return false;
  }

  var modal = new Modal({
    title: "订单确认",
    content: '你的订单号是123456',
    confirmBtn: "确认"
  });

  modal.on('confirm.modal', function(event){
    var $modal = event.modal;

  }).on('cancel.modal', function(event){

  });

  $login.on('click',function(ev){
    ev.halt();
    modal.show();
  });


};