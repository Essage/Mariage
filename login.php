<?php
    if (isset($_POST['login']) AND $_POST['login']=="coucou") //Verification login non vide
    {
        # code...
        if (isset($_POST['mdp']) AND $_POST['mdp'] ==  "kangourou") // Si le mot de passe est bon
        {
        // On affiche les codes
        header('Location:home.php');
        exit();
            
        }
        else // Sinon, on affiche un message d'erreur
        {
            echo '<p>Mot de passe incorrect</p>';
        }
        
    }
    else
    {
        echo "<p> login incorect<p>";
    }
?>  
            
    
