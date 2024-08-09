<?php
//verificar ligação com o servidor
$servername = "localhost";
$username = "root";
$password = "";
$database = "site";

$conn = new mysqli($servername,$username,$password, $database);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
} else{
    //echo"<p>connected successfully</p>";
}


//Fazer login ou registro
if($_SERVER["REQUEST_METHOD"] == "POST"){
if(isset($_POST['user']) && isset($_POST['password'])){
$user = $_POST['user'];
$password = $_POST['password'];
//Fazer login
if($_POST['action'] === 'Login'){
    $sql = "SELECT * FROM usuarios WHERE Username ='$user' AND Password='$password'";
    $result = $conn->query($sql);
    if($result->num_rows > 0) header("Location: Pagina_inicial.html");
    else echo "<script>alert('Invalid username or password');</script>";
}
//Fazer registro
elseif ($_POST['action'] === 'Register') {
    $sql = "SELECT * FROM usuarios where Username ='$user'";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
    echo "<script>alert('usuario já existe')</script>";
}
    else{
    $sql = "INSERT INTO usuarios (Username, Password) VALUES ('$user', '$password')";
    if($conn->query($sql) === TRUE){
         header("Location: Pagina_inicial.html");
    }
    else echo ("Error: " . $sql . "<br>" . $conn->error);
}
}

}
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
<main id="blur">
    <form method="POST" action="login.php" onsubmit=" return validarSenha()">
        
        <h1 id="log">Login</h1>

        <input type="text" name="user" id="user" placeholder="Usuario:"><br>
        <input type="password" name="password" id="password" placeholder="Senha:"><br>
        <input type="submit" value="Login" value="Login" action="Login" name="action" id="login">
        <input type="submit" value = "Register" action="Register" name="action" id="registrar">

    </form> 
</main>


<script>
var botao1 = document.getElementById("login");
var botao2 = document.getElementById("registrar");
var inp1 = document.getElementById("user");
var inp2 = document.getElementById("password");

botao1.addEventListener('click', function(){
    validarUsu();
})
botao2.addEventListener('click', function(){
    validarUsu();
})
//verificar usuario
function validarUsu(){
    var usuario = inp1.value.trim();
        if(usuario != ''){
            validarSenha();
         }else{
            alert("Preencha o nome")
            return false;
            }
}
//verficar senha
function validarSenha(){
    var regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var senha = inp2.value;

    if(senha.trim() != ''){
        if(regex.test(senha)){
            return true;
        }else{
            alert("A senha deve possuir um minimo de 8 numeros, uma letra maiúscula e uma minúscula");
            return false;
        }
    }else{
        alert("Preencha a senha!!!");
        return false;
    }
}
    
    </script>
</body>
</html>