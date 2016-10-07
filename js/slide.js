$(document).ready(function(){
    
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i),// enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    $currentImg = $img.eq(i),
    $img1 =$img.eq(2),
    $img2=$img.eq(1),
    $img0=$img.eq(0);
    console.log(indexImg);

	for(a=1;a<3;a++)
	{
		$img.eq(a).css('height','120px');
		$img.eq(a).css('width','170px');
		$img.eq(a).css('top','0');
		$img.eq(a).css('z-index','2');
	};
		$img.eq(1).css('right','0');
		$img.eq(2).css('left','0');
		$currentImg.css('left','125px');
		$currentImg.css('botom','0');
		$currentImg.css('text-align','center');
		$currentImg.css('z-index','4');


	


// on cache les images

$currentImg.css('display', 'block'); // on affiche seulement l'image courante


$('.next').click(function(){ // image suivant
	
	var positionImg =$('#carrousel img').position();
	if(positionImg==125 || positionImg==0)
	{
	  $img1.animate({'left':'+=280'}, 1500);
	  $img2.animate({ 'height': '+=30', 'width': '+=30','left':'-=155','top':'+=15' }, 1500);
	 $img1.css('z-index','2');
	 $img0.css('z-index','3');
	 $img2.css('z-index','4');
	
     $img0.animate({ 'height': '-=30', 'width': '-=30','left':'-=125','top':'-=15' }, 1500);

     
     switch (positionImg.left)
     {
     case 125:
        $img1 =$img.eq(0);
        $img2 =$img.eq(2);
        $img0 =$img.eq(1);

        break;

       case 0:
        $img1 =$img.eq(1);
        $img2 =$img.eq(0);;
        $img0 =$img.eq(2)
        break;

        case 280:
        $img1 =$img.eq(2);
    	$img2=$img.eq(1);
   		$img0=$img.eq(0);
        break;
  	 }
  	}
  	 console.log(positionImg.left);

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }
});

});

