(function($){

  var pdBox = $('.product');
  pdBox.css ({ 'overflow': 'hidden'});

  var pdBoxUl = pdBox.children('ul');
  var pdBoxLi = pdBoxUl.children('li');
  
  console.log(pdBoxLi.length);

  var indicator = $('.indicator');
  var indiLi = indicator.children('li');
  var slideN = 0;

  indiLi.on('click', function(e){
    e.preventDefault();
    var its = $(this);
    slideN = its.index();
    pdBoxUl.stop().animate({ 'left': slideN * -100 + '%' });
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  });


  
  
  
  
})(jQuery);