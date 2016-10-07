<?php
session_start();

if (isset($_SESSION['login']))  //Redirection si pas loggé
{
?>
  <!DOCTYPE html>

  <head>
  	<meta charset="utf-8">
  	<link rel="stylesheet" type="text/css" href="home.css">
    <title>home</title>
   
  </head>
  <body>

<?php include("header.php"); ?>

  <?php 


  //Affichage des photos
  $dir = 'photos/*.{jpg,jpeg,gif,png}';
  $files = glob($dir,GLOB_BRACE);
  $dirmin ='tmp/Thumb/*.{jpg,jpeg,gif,png}';
  $filesmin =glob($dirmin,GLOB_BRACE);
  $imgmin=false;
  $i=0;
  $nbr_photo_par_ligne=3;
  $nbr_photo=NULL;
  $limit=NULL;
  $nbr_ligne=NULL;
  $name_image=NULL;

  echo 'Listing des images du repertoire miniatures <br />';
  foreach($files as $image)//recupération du nombre de photo
  {
    $nbr_photo++;
  }

  if ($nbr_photo % $nbr_photo_par_ligne !=0)
  {
    $limit=($nbr_photo/$nbr_photo_par_ligne)+1;

  }


  foreach($files as $image) // Affichage des photos en ligne de 4
  { 
     $f= $image;
     $name_image=str_replace("photos/","",$f);
     
        if ($i==0 ) // Délimite les lignes
        {
        $nbr_ligne++;
            echo '<div class="block-ligne">';//block ligne
      
        }
     //echo $f.'      '.$name_image.'<br />'; //listing des fichiers
        
          # code...
        // verification que le thumb n'existe pas
       /* foreach ($filesmin as $imagemin)
       {
          # code...
          $fmin =$imagemin;
          if($name_image == str_replace("tmp/Thumb/","",$fmin))
          {
            $imgmin=true;
          }

        }
        
        if ($imgmin) {
        

          $source = imagecreatefromjpeg($f); // La photo est la source
          $destination = imagecreatetruecolor(700, 500); // On crée la miniature vide

          // Les fonctions imagesx et imagesy renvoient la largeur et la hauteur d'une image
          $largeur_source = imagesx($source);
          $hauteur_source = imagesy($source);
          $largeur_destination = imagesx($destination);
          $hauteur_destination = imagesy($destination);

          // On crée la miniature
          imagecopyresampled($destination, $source, 0, 0, 0, 0, $largeur_destination, $hauteur_destination, $largeur_source, $hauteur_source);

          // On enregistre la miniature sous le nom "mini_couchersoleil.jpg"
          imagejpeg($destination, 'tmp/overlay/'.$name_image);
          $imgmin=false;
       }*/

      echo '<p><a href="tmp/overlay/'.$name_image.'" title="Afficher image originale" name="lien_overlay"><img id="clickme" src="tmp/Thumb/'.$name_image.'" onclick=""> </a></p>'; //Affiche la photo

        if ($i==$nbr_photo_par_ligne || (isset($limit) && $nbr_ligne==$limit))//Ferme le div apres le nombre de photos souhaités sur une ligne
        {
        
              echo '</div>';
          $first=false;
          $i=-1;//permet de commencer l'incrémentation lineaire à 1
        }
       $i++;//Incrémentation du nombre de photo sur une ligne
  }

}

else
{
   header('Location:Index.php');
        exit();
}
?>

 <div id="overlay"></div>
  <script type="text/javascript" src="js/zoom.js"></script> 

</body>
<footer>
<a href='http://fr.freepik.com/vecteurs-libre/invitation-de-mariage-de-style-boho_910222.htm' class="petit">Designed by Freepik</a>