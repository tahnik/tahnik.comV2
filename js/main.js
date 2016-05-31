/**
 * Created by Tahnik Mustasin on 31/05/2016.
 */
/* setting a global width and height for browser window */
var window_height = $(window).height();
var window_width = $(window).width();
$(document).on({
    ajaxStart: function() {},
     ajaxStop: function() {}    
});
/* taking the 3rd page to right side */
$('.page_3_back').css('left', window_width);
$(document).ready(function(){
    setTimeout(function(){
        $('.loading_screen').css('opacity', '0');
    }, 2000)
    changeFrontBlueLayerOpacity();

    /* setting a global width and height for browser window */
    var window_height = $(window).height();
    var window_width = $(window).width();

    /* setting the body's height to 100% of window height */
    $('body').height(window_height);

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
    )

    /*
     Changing the front page's blue layer's opacity
     */
    function changeFrontBlueLayerOpacity(){
        $('.page_1_blue_layer').css('opacity', '0.7');
    }

    /* Setting up scrolling function. This piece of code simulates pagination by using transform and transition
     The idea is to create a div that contains pages of full width and height. Then every time user moves mouse wheel
     just move the div using tranlateY
     */
    var whichPage = 1;
    var EnteredSkillsOnce = false;
    var scrollValue = 0;
    var recentScroll = false;
    var maxPage = 2;
    var lastPage = false;
    $('body').mousewheel(function(event) {
        if(event.deltaY == -1 && !recentScroll && !lastPage){
            whichPage++;
            recentScroll = true;
            if(whichPage == 2) {
                $('.page_2_back').css({
                    '-moz-transform': 'translateY(' + -window_height + 'px)',
                    '-webkit-transform': 'translateY(' + -window_height + 'px)',
                    '-o-transform': 'translateY(' + -window_height + 'px)',
                    '-ms-transform': 'translateY(' + -window_height + 'px)',
                    'transform': 'translateY(' + -window_height + 'px)'
                });
                $('.page_2').css({
                    '-moz-transform': 'translateY(' + -window_height + 'px)',
                    '-webkit-transform': 'translateY(' + -window_height + 'px)',
                    '-o-transform': 'translateY(' + -window_height + 'px)',
                    '-ms-transform': 'translateY(' + -window_height + 'px)',
                    'transform': 'translateY(' + -window_height + 'px)'
                });
                $('.page_1_profile_picture').css({
                    opacity: 0
                });
                $('.page_1_description').css({
                    opacity: 0
                });
                $('.page_1_name').css({
                    '-moz-transform': 'translateY(' + ((-$('.page_1_name').offset().top) + 20) + 'px)',
                    '-webkit-transform': 'translateY(' + ((-$('.page_1_name').offset().top) + 20) +  'px)',
                    '-o-transform': 'translateY(' + ((-$('.page_1_name').offset().top) + 20) + 'px)',
                    '-ms-transform': 'translateY(' + ((-$('.page_1_name').offset().top) + 20) + 'px)',
                    'transform': 'translateY(' + ((-$('.page_1_name').offset().top) + 20) + 'px)'
                });
                $('.page_1_h1').fadeOut();
                setTimeout(function () {
                    $('.page_1_h1').text('Skills');
                    $('.page_1_h1').css('color', '#ebebeb');
                    $('.page_1_h1').fadeIn();
                }, 1000);
            }else if(whichPage == 3){
                lastPage = true;
                $('.page_3_back').css({
                    '-moz-transform': 'translateX(' + -window_width + 'px)',
                    '-webkit-transform': 'translateX(' + -window_width + 'px)',
                    '-o-transform': 'translateX(' + -window_width + 'px)',
                    '-ms-transform': 'translateX(' + -window_width + 'px)',
                    'transform': 'translateX(' + -window_width + 'px)'
                });
                $('.page_2').css({
                    opacity: 0
                });
                $('.page_1_h1').fadeOut();
                setTimeout(function () {
                    $('.page_1_h1').text('Work Experience');
                    $('.page_1_h1').css('color', '#373D3F');
                    $('.page_1_h1').fadeIn();
                }, 1000);
            }
            /*
             Using a timeout to prevent lagging or scrolling when the transition from one page to another is in place
             */
            setTimeout(function (){
                recentScroll = false;
                scrollValue -= window_height;
            }, 1500);
            /*
             If it has entered the skills page once then draw all the circles and lines
             */
            setTimeout(function () {
                if(!EnteredSkillsOnce) {
                    changeCircleOpacity();
                    drawAllLine();
                    EnteredSkillsOnce = true;
                }
            }, 1500);
            console.log("Down");
        }
        if(event.deltaY == 1 && !recentScroll && scrollValue != 0){
            if(lastPage){
                lastPage = false;
            }
            whichPage--;
            recentScroll = true;
            if(whichPage == 1){
                setTimeout(function () {
                    $('.page_2_back').css({
                        '-moz-transform': 'translateY(' + window_height + 'px)',
                        '-webkit-transform': 'translateY(' + window_height + 'px)',
                        '-o-transform': 'translateY(' + window_height + 'px)',
                        '-ms-transform': 'translateY(' + window_height + 'px)',
                        'transform': 'translateY(' + window_height + 'px)'
                    });
                }, 500)
                $('.page_2').css({
                    '-moz-transform': 'translateY(' + window_height + 'px)',
                    '-webkit-transform': 'translateY(' + window_height + 'px)',
                    '-o-transform': 'translateY(' + window_height + 'px)',
                    '-ms-transform': 'translateY(' + window_height + 'px)',
                    'transform': 'translateY(' + window_height + 'px)'
                });
                $('.page_1_profile_picture').css({
                    opacity: 1
                });
                $('.page_1_description').css({
                    opacity: 1
                });
                $('.page_1_name').css({
                    '-moz-transform': 'translateY(' + (($('.page_1_name').offset().top) - 20) + 'px)',
                    '-webkit-transform': 'translateY(' + (($('.page_1_name').offset().top) - 20) +  'px)',
                    '-o-transform': 'translateY(' + (($('.page_1_name').offset().top) - 20) + 'px)',
                    '-ms-transform': 'translateY(' + (($('.page_1_name').offset().top) - 20) + 'px)',
                    'transform': 'translateY(' + (($('.page_1_name').offset().top) - 20) + 'px)'
                });
                $('.page_1_h1').fadeOut();
                setTimeout(function () {
                    $('.page_1_h1').text('Tahnik Mustasin');
                    $('.page_1_h1').css('color', '#ebebeb');
                    $('.page_1_h1').fadeIn();
                }, 500);
            }else if(whichPage == 2){
                $('.page_3_back').css({
                    '-moz-transform': 'translateX(' + window_width + 'px)',
                    '-webkit-transform': 'translateX(' + window_width + 'px)',
                    '-o-transform': 'translateX(' + window_width + 'px)',
                    '-ms-transform': 'translateX(' + window_width + 'px)',
                    'transform': 'translateX(' + window_width + 'px)'
                });
                $('.page_2').css({
                    opacity: 1
                });
                $('.page_1_h1').fadeOut();
                setTimeout(function () {
                    $('.page_1_h1').text('Skills');
                    $('.page_1_h1').css('color', 'white');
                    $('.page_1_h1').fadeIn();
                }, 1000);
            }

            /*
             Using a timeout to prevent lagging or scrolling when the transition from one page to another is in place
             */
            setTimeout(function (){
                recentScroll = false;
                scrollValue += window_height;
            }, 1500);
            console.log("Up");
        }
    });
});