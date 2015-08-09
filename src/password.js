//修改密码

var Auth = require('kg/auth/2.0.9/');
var Msg = require('kg/auth/2.0.9/plugin/msgs/');
require('kg/auth/2.0.9/plugin/msgs/style.css');

var auth = new Auth('#J_Auth');
auth.plug(new Msg());
auth.render();