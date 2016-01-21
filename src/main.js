/**
 * Created by zc1415926 on 2016/1/15.
 */
$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Author = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win){
    "use strict";
    var App = React.createClass({
        render: function () {

            var Child;

            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                case 'authors':
                    Child = Author;
                    break;

                default:
                    Child = Home;
            }

            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(2);
        React.render(<App route={route}/>, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();
})(window);