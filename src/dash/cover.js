//封面上传与编辑
var Node = require('node');
var $ = Node.all;
module.exports = function(){
    var $btn = $('#J_UploaderBtn');

    if(!$btn.length) return false;


    S.use('kg/uploader/3.0.5/index,kg/uploader/3.0.5/themes/singleImageUploader/index', function (S, Uploader,SingleImageUploader) {
        //上传组件插件
        var plugins = 'kg/uploader/3.0.5/plugins/auth/auth,' +
            'kg/uploader/3.0.5/plugins/urlsInput/urlsInput,' +
            'kg/uploader/3.0.5/plugins/proBars/proBars,' +
            'kg/uploader/3.0.5/plugins/filedrop/filedrop,' +
            'kg/uploader/3.0.5/plugins/preview/preview';

        S.use(plugins,function(S,Auth,UrlsInput,ProBars,Filedrop,Preview){
            var uploader = new Uploader('#J_UploaderBtn',{
                //处理上传的服务器端脚本路径
                action:"/api/book/cover",
                data:{
                    id:$('.J_BookId').val()
                }
            });
            //使用主题
            uploader.theme(new SingleImageUploader({
                queueTarget:'#J_UploaderQueue'
            }));
            //验证插件
            uploader.plug(new Auth({
                //图片最大允许大小
                maxSize:3000
            }))
                //进度条集合
                .plug(new ProBars())
                //图片预览
                .plug(new Preview())
            ;
            uploader.restore();
        });
    })

};