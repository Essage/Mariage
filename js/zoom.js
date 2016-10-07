var links = document.getElementsByTagName('a'),
    linksLen = links.length;
console.log(linksLen);
console.log (document.body.scrollTop);

for (var i = 0; i < linksLen; i++) {

    links[i].addEventListener('click', function(e) {
        e.preventDefault(); // On bloque la redirection

        // On appelle notre fonction pour afficher les images
        // currentTarget est utilisé pour cibler le lien et non l'image
        displayImg(e.currentTarget);
    });

}

function displayImg(link) {

    var img = new Image(),
        overlay = document.getElementById('overlay');


    img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });

    disableScroll()
    img.src = link.href;
    overlay.style.display = 'block';
    windowCenter('overlay');
    overlay.innerHTML = '<span>Chargement en cours...</span>';

}

document.getElementById('overlay').addEventListener('click', function(e) {
    // currentTarget est utilisé pour cibler l'overlay et non l'image
    e.currentTarget.style.display = 'none';
    enableScroll()
    
});
// centrer l'overlay
//recuperation taille ecran
function returnSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  var result = new Array(myWidth,myHeight);
  return result;
};

//centrer
function windowCenter(myId) {
    result=returnSize();
    var myWidth=result[0];
    var myHeight=result[1];
    var elementWidth=document.getElementById(myId).offsetWidth;
    var elementHeight=document.getElementById(myId).offsetHeight;
     
    var myScrollTop=document.body.scrollTop;
    var posY=myScrollTop+myHeight-myHeight/2-elementHeight/2;
   
    document.getElementById(myId).style.top=posY+"px";
};


var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// end centrage overlay

//disable et able scroll

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
};

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
};

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
};

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
};