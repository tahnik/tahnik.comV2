/**
 * Created by Tahnik Mustasin on 31/05/2016.
 */
/* setting a global width and height for browser window */
var window_height = $(window).height();
var window_width = $(window).width();


//changeCircleWidth();
//drawAllLine();


$('.page_2_work_IS').css('height', '15em');
$('.IS_Sidebar').css('height', '15em');

$('.page_2_work_IC').css('height', '15em');
$('.IC_Sidebar').css('height', '15em');

$('.page_2_work_SE').css('height', '15em');
$('.SE_Sidebar').css('height', '15em');

$('.page_2_education_SSC').css('height', '20em');
$('.SSC_Sidebar').css('height', '20em');

$('.page_2_education_HSC').css('height', '10em');
$('.HSC_Sidebar').css('height', '10em');

$('.page_2_education_CSE').css('height', '15em');
$('.CSE_Sidebar').css('height', '15em');

$('.page_3').css('height', $('.sql_back').height() * 1.5);
$('.sql_back, .sql_front, .sql_stable').css('margin-top', $('.sql_back').height() * 0.2);

$('.page_6').css('height', $('.poster_back').height() * 1.7);
$('.poster_back, .poster_stable').css('padding-top', $('.poster_back').height() * 0.4);

var full_height = $('.page_1').height() + $('.page_2').height() + $('.page_3').height() + $('.page_4').height() + $('.page_5').height() + $('.page_6').height() + $('.page_7').height() + $('.page_5_1').height();
$('.background_parent').css('height', (full_height * 0.6451) + 'px');
//$('.main_body').css('height', full_height + 'px');


$(document).ready(function(){
    setTimeout(function(){
        $('.loading_screen').css('opacity', '0');
        changeFrontBlueLayerOpacity();
    }, 1000);
    setTimeout(function () {
        $('.loading_screen').remove();
    }, 2000);



    /*
     Changing the front page's blue layer's opacity
     */
    function changeFrontBlueLayerOpacity(){
        $('.page_1_blue_layer').css('opacity', '0.7');
    }
    if($.browser.mozilla == true){
        console.log("lol");
        $('.main_body').removeClass('main_body_parallax');
        $('.background').css('background-size', '100%');
        $('.sql_front').css({
            '-moz-transform': 'translateZ(' + 0 + 'px)',
            '-webkit-transform': 'translateZ(' + 0 + 'px)',
            '-o-transform': 'translateZ(' + 0 + 'px)',
            '-ms-transform': 'translateZ(' + 0 + 'px)',
            'transform': 'translateZ(' + 0 + 'px)'
        });
        $('.sql_back').css({
            '-moz-transform': 'translateZ(' + 0 + 'px)',
            '-webkit-transform': 'translateZ(' + 0 + 'px)',
            '-o-transform': 'translateZ(' + 0 + 'px)',
            '-ms-transform': 'translateZ(' + 0 + 'px)',
            'transform': 'translateZ(' + 0 + 'px)'
        });
        $('.background').css({
            '-moz-transform': 'translateZ(' + 0 + 'px)',
            '-webkit-transform': 'translateZ(' + 0 + 'px)',
            '-o-transform': 'translateZ(' + 0 + 'px)',
            '-ms-transform': 'translateZ(' + 0 + 'px)',
            'transform': 'translateZ(' + 0 + 'px)'
        });
    }
});


$(window).on("load", function () {
    $('.page_3').css('height', $('.sql_back').height() * 1.5);
    $('.sql_back, .sql_front, .sql_stable').css('margin-top', $('.sql_back').height() * 0.2);


    $('.page_6').css('height', $('.poster_back').height() * 1.7);
    $('.poster_back, .poster_stable').css('padding-top', $('.poster_back').height() * 0.4);

    setTimeout(function () {
        var full_height = $('.page_1').height() + $('.page_2').height() + $('.page_3').height() + $('.page_4').height() + $('.page_5').height() + $('.page_6').height() + $('.page_7').height() + $('.page_5_1').height();
        $('.background_parent').css('height', (full_height * 0.6451) + 'px');
    },500)
})

$(window).resize(function () {

    $('.page_3').css('height', $('.sql_back').height() * 1.5);
    $('.sql_back, .sql_front, .sql_stable').css('margin-top', $('.sql_back').height() * 0.2);


    $('.page_6').css('height', $('.poster_back').height() * 1.7);
    $('.poster_back, .poster_stable').css('padding-top', $('.poster_back').height() * 0.4);

    setTimeout(function () {
        var full_height = $('.page_1').height() + $('.page_2').height() + $('.page_3').height() + $('.page_4').height() + $('.page_5').height() + $('.page_6').height() + $('.page_7').height() + $('.page_5_1').height();
        $('.background_parent').css('height', (full_height * 0.6451) + 'px');
    },1000)
})


