
// ouverture d'une fenêtre pour afficher une image



function openf (){
    
fenetre(this, getWindowWidth, getWindowHeight, " ")
    // fenetre(name(e),getWindowWidth()-500,getWindowHeight()-50," ");
};


function recupId(e)
{
  
        return e.target.id;


};

function name() 
{    
 var  nomImage= recupId().getAttribute("src");
 return nomImage;
};



function fenetre(image, largeur, hauteur, titre) {
    window.open("home.php?img=" + image + "&larg=" + largeur + "&haut=" + hauteur + "&titre=" + escape(titre), "", "width=" + largeur + ",height=" + hauteur);
}

function getWindowHeight() {
    var windowHeight=0;
    if (typeof(window.innerHeight)=='number') {
        windowHeight=window.innerHeight;
    } else {
        if (document.documentElement&& document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body&&document.body.clientHeight) {
                windowHeight=document.body.clientHeight;
            }
        }
    }
    return windowHeight;
};
function getWindowWidth() {
 var windowWidth=0;
 if (typeof(window.innerWidth)=='number') {
  windowWidth=window.innerWidth;
    } else {
  if (document.documentElement&& document.documentElement.clientWidth) {
   windowWidth = document.documentElement.clientWidth;
        } else {
   if (document.body&&document.body.clientWidth) {
    windowWidth=document.body.clientWidth;
            }
        }
    }
 return windowWidth;
};


