KISSY.add("apebook/gitbook",["io","node"],function(t,a,e,o){var s,n=a("io"),r=a("node");s=function(t){var a=n,e=r.all;return t=function(){var t=e(".J_CountStar");if(t.length){var o=t.attr("data-user"),s=t.attr("data-repo"),n=o+":"+s;if(sessionStorage){var r=sessionStorage.getItem(n);r&&(t.all("span").html(r),t.data("count",!0))}t.data("count")||a.jsonp("https://api.github.com/repos/"+o+"/"+s).then(function(a){var e=a[0].data,o=e.stargazers_count;t.all("span").html(o),sessionStorage&&sessionStorage.setItem(n,o)})}var i=e(".J_CountView");if(i.length){var l=i.attr("data-api");if(sessionStorage){var u=sessionStorage.getItem(l);u&&(i.all("span").html(u),i.data("count",!0))}i.data("count")||a.jsonp(l).then(function(t){var a=t[0];a.success&&(a=a.result,i.all("span").html(a.view),sessionStorage&&sessionStorage.setItem(l,a.view))})}}}(),o.exports=s});