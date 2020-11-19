// ex_05_rwdTemp_import_module.js

(function($){
// jQuery start
var nowW = deviceSize();

var deviceType = ['mobile', 'tablet', 'laptop', 'pc', 'pcfull'];
// =============================================================
var url = './rwdTemp/';
var jurl = '../js/src/';
var jFn = function(fileName, u){
    // var myUrl = u || jurl;
    var myUrl;
    if(!!u){
        myUrl = u;
    }else{
        myUrl = jurl;
    }
    return '<script src="'+myUrl+fileName + '"></script>';
}
var headBox = $('#headBox');
var viewBox = $('#viewBox');

// =============================================================
// viewBox import file
var viewImport = function(){
    viewBox.append( jFn('temp_moblie.js') );
};
// =============================================================
if(nowW === deviceType[0] ){

    headBox.load( url + 'rwdTemp_headBox_mobile.html');
    viewBox.load( url + 'rwdTemp_mobile.html' , viewImport );
}else if(nowW === deviceType[1]){

    headBox.load( url + 'rwdTemp_headBox_tablet.html');
    viewBox.load( url + 'rwdTemp_tablet.html' , viewImport );
}else{

    headBox.load( url + 'rwdTemp_headBox_pc.html');
    viewBox.load( url + 'rwdTemp_pc.html' , viewImport );
}




})(jQuery);
