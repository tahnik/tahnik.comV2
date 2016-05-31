/**
 * Created by Tahnik Mustasin on 31/05/2016.
 */

$('.page_2').css('top', window_height);
$('.page_2_back').css('top', window_height);


changeCircleWidth();

/*
 Changing the circle height of the circles in skills page
 */
var i = 0;
function changeCircleWidth() {
    $('.circle').each(function () {
        var circle_width = $(this).width();
        $(this).height(circle_width);
    })
}
/*
 changing the circle's opacity in skills page with css transition
 */
function changeCircleOpacity() {
    $('.circle').each(function () {
        $(this).css("opacity", "1.0");
    })
}
/*
 Adding some shadows when the user hover's over circle
 */
$('.circle').hover(
    function () {
        $(this).addClass("circle_hover");
    },
    function () {
        $(this).removeClass("circle_hover");
    }
);


/*
 This piece of code draws line between circle using SVG lines and keyframe transitions
 */
function drawAllLine() {
    drawLine('.software_development', '.java');
    drawLine('.software_development', '.csharp');
    drawLine('.software_development', '.cplus');
    drawLine('.software_development', '.assembly');
    drawLine('.software_development', '.git');
    drawLine('.software_development', '.UML');
    drawLine('.java', '.android');
    drawLine('.java', '.javafx');
    drawLine('.software_development', '.cprogram');
    drawLine('.webdev', '.html5');
    drawLine('.webdev', '.javascript');
    drawLine('.webdev', '.webserver');
    drawLine('.webserver', '.nginx');
    drawLine('.webserver', '.apache');
    drawLine('.javascript', '.nodejs');
    drawLine('.javascript', '.jquery');
    drawLine('.webdev', '.php');
    drawLine('.php', '.laravel');
    drawLine('.webdev', '.bootstrap');
    drawLine('.database', '.mysql');
    drawLine('.database', '.sqlite');
    drawLine('.database', '.sql');
    drawLine('.software_development', '.database');
    drawLine('.webdev', '.database');
}
function drawLine(div1, div2){
    var div1Y= $(div1).offset().top + $(div1).height() / 2;
    var div1X = $(div1).offset().left + $(div1).width() / 2;
    var div2Y = $(div2).offset().top + $(div2).height() / 2;
    var div2X = $(div2).offset().left + $(div2).width() / 2;

    createLineElement(div1X, div1Y, div2X, div2Y);
}

function createLineElement(x1, y1, x2, y2) {
    var svg_Y;
    var svg_X;
    var width;
    var height;
    var line_X1;
    var line_Y1;
    var line_X2;
    var line_Y2;
    var line_width;

    width = Math.abs(x2 - x1);
    height = Math.abs(y2 - y1);

    /*
     This if else statements checks the relative position of both circle and determine the drawing canvas of SVG
     */
    if (Math.abs(x2 - x1) < 1) {
        line_width = 4;
        width = 5;
        if (y2 > y1) {
            svg_X = x1;
            svg_Y = y1;
            line_X1 = 0;
            line_Y1 = 0;
            line_X2 = 0;
            line_Y2 = height;
        } else {
            svg_X = x2;
            svg_Y = y2;
            line_X1 = 0;
            line_Y1 = height;
            line_X2 = 0;
            line_Y2 = 0;
        }
    } else if (y2 > y1) {
        line_width = 2;
        if (x2 > x1) {
            svg_X = x1;
            svg_Y = y1;
            line_X1 = 0;
            line_Y1 = 0;
            line_X2 = width;
            line_Y2 = height;
        } else {
            svg_X = x2;
            svg_Y = y1;
            line_X1 = width;
            line_Y1 = 0;
            line_X2 = 0;
            line_Y2 = height;
        }
    } else {
        line_width = 2;
        if (x1 > x2) {
            svg_X = x2;
            svg_Y = y2;
            line_X1 = width;
            line_Y1 = height;
            line_X2 = 0;
            line_Y2 = 0;
        } else {
            svg_X = x1;
            svg_Y = y2;
            line_X1 = 0;
            line_Y1 = height;
            line_X2 = width;
            line_Y2 = 0;
        }
    }
    var svgContainer = d3.select(".skills_first_main").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "position:absolute; top: " + svg_Y + "px; left:" + svg_X + "px;");


    var circle = svgContainer.append("line")
        .attr("x1", line_X1)
        .attr("y1", line_Y1)
        .attr("x2", line_X2)
        .attr("y2", line_Y2)
        .attr("stroke-width", line_width)
        .attr("stroke", "grey").attr("class", "path");
}