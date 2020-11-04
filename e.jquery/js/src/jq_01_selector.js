// jq_01_selector.js
// $(document).ready(function(){});
// $(function(){});

(function($){
  var part = $('.part');
  var box = part.find('#box');
  var boxTwo = part.find('.box_two');

  box.css ({
    'width': 100 + 'px', 
    'height': 110 + 'px' , 
    'background-color': '#fa0' });

  boxTwo.css ({ 
    'width': 300 + 'px' , 
    'height' : 50 + 'px' , 
    'border': 3 + 'px solid #0af' });

  var listThree = $('.list_three');
  var listLi = listThree.children('li');
  listLi.css ({
    'background-color' : '#fac',
    'margin-bottom' : 5 + 'px',
    'width': 200 + 'px' });
  
  // .list_three > li:nth-child(1)
  listThree.children('li:nth-child(1)').css ({  'color' : '#077' , 'fontWeight':'bold' });
  listThree.children('li:nth-of-type(2)').css ({ 'color' : '#077' , 'fontWeight':'bold' });
  listThree.children('li:nth(2)').css ({ 'color' : '#ddd' , 'fontSize': 1.3 + 'rem' });
  listThree.children('li').eq(3).css ({ 'color' : '#fff' , 'fontSize': 1.3 + 'rem' });

  var listOl = listLi.find('ol');
  listOl.css ({ 'border': 5 + 'px solid #777', 'padding': 10 + 'px' });
  // ol:marker, ol::before, ol::after 는 js에서 컨트롤할 수 없다.

  var style = $('style');
  style.append('#wrap{width:800px; background-color:#ddd; margin:auto;}');
  style.append('#wrap::after{content:"글씨를 작성해보아요!";}');

  // ====================================================================================
  var p2List =  $('.part_2_list');
  var p2Li = p2List.children('li');
  p2List.css ({'listStyle':'none'});
  p2Li.css({'width':100 + 'px', 'height': 20 + 'px', 'marginBottom': 10 + 'px', 'backgroundColor': '#fff' });
  p2Li.eq(4).css({ 'color': '#07f', 'fontWeight':'bold'});
  p2Li.eq(4).prevAll().css({ 'borderRadius': 20 + 'px', 'boxShadow': '5px 5px 5px #555' });
  
  // var lli = document.getElementsByTagName('li');
  // for( var i=0 ; i<lli.length; i+=1 ){
  //   lli[i].style.backgroundColor = "#acf";
  //   lii[i].style = 'font-size:0.8rem; font-weight:bold';
  // }

  p2Li.eq(-5).css({ 'fontWeight':'bold', 'color':'#f07' });
  p2Li.eq(-5).next().css ({ 'backgroundColor': '#ff7' });
  p2Li.eq(-5).next().nextAll().css ({ 'boxShadow': '5px 5px 0 #f07' });

  p2Li.eq(10).parents('#wrap').css({ 'border':'3px dotted #57a'}); 
  //li의 모든 부모가 해당되지만 ()안에 선택했으면 그 부모만 해당
  p2Li.eq(10).parentsUntil('#wrap').css({ 'outline': 5 + 'px solid rgba(51,51,255,0.3)'});
  //li의 모든 부모가 해당되지만 ()안에 선택한 요소를 제외한!! 나머지 부모만 해당
  p2Li.eq(10).parent().css({ 'backgroundColor': '#242424' });
  //li의 바로 위인 부모만 적용


  //당신의 부모의 부모의 형제중에 첫째에게 사과를 주세요.clearfix
  // li.parent().parent().siblings().eq(0)
  p2Li.parent().parent().siblings('h1').css({'backgroundColor':'#cfc', 'padding': 10 + 'px', 'marginBottom': 10 + 'px' });

 
  // ========================================================================
  var evt = $('.evt');
  var evtLi = evt.children('li');

  evtLi.eq(0).on('click', function(event){
    event.preventDefault();
    evtLi.css ({ 'backgroundColor': '#aa7' });
  })
  evtLi.eq(1).on('mouseenter',function(event){
    event.preventDefault();
    evtLi.css ({ 'backgroundColor':'transparent'});
  })

  evtLi.on('click', function(e){
    e.preventDefault();
    //(선택한 것).제외한 나머지 li에 border-bottom을 적용
    $(this).css({ 'border': '0'});
    $(this).siblings().css({ 'border-bottom': 5 + 'px solid #333' });
    var thisI = $(this).index(); 
    // eq() - 순서를 직접 언급
    // index() - 순서를 보여지게 확인

    // console.log(thisI);
  })



  /*
  click, dbclick(더블클릭), mousedown(마우스누름), mouseup(마우스떼기), mousemove
  focus, blur, mouseenter, mouseleave, mouseover, mouseout
  keypress(키보드 눌렀다 떼기), keydown(키보드누름), keyup(키보드떼기)
  touchstart, touchend, touchmove,
  scroll, resize 
  */



  
})(jQuery);