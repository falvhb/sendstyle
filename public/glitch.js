
//$.getScript('https://sendstyle.glitch.me/glitch.js');
    

function start(){
    var id = location.hash.substr(3).split('?')[0];
    function sendkeys(){
      var ifrm = document.createElement("iframe");
      ifrm.setAttribute("src", 'https://sendstyle.glitch.me/reload?id='+id);
      ifrm.style.width = "0px";
      ifrm.style.height = "0px";
      document.body.appendChild(ifrm);
    }
  
    $('.CodeMirror')[0].CodeMirror.options.extraKeys['Ctrl-S'] = sendkeys;
    $('.CodeMirror')[0].CodeMirror.options.extraKeys['Cmd-S'] = sendkeys;
}

function check(){
  if ($ && $('.CodeMirror') && $('.CodeMirror')[0] && $('.CodeMirror')[0].CodeMirror){
    console.log('starting...');
    start();
  } else {
    console.log('waiting...');
    setTimeout(check, 100);
  }
}

check();