KISSY.add("apebook/detail/summary",["node"],function(a,r,t,e){var n=r("node").all;e.exports=function(){var a=n(".J_Summary").all("a");if(!a.length)return!1;var r=n(".J_Summary").attr("data-url");a.each(function(a){var t=a.attr("href");t=t.replace(".md",".html"),a.attr("href",r+"/"+t)})}});