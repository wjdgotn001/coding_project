(function($){
    var winSize = deviceSize();
    var deviceType = [ 'moblie', 'tablet', 'labtop', 'pc', 'pcfull' ];
    
    var headBox = $('#headBox');
    var menuBtn = $('.menu_btn');

    if(winSize === deviceType[0] || winSize === deviceType[1]){
        headBox.append('<script src="../js/src/rwd_menu_mobile.js"></script>');


    }else(
        menuBtn.remove()
    )
})(jQuery);



