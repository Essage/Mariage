<!DOCTYPE html>

<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="home.css">
</head>

<?php 
$dir = 'photos/*.{jpg,jpeg,gif,png}';
$files = glob($dir,GLOB_BRACE);
  
echo 'Listing des images du repertoire miniatures <br />';
foreach($files as $image)
{ 
   $f= $image;
   //echo $f.'<br />';

   echo '<p><img src="'.$f.'"/></p>';
}

?>