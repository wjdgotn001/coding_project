
var n = 1;
var r = n == '1'; // == 타입비교가 아닌 단순 값 자체만을 비교하므로 답은 true (1과 '1'은 같다.)
var r2 = n === '1'; // === 값과 타입까지 비교하므로 답은 false (1과 '1'은 숫자와 문자이기에 서로 다르다.)

// console.log(r, r2);

/*
if( n < 10 ){
  console.log( 'n은 10보다 작은 수' );
} else { 
  console.log( 'n은 10보다 큰 수' );
}
*/

/*
n = '40';
if ( n > 30 ){
  console.log( 'n은 30보다 큰 수');
} else if ( n <= 30 && n > 20 ){
  console.log( 'n은 30보다 작거나 같고, 20보다 크다' );
} else if ( n > 10 && n <= 20){
  console.log( 'n은 10보다 크고 20보다 작거나 같다' );
} else if ( n <= 10 || typeof(n) === 'string' ){
  console.log( 'n은 10보다 작거나 같은 숫자이거나 또는 문자형 글자이다');
}
*/
 

var body = document.getElementsByTagName('body')[0];
window.addEventListener('resize', function(){


var winWidth = document.body.clientWidth;
console.log('브라우저 가로 값:' , winWidth);
if ( winWidth  > 1600 ){
  body.style.backgroundColor = "#ccc";
} else if( winWidth <= 1600 && winWidth > 1200 ){
  body.style.backgroundColor = "#acf";
} else if( winWidth <= 1200 && winWidth > 767 ){
  body.style.backgroundColor = "#fac";
} else { 
  body.style.backgroundColor = "#f7c";
}

});