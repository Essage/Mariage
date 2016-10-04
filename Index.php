<!DOCTYPE html>

<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<div id="back-picture">
		<img src="pictures/background-1.jpg" alt="error">
	<form action="login.php" method="post">
		<div id="header-input">
			<h1>Sign In</h1>
		</div>
		<fieldset>

				<ul id="bloc-input">
					<li>
						<label for="login" id="label-login"></label>
						<input type="text" name="login" type="text" id="login" placeholder="login"><br />
					</li>
					<li>
						<label for="mdp" id="label-password"></label>
						<input type="text" name="mdp" type="password"  id="mdp" placeholder="Mot de passe"><br />
					</li>	
					<li>
						<input type ="submit" id="submit">
					</li>
				 </ul>

		</fieldset>

	</form>
	</div>
</body>