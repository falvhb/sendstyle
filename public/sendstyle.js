//$.getScript('https://sendstyle.glitch.me/sendstyle.js');

function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

var URL = 'https://sendstyle.glitch.me/';

window._sendstyles.forEach(function(style){
    style.$links = document.querySelectorAll('link[href="'+style[0]+'"]');
    var newLink = (style[1].substr(0,4) === 'http' ? '' : URL.replace('sendstyle',window._sendstyleId)) + style[1];
    //console.log(newLink, )  
    for (var i = 0,ii=style.$links.length;i<ii;i+=1){
      style.$links[i].href = newLink + "?" + new Date().getTime();
    }
});

loadScript(URL + 'socket.io/socket.io.js', function(){
    //initialization code
    var socket = io.connect(URL);
    socket.on('css', function (data) {      
      var cachebuster = new Date().getTime();
      if (data.id === window._sendstyleId &&  window._sendstyles.length > 0){
        window._sendstyles.forEach(function(style){
          for (var i = 0,ii=style.$links.length;i<ii;i+=1){
            style.$links[i].href=style.$links[i].href.split('?')[0]+"?" + cachebuster;
          }
          
        });
      }
    });
});