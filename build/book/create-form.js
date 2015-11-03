KISSY.add('apebook/book/create-form',["kg/auth/2.0.9/","kg/auth/2.0.9/plugin/msgs/","kg/auth/2.0.9/plugin/msgs/style.css","io"],function(S ,require, exports, module) {
 
var Auth = require('kg/auth/2.0.9/');
var Msg = require('kg/auth/2.0.9/plugin/msgs/');
require('kg/auth/2.0.9/plugin/msgs/style.css');
var io = require('io');
module.exports = function(){
    var auth = new Auth('#J_Auth');
    auth.plug(new Msg());
    auth.register('exist', function (value,attr,defer,field) {
        var self = this;
        io.getJSON("/api/book/exist",{uri:value}).then(function(result){
            var data = result[0];
            if(data.exist){
                defer.reject(self);
            }else{
                defer.resolve(self);

            }
        });
        return defer.promise;
    });
    auth.register('exist-name', function (value,attr,defer,field) {
        var self = this;
        io.getJSON("/api/book/exist-name",{name:value}).then(function(result){
            var data = result[0];
            if(data.exist){
                defer.reject(self);
            }else{
                defer.resolve(self);

            }
        });
        return defer.promise;
    });
    auth.render();
};
});