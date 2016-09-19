/**
 * Created by Tahnik Mustasin on 19/09/2016.
 */

var minify = require('html-minifier').minify;
var fs = require('fs');
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
    var style = "";

    fs.readFile('./index.html', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var bodyStart = data.indexOf("<body>");
        var bodyEnd = data.indexOf("</html>");
        var body = data.substring(bodyStart + 6, bodyEnd + 7);

        var htmlStart = 0;
        var linkStart = data.indexOf("<link");

        var head = data.substring(htmlStart, linkStart);

        var link = [];
        link[0] = $.ajax({
            url: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css',
            success: function (result) {
                if (result.isOk == false) {
                    alert(result.message);
                }
            },
            async: false
        }).responseText;

        link[1] = fs.readFileSync('./main.css', 'utf8');

        link.forEach(function (element, index) {
            style += '<style>' + element + '</style>';
        });

        var html = head + style + '</head>' + body;

        var result = minify(html, {
            removeAttributeQuotes: true,
            minifyCSS: true,
            minifyJS: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            processConditionalComments: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeTagWhitespace: true,
            sortAttributes: true,
            sortClassName: true,
            useShortDoctype: true
        });

        fs.writeFile('./index_minified.html', result);
    });
});



