/* web_jquery_text.js */

(function($){

    //**버튼 클릭시 슬라이드 이동
    var viewBox = $('#viewBox');
    var indicator = viewBox.children('.indicator');
    var indiLi = indicator.find('li');
    var indiBtn = indicator.find('button');

    var viewArea = $('.view_area');
    var viewAreaUl = viewArea.children('ul');
    var viewAreaLi = viewAreaUl.children('li');
    var viewAction = viewAreaUl.children('.action');

    //공통변수
    var slideN = 0;
    var permission = true;
    var timed = 3000;
    
    //마지막 요소 복제 후 li개수 재파악
    var viewAreaLi_clone = viewAreaLi.eq(-1).clone(true);
    viewAreaUl.prepend(viewAreaLi_clone);
    var viewAreaLi_after =  viewAreaUl.children('li');

    //ul,li 가로값 변경
    viewAreaUl.css({'width':viewAreaLi_after.length * 100 + '%' , 'position':'relative' , 'left': -100 + '%'});
    viewAreaLi_after.css({'width':100 / viewAreaLi_after.length + '%' });


    //버튼클릭
    indiBtn.on('click',function(e){
        e.preventDefault();

        if(permission){
            permission = false;

            var it = $(this);
            var itAttr = it.attr('class');
            
            if(itAttr === 'next_btn'){
                if(slideN >= viewAreaLi.length-1){
                    slideN = -1;
                    viewAreaUl.css({'marginLeft': slideN * -100 + '%'});
                }
                slideN += 1;
                // viewAreaUl.animate({'marginLeft': slideN * -100 + '%'});

            }else if(itAttr === 'prev_btn'){
                slideN -= 1;
                // viewAreaUl.animate({'marginLeft': slideN * -100 + '%'});
            }
            //통합
            viewAreaUl.animate({'marginLeft': slideN * -100 + '%'},function(){
                if(slideN <= -1){
                    slideN = viewAreaLi.length-1;
                    viewAreaUl.css({'marginLeft': slideN * -100 + '%'});
                }
                setTimeout(function(){
                    permission = true;

                }, timed/5);
            });
        }//if(permission)
    });//indiBtn.on

    // ============================================================
    
    //**인디케이터 클릭시 슬라이드 이동
    indiLi.children('a').on('click focus',function(e){
        e.preventDefault();

        var it = $(this);
        slideN = it.parent('li').index();

        if(slideN !== viewAction.index()-1){

            indiLi.eq(slideN).addClass('action');
            indiLi.eq(slideN).siblings().removeClass('action');
            viewAction = viewAreaUl.children('.action');
         
            viewAreaLi.eq(slideN).addClass('action');
            viewAreaLi.eq(slideN).siblings().removeClass('action');
            viewAreaUl.animate({'marginLeft': slideN * -100 + '%'});
        } 
    });//indiLi

    // ============================================================

    //**자동재생, 일시정지
    var startInterval;
    var nextBtn = $('.next_btn');

    var startSlide = function(){
        startInterval = setInterval(function(){
            nextBtn.trigger('click');
        }, timed);
    };
    var stopSlide = function(){
        clearInterval(startInterval);
    };

    viewBox.on({
        'mouseenter':stopSlide,
        'mouseleave':startSlide
    });

    // ============================================================

    //**헤더고정, 버튼상단으로 이동
    var headBox = $('#headBox');
    var topMove = $('.top_move');
    var win = $(window);

    var headOffset = headBox.offset().top;
    // console.log(headOffset);
    
    topMove.hide();
    // 스크롤시 header영역 고정, topmove버튼 보이게
    win.on('scroll',function(e){
        e.preventDefault();
        var scrollTop = win.scrollTop();

        if(scrollTop >= headOffset ){
            headBox.css({'position':'fixed', 'width': 100 + '%', 'top': 0});
        }else{
            headBox.removeAttr('style');
        }
        if(scrollTop >= 300){
            topMove.fadeIn();
        }else{
            topMove.fadeOut();
        }
    });//win.on

    // topmove클릭시 상단으로 이동
    topMove.on('click',function(e){
        e.preventDefault();
        
        var it = topMove.children('a');
        var itAttr = it.attr('href');
        var itOffset = $(itAttr).offset().top;
        $('html').animate({scrollTop:itOffset});
    });

})(jQuery);
