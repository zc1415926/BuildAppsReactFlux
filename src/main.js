/**
 * Created by zc1415926 on 2016/1/15.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});