
  <!DOCTYPE html>

  <head>
	
  	<meta charset="utf-8">
  	<link rel="stylesheet" type="text/css" href="loginpage.css">
    <title>home</title>
   
  </head>
  <body>
<img src="pictures/test1.jpg" id="background">
	<!--<header>
		<h1>Raphaël et Patricia</h1>
	</header> -->
	<form action="login.php" method="post">
		<div id="header-input">
			<h1>Se connecter</h1>
		</div>
		<fieldset>

				<ul id="bloc-input">
					<li>
						<label for="login" id="label-login"></label>
						<input type="text" name="login" type="text" id="login" placeholder="Identifiant"><br />
					</li>
					<li>
						<label for="mdp" id="label-password"></label>
						<input type="password" name="mdp" type="password"  id="mdp" placeholder="Mot de passe"><br />
					</li>	
					<li>
						<input type ="submit" id="submit">
					</li>
				 </ul>

		</fieldset>

	</form>

	<div id="carrousel">

			<p id='image0'><img src="tmp/Slide/Photo du 15-05-2015 1.jpg"></p>
			<p id='image2'><img src="tmp/Slide/Photo du 15-05-2015 3.jpg"></p>
			<p id='image1'><img src="tmp/Slide/Photo du 15-05-2015 2.jpg" ></p>
		
	</div>
	<br>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">></script>
	<script src="js/slide.js"></script>
</body>
