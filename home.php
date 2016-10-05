<!DOCTYPE html>

<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="home.css">
</head>
<?php 
$dir = 'photos/*.{jpg,jpeg,gif,png}';
$files = glob($dir,GLOB_BRACE);
$i=0;
$first=true;
$nbr_photo=3;
echo 'Listing des images du repertoire miniatures <br />';
foreach($files as $image)
{ 
   $f= $image;
   
    if ($i==0 )
    {
   
        echo '<div class="block-ligne">';
  
    }
   //echo $f.'<br />';

   echo '<p><img src="'.$f.'"/></p>';

    if ($i==$nbr_photo-1)
    {
    
        echo '</div>';
    $first=false;
    $i=-1;
    }
     $i=$i+1;
}

?>