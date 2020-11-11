(function($){
    var indiSlide = $('.indicator_horizontal_slide ');
    var indicator = indiSlide.find('indicator');
    var indiLi = indicator.children('li');

    var slideWrap = indiSlide.find('.slide_wrap');
    var slideUl = slideWrap.children('ul');
    
    var permission = true;
    var indiSln = 0;
    var timed = 500;

    // indicator클릭시 ul이동
    indiLi.on('focus', ['a'], function(e){
        e.preventDefault();
        if(permission){
            permission = false;
            var it =$(this);
            indiSln = it.index(); //it대신 indiSln으로 바꿈
            slideUl.stop().animate({ 'marginLeft': indiSln * -100 + '%'}, function(){
                indiSln.eq(indiSln).addClass('action');
                indiSln.eq(indiSln).siblings().removeClass('action');

                setTimeout(function(){
                    permission = true;
                }, timed/5);
            });
        } //if(permission)
    }); //indiLi.on

})(jQuery);