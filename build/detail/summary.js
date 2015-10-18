KISSY.add('apebook/detail/summary',["node"],function(S ,require, exports, module) {
 var $ = require('node').all;
module.exports = function() {
    var a = $('.J_Summary').all('a');
    if(!a.length) return false;
    var url = $('.J_Summary').attr('data-url');
    a.each(function(item){
        var href = item.attr('href');
        href = href.replace('.md','.html');
        item.attr('href',url+'/'+href);
    })
};
});