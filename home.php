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
  $i=0;
  $nbr_photo_par_ligne=3;
  $nbr_photo=NULL;
  $limit=NULL;
  $nbr_ligne=NULL;

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
     
        if ($i==0 ) // Délimite les lignes
        {
        $nbr_ligne++;
            echo '<div class="block-ligne">';//block ligne
      
        }
     //echo $f.'<br />'; //listing des fichiers

     echo '<p><img src="'.$f.'"/></p>'; //Affiche la photo

        if ($i==$nbr_photo_par_ligne || $nbr_ligne==$limit)//Ferme le div apres le nombre de photos souhaités sur une ligne
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
</body>
<footer>
<a href='http://fr.freepik.com/vecteurs-libre/invitation-de-mariage-de-style-boho_910222.htm' class="petit">Designed by Freepik</a>