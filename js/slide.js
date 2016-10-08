$(document).ready(function(){


////hauteur background
function redimensionnement(){ 
 
    var $image = $('#background');
    var image_width = $image.width(); 
    var image_height = $image.height();     
     
    var over = image_width / image_height; 
    var under = image_height / image_width; 
     
    var body_width = $(window).width(); 
    var body_height = $(window).height(); 
     
    if (body_width / body_height >= over) { 
      $image.css({ 
        'width': body_width + 'px', 
        'height': Math.ceil(under * body_width) + 'px', 
        'left': '0px', 
        'top': Math.abs((under * body_width) - body_height) / -2 + 'px' 
      }); 
    }  
     
    else { 
      $image.css({ 
        'width': Math.ceil(over * body_height) + 'px', 
        'height': body_height + 'px', 
        'top': '0px', 
        'left': Math.abs((over * body_height) - body_width) / -2 + 'px' 
      }); 
    } 
} 
      
$(document).ready(function(){

    // Au chargement initial   
    redimensionnement();
     
    // En cas de redimensionnement de la fenêtre
    $(window).resize(function(){ 
        redimensionnement(); 
    }); 
 
}); 


  /////////////// SLide
    
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i),// enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    $currentImg = $img.eq(i),
    $img1 =$img.eq(2),
    $img2 =$img.eq(1),
    $img0 =$img.eq(0);    


	for(a=1;a<3;a++)
	{
		$img.eq(a).css('height','244px');
		$img.eq(a).css('width','300px');
		$img.eq(a).css('top','0');
		$img.eq(a).css('z-index','2');
	};

		$img.eq(1).css('right','0');
		$img.eq(2).css('left','0');
		$currentImg.css('left','235px');
		$currentImg.css('botom','0');
		$currentImg.css('text-align','center');
		$currentImg.css('z-index','4');

    $img.eq(1).css('cursor :','pointer');
    $img.eq(2).css('cursor :','pointer');
    $img.eq(0).css('cursor :','default');


  // console.log($img1);
// on cache les images

$currentImg.css('display', 'block'); // on affiche seulement l'image courante


//modification order des images

/////////////////////////Clique previous
$('p img').click(function(e){ 
  var photoClique=$(e.currentTarget).position();
 
console.log(photoClique)
if(photoClique.left===0|| photoClique.left===-2){


  var positionImg =$('#carrousel img').position();

   //  console.log(positionImg.left);
  
	if(positionImg.left===0 || positionImg.left==235 || positionImg.left===500 )
	{
	 
  
     
     switch (positionImg.left)
     {
     case 235:
        $img1 =$img.eq(2);
        $img2 =$img.eq(1);
        $img0 =$img.eq(0);

        break;

       case 0:
        $img1 =$img.eq(0);
        $img2 =$img.eq(2);
        $img0 =$img.eq(1);
        break;

        case 500:
        $img1 =$img.eq(1);
    	$img2=$img.eq(0);
   		$img0=$img.eq(2);
        break;
  	}
     

      $img1.animate({'left':'+=500'}, 1500);
    $img2.animate({ 'height': '+=30', 'width': '+=30','left':'-=265','top':'+=15' }, 1500);
   $img1.css('z-index','2');
   $img0.css('z-index','3');
   $img2.css('z-index','4');
  
     $img0.animate({ 'height': '-=30', 'width': '-=30','left':'-=235','top':'-=15' }, 1500);
     //console.log(positionImg.left);

  }
  


}
if (photoClique.left===498 || photoClique.left===500){



    var positionImg =$('#carrousel img').position();
    //console.log(positionImg.left);
  if(positionImg.left===0 || positionImg.left===235 || positionImg.left===500 )
  {//console.log(positionImg.left);

    switch (positionImg.left)
     {
     case 235:
        $img1 =$img.eq(2);
        $img2 =$img.eq(1);
        $img0 =$img.eq(0);

        break;

       case 0:
        $img1 =$img.eq(0);
        $img2 =$img.eq(2);
        $img0 =$img.eq(1);
        break;

        case 500:
        $img1 =$img.eq(1);
      $img2=$img.eq(0);
      $img0=$img.eq(2);
        break;
     }
console.log($img0);

    $img2.animate({'left':'-=500'}, 1500);
    $img1.animate({ 'height': '+=30', 'width': '+=30','left':'+=235','top':'+=15' }, 1500);
   $img2.css('z-index','2');
   $img0.css('z-index','3');
   $img1.css('z-index','4');
  
     $img0.animate({ 'height': '-=30', 'width': '-=30','left':'+=265','top':'-=15' }, 1500);
  }
}
});
});

  
    

