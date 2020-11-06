(function($){
  var accor = $('.accor');
  var accorDt = accor.children('dt');
  var accorDd = accorDt.siblings('dd');

  accorDt.on('click', function(e){
    e.preventDefault();
    var it = $(this);
    it.next('dd').stop().slideToggle(function(){
      var itDdDisplay = $(this).css('display');
      if(itDdDisplay === 'block'){
        it.addClass('action');
        it.siblings('dt').removeClass('action');
      }else if (itDdDisplay === 'none'){
        it.removeClass('action');
      }
    });
    it.next('dd').siblings('dd').stop().slideUp();
  });

})(jQuery);


