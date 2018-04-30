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
    style.$link = document.querySelector('link[href="'+style[0]+'"]');
    var newLink = (URL.substr(0,4) === 'http' ? '' : URL) + style[1];
    style.$link.href = newLink + "?" + new Date().getTime();
});

loadScript(URL + 'socket.io/socket.io.js', function(){
    //initialization code
    var socket = io.connect(URL);
    socket.on('css', function (data) {      
      if (data.id === window._sendstyleId &&  window._sendstyles.length > 0){
        window._sendstyles.forEach(function(style){
          style.$link.href=style.$link.href.split('?')[0]+"?" + new Date().getTime()
        });
      }
    });
});