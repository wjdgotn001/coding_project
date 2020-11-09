
// $(document).ready(function(){/* jQuery */});
// $(function(){/* jQuery */});
// (function($){})(jQuery);

//jQuery에서는 선택자의 형태는 css와 매우 유사하다.
//단, $(' ')를 이용하여 내부에 선택자를 작성한다.

(function($){
  //jQuery
  
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var bestNewBox = $('#bestNewBox');  
  var issueBox = $('#issueBox');  

  headBox.load('./monffee/headBox.html');
  viewBox.load('./monffee/viewBox.html');
  bestNewBox.append('<script src="../js/src/monffee_bestNewBox.js"></script>');
  issueBox.load('./monffee/issueBox.html', function(){
    $(this).append('<script src="../js/src/issueBox.js"></script>')
  });
  
})(jQuery);