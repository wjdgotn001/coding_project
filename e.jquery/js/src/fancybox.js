(function($){

     
    var data = [
        { "title":"juice_01",
          "thumImg":"juice_small_01.jpg",
          "bigImg":"juice_big_01.jpg",
          "content":"image_01 설명"
        },

        { "title":"juice_02",
          "thumImg":"juice_small_02.jpg",
          "bigImg":"juice_big_02.jpg",
          "content":"image_02 설명"
        },

        { "title":"juice_03",
          "thumImg":"juice_small_03.jpg",
          "bigImg":"juice_big_03.jpg",
          "content":"image_03 설명"
        },
          
        { "title":"juice_04",
          "thumImg":"juice_small_04.jpg",
          "bigImg":"juice_big_04.jpg",
          "content":"image_04 설명"
        }
    ];
    var url = '../../img/modal/';
    // ===================================================
    var modalInCode = '<li><button type="button"><span></span></button></li>';
    var galleryCode = '<div class="gallery_box"><div class="gallery_area"><div class="close"><button type="button"><span>닫기</span></button></div><div class="big_img"><p></p></div></div></div>';
    // ===================================================
    var modal01 = $('.modal_01');
    // modal01.append(galleryCode); //내부에서 맨뒤에
    var modalUl = modal01.children('ul');
  
    var i = 0;
    modalUl.empty(); //선택자 안에 있는 주석을 지워라!!
    var modalBtnCon;
    var temLi;
    for( ; i < data.length ; i +=1 ){
        modalUl.append(modalInCode);
        temLi = modalUl.children('li').eq(i);
        modalBtnCon = temLi.find('button');
        modalBtnCon.css({
            backgroundImage:'url('+ url + data[i].thumImg +')', 
            textTransform:'uppercase'});

        modalBtnCon.children('span').text( data[i].title );
        // temLi.attr({'data-big':data[i].bigImg,'data-narr':data[i].content });
        } //for(){}
    var modalLi = modal01.find('li');
    var modalBtn = modalLi.find('button');

    // =======================================================
    var galleryBox,close,bigImg,bigImgP;
    var indexCheck;
    var timed = 500;
    
    modalBtn.on('click', function(e){
        e.preventDefault();
        var it = $(this).parent('li');
        var itI = it.index();
        indexCheck = itI;

        modal01.after(galleryCode); //바로 뒤에
        galleryBox = $('.gallery_box');
        close =  galleryBox.find('.close');
        bigImg = galleryBox.find('.big_img');
        bigImgP = bigImg.children('p');

        // var dataBig = it.attr('data-big');
        // var dataNarr = it.attr('data-narr');

        // ==========================================

        bigImg.css({backgroundImage: 'url('+ url + data[indexCheck].bigImg +')' });
        // bigImg.css({backgroundImage: 'url('+ url + dataBig +')' });
        bigImgP.text(data[indexCheck].content);
        // bigImgP.text(dataNarr);

        // ==========================================
        galleryBox.stop().fadeIn(function(){
          close.children('button').focus();
          setTimeout(function(){
            bigImgP.addClass('action');
          }, timed/2);
        });

    close.on('click',function(e){
        e.preventDefault();
        galleryBox.stop().fadeOut();
        modalLi.eq(indexCheck).find('button').focus();
        bigImgP.removeClass('action');
        galleryBox.remove();
    });
});

})(jQuery);