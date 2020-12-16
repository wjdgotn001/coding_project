

(function($){
    var wrap = $('#wrap');
    var ch = wrap.find('.character');


    wrap.on('mousemove',function(e){
        e.preventDefault();

        var eOrigin = e.originalEvent;
        //가로세로
        var w = $(this).outerWidth();
        var h = $(this).outerHeight();

        //x,y좌표 
        var x = eOrigin.offsetX;
        var y = eOrigin.offsetY;

        console.log(x,y);



    });

})(jQuery);