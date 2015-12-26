var $ = require('jquery');
var url = require('url');
var path = require('path');

function count(){
    //github信息
    var $star = $('.J_CountStar');
    if($star.length){
        var user = $star.attr('data-user');
        var repo = $star.attr('data-repo');
        var key = user+':'+repo;
        if(sessionStorage){
            var starCount = sessionStorage.getItem(key);
            if(starCount){
                $star.find('span').html(starCount);
                $star.data('count',true);
            }
        }
        if(!$star.data('count')){
            $.ajax({
                url:'https://api.github.com/repos/'+user+'/'+repo,
                dataType:"jsonp",
                jsonp:"callback",
                success:function(result){
                    var data = result.data;
                    var stargazers_count = data.stargazers_count || 0;
                    $star.find('span').html(stargazers_count);
                    if(sessionStorage){
                        sessionStorage.setItem(key,stargazers_count);
                    }
                }
            });
        }
    }

    //书籍信息
    var $view = $('.J_CountView');
    if($view.length){
        var api = $view.attr('data-api');
        if(sessionStorage){
            var viewCount = sessionStorage.getItem(api);
            if(viewCount){
                $view.find('span').html(viewCount);
                $view.data('count',true);
            }
        }
        if(!$view.data('count')){
            $.ajax({
                url:api,
                dataType:"jsonp",
                jsonp:"callback",
                success:function(data){
                    if(data.success){
                        data = data.result;
                        $view.find('span').html(data.view);
                        if(sessionStorage){
                            sessionStorage.setItem(api,data.view);
                        }
                    }
                }
            });
        }
    }
}

var state = {};

state.update = function(dom) {
    var $book = $(dom.find('.book'));

    state.$book = $book;
    state.level = $book.data('level');
    state.basePath = $book.data('basepath');

    // If book is multilingual, language of this book
    state.innerLanguage = $book.data('innerlanguage');

    // Date of build
    state.revision = $book.data('revision');

    // Original path of the file
    state.filepath = $book.data('filepath');

    // Title of the chapter
    state.chapterTitle = $book.data('chapter-title');

    // Absolute url to the root of the book (inner book)
    state.root = url.resolve(
        location.protocol+'//'+location.host,
        path.dirname(path.resolve(location.pathname.replace(/\/$/, '/index.html'), state.basePath))
    ).replace(/\/?$/, '/');

    // Absolute root to the language (for multilingual book)
    state.bookRoot = state.innerLanguage? url.resolve(state.root, '..') : state.root;

    count();

    $('pre code').each(function(i, block) {
        hljs && hljs.highlightBlock(block);
    });
};

state.update($);

module.exports = state;
