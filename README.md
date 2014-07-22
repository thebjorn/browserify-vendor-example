browserify-vendor-example
=========================

Example of splitting vendor and app files to do test coverage.

This example uses blanket.js to report testcoverage on QUnit unit tests, and browserifies vendor
libraries separately from application code.  `external.js` below, contains `jQuery`, `lodash`, and `es5-shim`, 
while `maxby.js` contains the application code.  The exmple also shows that require is exposed.

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>unit tests</title>
        <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.14.0.css">
        <script src="//code.jquery.com/qunit/qunit-1.14.0.js"></script>
        <script src="/browserify-vendor-example/external/blanket.min.js"></script>
        <script src="/browserify-vendor-example/dist/external.js"></script>
        <script src="/browserify-vendor-example/dist/maxby.js" data-cover></script>
    </head>
    <body>
    <div id="qunit"></div>
    <div id="qunit-fixture"></div>
    
    
    <script>
        QUnit.test("simple comparisons", function (assert) {
            var maxby = require('maxby');
            var $ = require('jquery');
            var _ = require('_');
            var n = maxby([4, 3, 4], function (x) {return x%3;});
            assert.equal(n, 5);
            assert.equal($('body > div').length, 2);
            assert.equal(_.map([1,2], function (v) { return v * v; }), ''+[1, 4]);
        });
    </script>
    
    </body>
    </html>
