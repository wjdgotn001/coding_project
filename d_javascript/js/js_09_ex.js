var product = document.getElementsByClassName('product')[0];

// product.innerHTML = '<div><h3></h3><p><a></a></p></div>';
// product.append('div');
// var div = product.children('div')[0];
// div.classList.add('apple');

var div, h3, par, par2, link, imgBox ;
var url = '../img/';

for( var i = 0 ; i < arrObj.length ; i += 1 ){
  div = document.createElement('div');
  h3 = document.createElement('h3');
  imgBox = document.createElement('div');
  par = document.createElement('p');
  par2 = document.createElement('p');
  link = document.createElement('a');
  
  div.classList.add(arrObj[i].title);
  h3.innerText = arrObj[i].title;
  imgBox.classList.add('product_img');
  imgBox.style='background-image:url(" '+ url + arrObj[i].img +' ")';
  link.setAttribute('href', arrObj[i].site);
  link.innerText = arrObj[i].serise;
  par2.innerText = arrObj[i].content;

  product.append(div);
  div.prepend(h3);
  div.prepend(imgBox);
  div.append(par2);
  div.append(par);
  par.append(link);
}
