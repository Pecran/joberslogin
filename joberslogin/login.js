function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    const form = document.getElementById('form');

    if (username !== "tesaa@jobers.fr" && password !=="tesaa2022")
    {
       
        alert("Mot de passe ou login incorrect");
       
        return false;
    }
    else{
        return true;
    }

}