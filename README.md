Send Style
==========

Rabit CSS Prototyping Bridge for Glitch and your project.

- Edit CSS/SCSS together with your time in real time
- See the changes on your target website

Setup
-----

#### Glitch Editor Plugin

We need to enhance the Glitch Plugin to emit a event if CTRL/CMD+S is pressend

#1 Install CustomJS for Chrome https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija

#2 Add the JS code from public/glitch.js to CustomJS

#3 Don't forget to enable
  
Anytime you now save, an event is submitted to this app and forwarded to all connted client


#### Website Plugin

Your target website needs to conntect to SendStyle and listen for the event to refresh their CSS.
This is done via a config script.

    <script>
      window._sendstyleId = 'sendstyle';
      window._sendstyles = [ 
        ['/style.css', 'style.css']
      ];
      $.getScript('https://sendstyle.glitch.me/sendstyle.js');
    </script>
    