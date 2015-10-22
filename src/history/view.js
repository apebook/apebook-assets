KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#3.3.3*/
var ret = module.exports = function view(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func2(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n  &#xe60c;\n';
return buffer;
}
function func3(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 9;
var id4 = ((t=(affix.event)) !== undefined ? t:(data.event));
var exp5 = id4;
exp5 = (id4)===('create');
return exp5;
}
function func6(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n  &#xe602;\n';
return buffer;
}
function func7(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 11;
var id8 = ((t=(affix.event)) !== undefined ? t:(data.event));
var exp9 = id8;
exp9 = (id8)===('action');
return exp9;
}
function func10(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n  &#xe615;\n';
return buffer;
}
function func11(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 13;
var id12 = ((t=(affix.event)) !== undefined ? t:(data.event));
var exp13 = id12;
exp13 = (id12)===('success');
return exp13;
}
function func14(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n  &#xe606;\n';
return buffer;
}
function func15(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 15;
var id16 = ((t=(affix.event)) !== undefined ? t:(data.event));
var exp17 = id16;
exp17 = (id16)===('error');
return exp17;
}
function func18(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n  &#xe608;\n';
return buffer;
}
function func1(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n<div class="event row">\n<div class="col-md-1 event-icon-wrapper">\n<i class="iconfont">\n';
pos.line = 7;
pos.line = 7;
var id19 = ((t=(affix.event)) !== undefined ? t:(data.event));
var exp20 = id19;
exp20 = (id19)===('github');
buffer = ifCommand.call(tpl, scope, {params:[exp20],fn: func2,elseIfs: [{test: func3,fn : func6},{test: func7,fn : func10},{test: func11,fn : func14},{test: func15,fn : func18}]}, buffer);
buffer.data += '\n</i>\n</div>\n  <div class="col-md-11">\n    <p class="event-time">';
pos.line = 21;
var id21 = ((t=(affix.create)) !== undefined ? t:(data.create));
buffer = buffer.writeEscaped(id21);
buffer.data += '</p>\n    <p>';
pos.line = 22;
var id22 = ((t=(affix.user)) !== undefined ? t:(data.user));
buffer = buffer.writeEscaped(id22);
buffer.data += ' ';
var id23 = ((t=(affix.content)) !== undefined ? t:(data.content));
buffer = buffer.write(id23);
buffer.data += '</p>\n  </div>\n</div>\n  ';
return buffer;
}
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n  ';
pos.line = 3;
pos.line = 3;
var id24 = data;
buffer = ifCommand.call(tpl, scope, {params:[id24],fn: func1}, buffer);
buffer.data += '\n';
return buffer;
}


buffer.data += '<section class="history-list">\n';
pos.line = 2;
pos.line = 2;
var id25 = ((t=(affix.historys)) !== undefined ? t:((t = data.historys) !== undefined ? t :scope.resolveLooseUp(["historys"])));
buffer = eachCommand.call(tpl, scope, {params:[id25],fn: func0}, buffer);
buffer.data += '\n</section>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});