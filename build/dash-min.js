KISSY.add("apebook/dash",["node","io","kg/notification/1.0.0/"],function(o,n,e,t){var a,r,u,i=n("node"),s=n("io"),p=n("kg/notification/1.0.0/");a=function(n){return n=function(){var n=i,e=n.all,t=e("#J_UploaderBtn");return t.length?void o.use("kg/uploader/3.0.5/index,kg/uploader/3.0.5/themes/singleImageUploader/index",function(o,n,t){var a="kg/uploader/3.0.5/plugins/auth/auth,kg/uploader/3.0.5/plugins/urlsInput/urlsInput,kg/uploader/3.0.5/plugins/proBars/proBars,kg/uploader/3.0.5/plugins/filedrop/filedrop,kg/uploader/3.0.5/plugins/preview/preview";o.use(a,function(o,a,r,u,i,s){var p=new n("#J_UploaderBtn",{action:"/api/book/cover",data:{id:e(".J_BookId").val()}});p.theme(new t({queueTarget:"#J_UploaderQueue"})),p.plug(new a({maxSize:3e3})).plug(new u).plug(new s),p.restore()})}):!1}}(),r=function(o){var n=i.all,e=s,t=p;return o=function(){var o=new t,a=n(".J_UpdateBook"),r=!1;a.on("click",function(){return r?!1:(o.notify({boxCls:"warning",mPartMsg:"更新中请稍等五分钟"}),a.text("更新中..."),r=!0,void e.post("/api/book/sync",{id:n(".J_BookId").val()}).then(function(n){var e=n[0];o.notify(e.success?{boxCls:"success",mPartMsg:e.msg||"更新成功"}:{boxCls:"warn",mPartMsg:e.msg}),r=!1,a.text("更新书籍")}))});var u=n(".J_OpenBook");u.on("click",function(){var t=u.attr("data-status");e.post("/api/book/post",{id:n(".J_BookId").val(),openStatus:t}).then(function(e){var a=e[0];return a.success?(o.notify({boxCls:"success",mPartMsg:"状态设置成功"}),u.text("open"===t&&"隐藏书籍"||"公开书籍"),n(".J_OpenStatus").text("open"===t&&"隐藏书籍"||"公开书籍"),void u.attr("open"===t&&"hide"||"open")):(o.notify({boxCls:"warn",mPartMsg:a.msg}),!1)})})}}(),u=function(o){var n=a;n();var e=r;return e(),o}(),t.exports=u});