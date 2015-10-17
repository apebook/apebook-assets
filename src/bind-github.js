var io = require('io');
var $ = require('node').all;

var goGithub = require('./bind-github/go-github');

goGithub();

var select = require('./bind-github/select');
select();
