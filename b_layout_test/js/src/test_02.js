var productBox = $('#miniProduct');
productBox.css ({ 'overflow':'hidden'});

var slideBtn = productBox.find('indicator');
var slideNextBtn = slideBtn.children('button').eq(0);
var slidePrevBtn = slideBtn.children('button').eq(1);
var slideN = 0;
var viewImg = productBox.find('.product');
var viewLi = viewImg.find('li');
var viewLiLast = viewLi.eq(-1).clone();
viewImg.prepend(viewLiLast);
var newViewLi = productBox.find('li');
console.log(newViewLi.length);

viewImg.css({ 'marginLeft': -100 + '%' , 'width': newViewLi.length * 100 + '%' });
newViewLi.css({ 'width': (100 / newViewLi.length ) + '%' });


slideNextBtn.on('click', function(e){
  e.preventDefault();
  viewImg.stop().animate({ 'left': slideN * -100 + '%' }, function(){
    if(){
      
    };

  });


})

