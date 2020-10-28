// var obj = new Object;

var obj = {
  'samsung':'galaxy',
  'apple':'iphone',
  'google':'pixel',
  'lg':'belbet'
};
// console.log(obj.google);
// console.log(obj['google']);

obj.nokia = 'banana';
// console.log(obj);
obj.Fn = function(person){ 
  return person + '님 반가워요!';
 }
// console.log(obj);
var x = obj.Fn('heasu');
// console.log(x);

var arrObj = [
  {'title':'apple',
   'serise':'iphone',
   'site':'http://apple.com',
   'content':'2020년 애플의 최신 아이폰 출시'
  },
  {
    'title':'samsung',
    'serise':'galaxy',
    'site':'http://samsung.com',
    'content':'갤럭시21 부품 유출'
  },
  {
    'title':'lg',
    'serise':'wing',
    'site':'http://lg.com',
    'content':'과거의 가로본능을 기억하게하는 윙'
  },
  {
    'title':'oneplus',
    'serise':'oneplus',
    'site':'http://oneplus.com',
    'content':'삼성,애플에 뒤쳐지지 않는 성능'
  }
]
// console.log( arrObj.length );
// console.log(arrObj[0].serise);
// var p = 0;
// for( ; p < arrObj.length ; p += 1 ){
//   console.log( (p+1) + '. ' + arrObj[p].serise );
// }
// arrObj.forEach(function(data, idx){
//   console.log( (idx + 1) + '. ' + data.serise )
// });

// =============================

var cln = [ 'apple' , 'samsung' ,  'lg' , 'oneplus'];
var hT = [ 'apple' , 'samsung' ,  'lg' , 'oneplus'];
var pr = document.querySelectorAll('.product')[0];

var j = 0;
var div;
var link;
var clnLen = cln.length;
var h3;
var p;

for( ; j < clnLen ; j += 1 ){
  div = document.createElement('div');
  div.classList.add(cln[j]);
  h3 = document.createElement('h3');
  p = document.createElement('p');
  link = document.createElement('a');
  link.innerText = cln[j];
  h3.innerText = hT[j];
  div.append(h3);
  div.append(p);
  p.append(link);
  // div.insertBefore(link, p);
  pr.append(div);
}