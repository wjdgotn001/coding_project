/*
var n = 0;
console.log(n);
n += 1;
console.log(n);
n += 1;
console.log(n);
n++;
console.log(n);
*/

var k = 0;
while( k < 10 ){
  console.log('k:' , k); 
  k += 1;
  //break;
}
// 9가 될 때까지 반복해서 +1씩 처리
console.log('k는 이제', k , '이 되었습니다.' );

/*=============================================*/
// var test = document.getElementsByclassName('test')[0]; //직접적으로 요소를 선택하겠다. ( tag 대신 class로 변경)
// var test = document.getElementsByTagName('div')[0];
var test = document.getElementById('wrap');
var l = 0;
while( l <= 5 ){
  var p = document.createElement('p') //p요소를 생성하겠다.
  p.innerText = (l+1) + '번째 p요소에 글자를 작성합니다.'; 
  test.append(p);
  l += 1; //빼먹지 말 것!!!!!!
}

/*===============================*/
var m = 0;
// while(m < 0) { console.log(m); m += 1; } 이었다면 수행하지 않는다. 
// but do while문은 일단 수행하려 하지만 결과적으로 부합하지 않으므로 결과는 0으로만 나오고 빠져나온다.
do{
  console.log( m );
  m += 1;
} while( m < 0 );

// **반복문의 중요포인트 3가지 : 첫번째 값, 조건, 조건의수행연산(증가하거나 감소)**
  // while(조건){ 조건이 참이면, 기능수행 }
  // do{ 조건이 어떻든 일단 수행 } while( 조건비교 )

