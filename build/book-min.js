KISSY.add("apebook/gitbook",["kg/auth/2.0.9/","kg/auth/2.0.9/plugin/msgs/","io","kg/auth/2.0.9/plugin/msgs/style.css","dash/cover"],function(e,t){var n,r,i=t("kg/auth/2.0.9/"),s=t("kg/auth/2.0.9/plugin/msgs/"),u=t("io"),a=(t("kg/auth/2.0.9/plugin/msgs/style.css"),t("dash/cover"));n=function(e){var t=i,n=s,r=u;return e=function(){var e=new t("#J_Auth");e.plug(new n),e.register("exist",function(e,t,n){var i=this;return r.getJSON("/api/book/exist",{uri:e}).then(function(e){var t=e[0];t.exist?n.reject(i):n.resolve(i)}),n.promise}),e.register("exist-name",function(e,t,n){var i=this;return r.getJSON("/api/book/exist-name",{name:e}).then(function(e){var t=e[0];t.exist?n.reject(i):n.resolve(i)}),n.promise}),e.render()}}(),r=function(e){var t=n;t();var r=a;return r(),e}()});