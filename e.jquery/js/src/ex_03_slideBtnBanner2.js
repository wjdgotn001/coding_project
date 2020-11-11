// es_02_slideBtnBanner2.js

(function($){
    var slide = $('.slide_02');
    var slideBtnPart = slide.find('.slide_btn');
    var slideBtn = slideBtnPart.children('button');

    var indexSlide = slide.find('.index_slide');
    var slideLi = indexSlide.find('li');
    var liLen = slideLi.length;

    //action클래스이름이 몇번째 있는지 파악하는 기능
    var actionIndex;
    var MyActionIndex = function(){
        var i = 0, actionCheck;
        for( ; i<liLen ; i +=1 ){
            actionCheck = slideLi.eq(i).hasClass('action'); //action위치를 파악하기위해
            if(actionCheck){
                actionIndex = i;
                break;
            }
        }
        console.log( actionIndex );
        return actionIndex;
    } //MyActionIndex End


    //action만 살리기
    //1. 
    slideLi.not( $('.action') ).hide(); //not을 제외하고
    //2.
    // slideLi.hide();
    // indexSlide.find('.action').show();
    var SlideAction = function(){
        slideLi.eq(slideN).show();
        slideLi.eq(actionIndex).fadeOut(function(){
          slideLi.eq(slideN).addClass('action');
          slideLi.eq(slideN).siblings().removeClass('action');
        });
    };
    // =======================
    var slideN = 0;

    slideBtn.on('click', function(e){
        e.preventDefault();
        MyActionIndex();
        var it =$(this).attr('class');
        
        if(it === 'next_btn'){
            slideN += 1;
            if( slideN >= liLen ){
                slideN = 0;
            } //if()
            // slideLi.eq(slideN).show();
            // slideLi.eq(actionIndex).fadeOut(function(){
            //     slideLi.eq(slideN).addClass('action');
            //     slideLi.eq(slideN).siblings().removeClass('action');
            // });
            SlideAction();

        }else if( it === 'prev_btn'){
            slideN -= 1;
            // slideLi.eq(slideN).show();
            //      slideLi.eq(actionIndex).fadeOut(function(){
            //     slideLi.eq(slideN).addClass('action');
            //     slideLi.eq(slideN).siblings().removeClass('action');
            // }); //fadeOut()
            SlideAction();

            if( slideN <= -1 ){
                slideN = liLen -1;
            } //if()
        }//if(it === 'prev') End =========
    }); // slideBtn.on('click') End =========

})(jQuery);