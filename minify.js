/**
 * Created by Tahnik Mustasin on 19/09/2016.
 */


fs = require('fs');
fs.readFile('./index.html', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var bodyStart = data.indexOf("<body>");
    var bodyEnd = data.indexOf("<script");
    var body = data.substring(bodyStart + 6, bodyEnd);

    var htmlStart = 0;
    var linkStart = data.indexOf("<link");

    var head = data.substring(htmlStart, linkStart);

    var link = [];
    link[0] = fs.readFileSync('./css/bootstrap.min.css', 'utf8');

});