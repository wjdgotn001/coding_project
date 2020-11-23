//rwd_menu_mobile.js

(function($){

    var headBox = $('#headBox');
    var menuBtn = headBox.find('.menu_btn');
    var gnb = headBox.find('.gnb');


    menuBtn.on('click', ['button'] , function(e){
        e.preventDefault();

        // gnb.stop().fadeToggle();
        var gnbDisplay = gnb.css('display');
        if(gnbDisplay === 'none'){
        gnb.stop().fadeIn();
        menuBtn.addClass('on');

        }else{
        gnb.stop().fadeOut();
        menuBtn.removeClass('on');

            
        }



    });




})(jQuery);
