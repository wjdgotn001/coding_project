(function($){
    var indiSlide = $('.indicator_horizontal_slide ');
    var indicator = indiSlide.find('.indicator');
    var indiLi = indicator.children('li');

    var slideWrap = indiSlide.find('.slide_wrap');
    var slideUl = slideWrap.children('ul');
    var slideLi = slideUl.children('li');
    var slideLiLink = slideLi.children('a');
    
    var permission = true;
    var indiSln = 0;
    var timed = 500;

    // slide_wrap 내부 a focus기능 강제 비처리
    slideLiLink.attr({'tabIndex':'-1'});

    var typeTest = function(evt){
        // console.log(evt.type);
        if(permission && evt.type == 'fosue'){
            permission = false;
            console.log('포커스 처리되었음');
        }else if(permission && evt.type === 'click'){
            permission = false;
            console.log('클릭되었음');
        }else{
            console.log('....');
        };
        // 위 if문이나 아래 switch 둘 중 하나를 적용!!!

        // switch(evt.type){
        //     case 'focus':
        //         console.log('f');
        //         break;
        //     case 'click':
        //         console.log('c');
        //         break;
        // }
    };

    // indicator클릭시 ul이동 -> a에 focus처리로 변경하고, 실제 배너에 a는 별도로 focus처리
    indiLi.children('a').on('focus click mouseenter', function(e){
        e.preventDefault();

        
        var it =$(this);
        indiSln = it.parent('li').index(); //it대신 indiSln으로 바꿈 //클릭한 a 부모의 순서가 몇번째인가?
        indiLi.eq(indiSln).addClass('action');
        indiLi.eq(indiSln).siblings().removeClass('action');
        // slideUl.stop().css({ 'marginLeft': indiSln * -100 + '%'});
        // typeTest(e);

        if(e.type === 'focus' || e.type === 'mouseenter'){
           slideUl.stop().animate({ 'marginLeft': indiSln * -100 + '%'}, timed);
        }else if(e.type = 'click'){
            setTimeout(function(){
               var thatLink = it.attr('href');
               $(thatLink).attr({'tabIndex': 0});
               //$(thatLink).parent('li').siblings().children('a').attr({'tabIndex':-1});
               slideLi.eq(indiSln).siblings().children('a').attr({'tabIndex':-1});
               $(thatLink).focus();
            }, timed + 10);
        }
    }); //indiLi.children('a').on('focus')

    slideLi.find('a').on('blur', function(){
        $(this).attr({'tabIndex':-1});
    });








    // 클릭기능 수행
    /*
    indiLi.on('click', function(e){ 
        e. preventDefault();

        typeTest(e);

        var it =$(this);
        indiSln = it.index();
        var propertyLink = it.children('a').attr('href');
        var thatPosition = $(propertyLink);

        // slideUl.stop().animate({ 'marginLeft': indiSln * -100 + '%'});
        slideUl.stop().css({ 'marginLeft': indiSln * -100 + '%'}, function(){
            indiLi.eq(indiSln).addClass('action');
            indiLi.eq(indiSln).siblings().removeClass('action');
        });
        thatPosition.attr({'tabIndex':'0'});
        thatPosition.focus();

     });
     */

})(jQuery);