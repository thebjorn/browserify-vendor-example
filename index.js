
var $ = require('jquery');
$(function () {
    console.log('LENGTH:', $('#qunit').length);
});

module.exports = function (xs, f) {
    return xs.reduce(function (max, x) {
        return f(x) > f(max) ? x : max;
    }) + $('#qunit').length;
};
