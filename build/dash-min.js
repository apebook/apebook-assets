KISSY.add("apebook/dash",["node","io","kg/notification/1.0.0/","kg/xtemplate/4.3.0/runtime"],function(n,t,a,e){var r,i,o,s,u,c=t("node"),l=t("io"),d=t("kg/notification/1.0.0/"),f=t("kg/xtemplate/4.3.0/runtime");r=function(t){var a=c,e=a.all;return t=function(){var t=e("#J_UploaderBtn");return t.length?void n.use("kg/uploader/3.0.5/index,kg/uploader/3.0.5/themes/singleImageUploader/index",function(n,t,a){var r="kg/uploader/3.0.5/plugins/auth/auth,kg/uploader/3.0.5/plugins/urlsInput/urlsInput,kg/uploader/3.0.5/plugins/proBars/proBars,kg/uploader/3.0.5/plugins/filedrop/filedrop,kg/uploader/3.0.5/plugins/preview/preview";n.use(r,function(n,r,i,o,s,u){var c=new t("#J_UploaderBtn",{action:"/api/book/cover",data:{id:e(".J_BookId").val()}});c.theme(new a({queueTarget:"#J_UploaderQueue"})),c.plug(new r({maxSize:3e3})).plug(new o).plug(new u),c.restore()})}):!1}}(),i=function(n){var t=c.all,a=l,e=d;return n=function(){var n=new e,r=t(".J_UpdateBook"),i=!1;r.on("click",function(){return i?!1:(n.notify({boxCls:"warning",mPartMsg:"更新中请稍等五分钟"}),r.text("更新图书中..."),i=!0,void a.post("/api/book/sync",{id:t(".J_BookId").val()}).then(function(t){var a=t[0];n.notify(a.success?{boxCls:"success",mPartMsg:a.msg||"更新成功"}:{boxCls:"warn",mPartMsg:a.msg}),i=!1,r.text("更新图书")}))});var o=t(".J_OpenBook");o.on("click",function(){var e=o.attr("data-status");a.post("/api/book/post",{id:t(".J_BookId").val(),openStatus:e}).then(function(a){var r=a[0];return r.success?(n.notify({boxCls:"success",mPartMsg:"状态设置成功"}),o.text("open"===e&&"隐藏图书"||"公开图书"),t(".J_OpenStatus").text("open"===e&&"隐藏图书"||"公开图书"),void o.attr("open"===e&&"hide"||"open")):(n.notify({boxCls:"warn",mPartMsg:r.msg}),!1)})})}}(),o=function(n){var t=n=function(n){function t(n,t){n.data,n.affix;return t.data+="\n  &#xe60c;\n",t}function a(n,t,a){var e=n.data,r=n.affix;m.line=9;var i=(f=r.event)!==a?f:e.event,o=i;return o="create"===i}function e(n,t){n.data,n.affix;return t.data+="\n  &#xe602;\n",t}function r(n,t,a){var e=n.data,r=n.affix;m.line=11;var i=(f=r.event)!==a?f:e.event,o=i;return o="action"===i}function i(n,t){n.data,n.affix;return t.data+="\n  &#xe615;\n",t}function o(n,t,a){var e=n.data,r=n.affix;m.line=13;var i=(f=r.event)!==a?f:e.event,o=i;return o="success"===i}function s(n,t){n.data,n.affix;return t.data+="\n  &#xe606;\n",t}function u(n,t,a){var e=n.data,r=n.affix;m.line=15;var i=(f=r.event)!==a?f:e.event,o=i;return o="error"===i}function c(n,t){n.data,n.affix;return t.data+="\n  &#xe608;\n",t}function l(n,l,d){var p=n.data,g=n.affix;l.data+='\n<div class="event row">\n<div class="col-md-1 event-icon-wrapper">\n<i class="iconfont">\n',m.line=7,m.line=7;var x=(f=g.event)!==d?f:p.event,k=x;k="github"===x,l=_.call(v,n,{params:[k],fn:t,elseIfs:[{test:a,fn:e},{test:r,fn:i},{test:o,fn:s},{test:u,fn:c}]},l),l.data+='\n</i>\n</div>\n  <div class="col-md-11">\n    <p class="event-time">',m.line=21;var h=(f=g.create)!==d?f:p.create;l=l.writeEscaped(h),l.data+="</p>\n    <p>",m.line=22;var w=(f=g.user)!==d?f:p.user;l=l.writeEscaped(w),l.data+=" ";var b=(f=g.content)!==d?f:p.content;return l=l.write(b),l.data+="</p>\n  </div>\n</div>\n  ",l}function d(n,t){{var a=n.data;n.affix}t.data+="\n  ",m.line=3,m.line=3;var e=a;return t=_.call(v,n,{params:[e],fn:l},t),t.data+="\n",t}{var f,v=this,p=v.root,g=v.buffer,x=v.scope,m=(v.runtime,v.name,v.pos),k=x.data,h=x.affix,w=p.nativeCommands,b=p.utils,y=(b.callFn,b.callCommand,w.range,w.foreach,w.forin,w.each),_=(w["with"],w["if"]);w.set,w.include,w.parse,w.extend,w.block,w.macro,w["debugger"]}g.data+='<section class="history-list">\n',m.line=2,m.line=2;var J=(f=h.historys)!==n?f:(f=k.historys)!==n?f:x.resolveLooseUp(["historys"]);return g=y.call(v,x,{params:[J],fn:d},g),g.data+="\n</section>",g};return t.TPL_NAME=e.id||e.name,n}(),s=function(n){var t=l,a=o,e=f,r=c.all;return n=function(){function n(){t.jsonp(o,{start:u}).then(function(n){var t=n[0];if(t.success){var r=new e(a).render({historys:t.result});i.append(r),u+=c,t.result.length<c?s.hide():s.css("display","block")}})}var i=r(".J_HistoryWrapper");if(!i.length)return!1;var o=i.attr("data-api");if(!o)return!1;var s=r(".J_HistoryMore"),u=0,c=10;n(),s.on("click",function(t){t.halt(),n()})}}(),u=function(n){var t=r;t();var a=i;a();var e=s;return e(),n}(),e.exports=u});