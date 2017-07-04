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
        notify.notify({boxCls:'warning',mPartMsg: "更新中请稍等五分钟"});
        $btn.text('更新图书中...');
        update = true;
        io.post('/api/book/sync',{id:$('.J_BookId').val()}).then(function(result){
            var data = result[0];
            if(!data.success){
                notify.notify({boxCls:'warn',mPartMsg: data.msg});
            }else{
                notify.notify({boxCls:'success',mPartMsg: data.msg||'更新成功'});
            }
            update = false;
            $btn.text('更新图书');
        })
    });

    //公开书籍
    var $publishBtn = $('.J_OpenBook');
    $publishBtn.on('click',function(){
        var status = $publishBtn.attr('data-status');
        io.post('/api/book/post',{id:$('.J_BookId').val(),openStatus:status}).then(function(result){
            var data = result[0];
            if(!data.success){
                notify.notify({boxCls:'warn',mPartMsg: data.msg});
                return false;
            }else{
                notify.notify({boxCls:'success',mPartMsg: '状态设置成功'});
            }
            $publishBtn.text(status === 'open' && '隐藏图书' || '公开图书');
            $('.J_OpenStatus').text(status === 'open' && '隐藏图书' || '公开图书');
            $publishBtn.attr(status === 'open' && 'hide' || 'open');
        })
    })
};