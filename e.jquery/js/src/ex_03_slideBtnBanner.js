
(function($){
    //console.log( $.fn ); //jQuery연결확인 및 버전 체크
    //slide 기능 만들기1
    var slide_01 = $('.slide_01');
    var s_01_btn = slide_01.children('.slide_btn');
    var s_01_button = s_01_btn.children('button');
    s_01_btn.css({ 'zIndex': 100 });
    
    var s_01_wrap = slide_01.find('.slide_wrap');
    var s_01_Ul = s_01_wrap.children('ul');
    var before_s_01_Li = s_01_Ul.children('li');

    //복제한내용을 맨 앞으로 이동 -> 전체가로값 변경, 내부 li크기 변경해야함.
    var cloneLastLi_s_01 = before_s_01_Li.eq(-1).clone(true); //복제
    s_01_Ul.prepend(cloneLastLi_s_01); 
    var re_s_01_li = s_01_Ul.children('li');
    s_01_Ul.css({ 'width': re_s_01_li.length * 100 + '%' , 'position':'relative', 'left': '-100%' });
    re_s_01_li.css ({ 'width': 100 / re_s_01_li.length + '%' });

    
    
//button 클릭 시 해당요소 파악하기
//공통변수, 공통허용기능
var slideN = 0;
var permission = true;
var timed = 500;

//1.각 버튼을 분리하여 따로 처리하는 방법.
// 다음내용 버튼 클릭
// s_01_btn.children('.next_btn').on('click' , function(e){
//     e.preventDefault();
//     if(permission){
//         permission = false;
//         if( slideN >= before_s_01_Li.length-1 ){ 
//             slideN = -1;
//             s_01_Ul.css({ marginLeft: slideN * -100 + '%' });
//          }
//          slideN += 1; //next버튼을 클릭할 시 +1씩 증가해라.
//          s_01_Ul.stop().animate({ marginLeft: slideN * -100 + '%' } , function(){
//             setTimeout(function(){   //permission = true;
//                 permission = true;
//             }, timed/5);                  
//          });
//         } //if(permission)End
//     });

// // 이전내용 버튼 클릭
// s_01_btn.children('.prev_btn').on('click' , function(e){ 
//     e.preventDefault();
//     if(permission){
//         permission = false;
//         slideN -= 1;
//         s_01_Ul.stop().animate({ marginLeft: slideN * -100 + '%'  } , function(){
//             if(slideN <= 1 ){
//                 slideN = before_s_01_Li.length -1;
//                 s_01_Ul.css({ marginLeft: slideN * -100 + '%'  });
//             }
//             setTimeout(function(){
//                 permission = true;
//             }, timed/5);
//          });    
//         } //if(permission)End 
//     });

// });

// ============================================================

//2.동일한 역할을 하는 버튼을 묶어서 기능에 따라 처리하는 방법.

s_01_button.on('click', function(e){
    e.preventDefault();
    if(permission){
    permissin = false;

    // console.log( $(this).attr('class') ); //클릭 시 prev, next버튼 파악
    var it =$(this);
    var itClass = it.attr('class');

    if(itClass === 'next_btn'){
        //다음버튼 클릭시
        if( slideN >= before_s_01_Li.length-1 ){ 
            slideN = -1;
            s_01_Ul.css({ 'marginLeft': slideN * -100 + '%' });
        }
        slideN += 1; //next버튼을 클릭할 시 +1씩 증가해라.
        // s_01_Ul.animate({ 'marginLeft': slideN * -100 + '%' } , function(){ });
        
    } else if(itClass === 'prev_btn'){
        //이전버튼 클릭시
        slideN -= 1;
        // s_01_Ul.animate({ 'marginLeft': slideN * -100 + '%' } , function(){
        //     if( slideN <= -1 ){
        //         slideN = before_s_01_Li.length -1;
        //         s_01_Ul.css({ 'marginLeft': slideN * -100 + '%'  });
        //     }
        // });
    }
    //통합기능
    s_01_Ul.animate({ 'marginLeft': slideN * -100 + '%' } , function(){
        if( slideN <= -1 ){
            slideN = before_s_01_Li.length -1;
            s_01_Ul.css({ 'marginLeft': slideN * -100 + '%'  });
     }
     setTimeout(function(){
         permission = true;
     }, timed/5);
    });
    
  }//if(permission)End     
});

})(jQuery);