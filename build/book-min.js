KISSY.add("apebook/gitbook",["node","kg/auth/2.0.9/","kg/auth/2.0.9/plugin/msgs/","io","kg/auth/2.0.9/plugin/msgs/style.css"],function(e,n){{var r,u,t,i=n("node"),o=n("kg/auth/2.0.9/"),a=n("kg/auth/2.0.9/plugin/msgs/"),s=n("io");n("kg/auth/2.0.9/plugin/msgs/style.css")}r=function(n){return n=function(){var n=i,r=n.all,u=r("#J_UploaderBtn");return u.length?void e.use("kg/uploader/3.0.5/index,kg/uploader/3.0.5/themes/singleImageUploader/index",function(e,n,u){var t="kg/uploader/3.0.5/plugins/auth/auth,kg/uploader/3.0.5/plugins/urlsInput/urlsInput,kg/uploader/3.0.5/plugins/proBars/proBars,kg/uploader/3.0.5/plugins/filedrop/filedrop,kg/uploader/3.0.5/plugins/preview/preview";e.use(t,function(e,t,i,o,a,s){var g=new n("#J_UploaderBtn",{action:"/api/book/cover",data:{id:r(".J_BookId").val()}});g.theme(new u({queueTarget:"#J_UploaderQueue"})),g.plug(new t({maxSize:3e3})).plug(new o).plug(new s),g.restore()})}):!1}}(),u=function(e){var n=o,u=a,t=s,i=r;return e=function(){var e=new n("#J_Auth");e.plug(new u),e.register("exist",function(e,n,r){var u=this;return t.getJSON("/api/book/exist",{uri:e}).then(function(e){var n=e[0];n.exist?r.reject(u):r.resolve(u)}),r.promise}),e.register("exist-name",function(e,n,r){var u=this;return t.getJSON("/api/book/exist-name",{name:e}).then(function(e){var n=e[0];n.exist?r.reject(u):r.resolve(u)}),r.promise}),e.render(),i()}}(),t=function(e){var n=u;return n(),e}()});