//更新书籍
var $ = require('node').all;
var io = require('io');
var Notify = require('kg/notification/1.0.0/');
module.exports = function(){
    var notify = new Notify();
    var $btn = $('.J_UpdateBook');
    var update = false;
    //点击更新书籍按钮
    $btn.on('click',function(){
        if(update) return false;
        notify.notify({boxCls:'warning',mPartMsg: "更新中请稍等"});
        $btn.text('更新中...');
        update = true;
        io.post('/api/book/sync',{id:$('.J_BookId').val()}).then(function(result){
            var data = result[0];
            notify.notify({boxCls:'success',mPartMsg: data.msg});
            update = false;
            $btn.text('更新书籍');
        })
    })
};