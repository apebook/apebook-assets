KISSY.add("apebook/history/view",[],function(a,n,e,t){var r=t.exports=function(a){function n(a,n){a.data,a.affix;return n.data+="\n  &#xe60c;\n",n}function e(a,n,e){var t=a.data,r=a.affix;h.line=9;var i=(l=r.event)!==e?l:t.event,f=i;return f="create"===i}function t(a,n){a.data,a.affix;return n.data+="\n  &#xe602;\n",n}function r(a,n,e){var t=a.data,r=a.affix;h.line=11;var i=(l=r.event)!==e?l:t.event,f=i;return f="action"===i}function i(a,n){a.data,a.affix;return n.data+="\n  &#xe615;\n",n}function f(a,n,e){var t=a.data,r=a.affix;h.line=13;var i=(l=r.event)!==e?l:t.event,f=i;return f="success"===i}function s(a,n){a.data,a.affix;return n.data+="\n  &#xe606;\n",n}function c(a,n,e){var t=a.data,r=a.affix;h.line=15;var i=(l=r.event)!==e?l:t.event,f=i;return f="error"===i}function o(a,n){a.data,a.affix;return n.data+="\n  &#xe608;\n",n}function d(a,d,v){var x=a.data,p=a.affix;d.data+='\n<div class="event row">\n<div class="col-md-1 event-icon-wrapper">\n<i class="iconfont">\n',h.line=7,h.line=7;var m=(l=p.event)!==v?l:x.event,w=m;w="github"===m,d=k.call(u,a,{params:[w],fn:n,elseIfs:[{test:e,fn:t},{test:r,fn:i},{test:f,fn:s},{test:c,fn:o}]},d),d.data+='\n</i>\n</div>\n  <div class="col-md-11">\n    <p class="event-time">',h.line=21;var b=(l=p.create)!==v?l:x.create;d=d.writeEscaped(b),d.data+="</p>\n    <p>",h.line=22;var y=(l=p.user)!==v?l:x.user;d=d.writeEscaped(y),d.data+=" ";var g=(l=p.content)!==v?l:x.content;return d=d.write(g),d.data+="</p>\n  </div>\n</div>\n  ",d}function v(a,n){{var e=a.data;a.affix}n.data+="\n  ",h.line=3,h.line=3;var t=e;return n=k.call(u,a,{params:[t],fn:d},n),n.data+="\n",n}{var l,u=this,x=u.root,p=u.buffer,m=u.scope,h=(u.runtime,u.name,u.pos),w=m.data,b=m.affix,y=x.nativeCommands,g=x.utils,E=(g.callFn,g.callCommand,y.range,y.foreach,y.forin,y.each),k=(y["with"],y["if"]);y.set,y.include,y.parse,y.extend,y.block,y.macro,y["debugger"]}p.data+='<section class="history-list">\n',h.line=2,h.line=2;var C=(l=b.historys)!==a?l:(l=w.historys)!==a?l:m.resolveLooseUp(["historys"]);return p=E.call(u,m,{params:[C],fn:v},p),p.data+="\n</section>",p};r.TPL_NAME=t.id||t.name});