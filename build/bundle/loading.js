KISSY.add('apebook/bundle/loading',["./state"],function(S ,require, exports, module) {
 var state = require('./state');

function showLoading(p) {
    state.$book.addClass('is-loading');
    p.always(function() {
        state.$book.removeClass('is-loading');
    });

    return p;
}

module.exports = {
    show: showLoading
};

});