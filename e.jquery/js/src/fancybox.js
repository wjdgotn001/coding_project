(function($){
    var modal = $('.modal_01');
    var modalUl = modal.children('ul');
    var modalLi = modalUl.children('li');
    var modalBtn = modalLi.children('button');
    var galleryBox = $('.gallery_box');
    var galleryArea = galleryBox.children('.gallery_area');
    var close =  galleryArea.children('.close');
    var closeBtn = close.children('button');
    var bigImg = galleryArea.find('.big_img');

    var url = '../../img/modal/';
    var indexCheck;
    

    modalBtn.on('click', function(e){
        e.preventDefault();
        var it = $(this).parent('li');
        var itI = it.index();
        indexCheck = itI;

        var dataBig = it.attr('data-big');

        galleryBox.stop().fadeIn(function(){
          close.children('button').focus();
        });

        bigImg.css({backgroundImage: 'url('+ url + dataBig +')' });
        // var dd = $(this).attr('data-big');
        // galleryBox.stop().fadeIn();
        
        // bigImg.css({backgroundImage:'url(' + url + dd + ')' });


    close.on('click',function(e){
        e.preventDefault();
        galleryBox.stop().fadeOut();
        modalLi.eq(indexCheck).find('button').focus();

        // galleryBox.stop().fadeOut();
    });
    });

})(jQuery);