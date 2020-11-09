// monffee_bestNewBox.js

(function($){
  var url = '../img/monffee/new_menu/'
  var newsData = [
    {title:'새로운메뉴1',
     link:'#',
     img:'menu_01.png',
     content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, tempora voluptate. Minus ipsum dolore consequatur.'
    },

    {title:'새로운메뉴2',
     link:'#',
     img:'menu_02.png',
     content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, tempora voluptate. Minus ipsum dolore consequatur.'
    },

    {title:'새로운메뉴3',
    link:'#',
    img:'menu_03.png',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, tempora voluptate. Minus ipsum dolore consequatur.'
    },

    {title:'새로운메뉴4',
    link:'#',
    img:'menu_04.png',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, tempora voluptate. Minus ipsum dolore consequatur.'
    },

    {title:'새로운메뉴5',
    link:'#',
    img:'menu_05.png',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, tempora voluptate. Minus ipsum dolore consequatur.'
    },

    {title:'새로운메뉴6',
    link:'#',
    img:'menu_06.png',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, tempora voluptate. Minus ipsum dolore consequatur.'
    },

    {title:'새로운메뉴7',
    link:'#',
    img:'menu_07.png',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, tempora voluptate. Minus ipsum dolore consequatur.'
    }
  ];

  var bestNewBox = $('#bestNewBox');
  var bestH2 = bestNewBox.children('h2');
  bestH2.after('<ul class="clearfix"></ul>');
  var bestUl =  bestNewBox.children('ul');
  var cardListBase = ' <li><a href="#"><div class="news_img"></div><dl><dt></dt><dd></dd></dl></a></li>';

  // bestUl.append(cardListBase);
  var i =0;
  var bestLi;
  for( ; i<newsData.length ; i +=1 ){
    bestUl.append(cardListBase);
    bestLi = bestUl.find('li').eq(i);
    bestLi.find('a').attr({href:newsData[i].link});
    bestLi.find('.news_img').css({ 'backgroundImage': 'url( ' + url + newsData[i].img + ')'});
    bestLi.find('dt').text(newsData[i].title);
    bestLi.find('dd').text(newsData[i].content);

  }
  
  







})(jQuery);