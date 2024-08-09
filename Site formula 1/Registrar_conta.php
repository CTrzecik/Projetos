<?php
//verificar conexão com o Banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$database = "user";

$conn = new mysqli($servername,$username,$password, $database);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
} else{
    echo"<p>connected successfully</p>";
}
//verificar conexão com o Banco de dados

//Fazer o registro
if($_SERVER["REQUEST_METHOD"] == "POST"){
    
if(isset($_POST['user']) && isset($_POST['password'])){
    $user = $_POST['user'];
    $password = $_POST['password'];
    
if ($_POST['action'] === 'Register') {
    $sql = "SELECT * FROM users where Username ='$user'";
    $result = $conn->query($sql);
        if($result->num_rows > 0) echo "User already exists";
        else{
            $sql = "INSERT INTO users (Username, Password) VALUES ('$user', '$password')";
            if($conn->query($sql) === TRUE) echo "New user registered sucessfully";
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
    <link rel="stylesheet" href="registrar (1).css">
    <title>Registrar</title>
</head>
<body>
    
    <main id="blur">
        <form method="POST" action="login.php" onsubmit=" return validarSenha()">
            <h1>Registrar Conta</h1>
            <input type="text" id="usuario" name="usuario" placeholder="Usuário:">
            <input type="password" id="senha" name="senha" placeholder="Senha:">
            <input type="password" id="senha2" name="senha2" placeholder="Confirmar senha:">
            <input type="submit" value="Registrar" action="registrar" name="registrar" id="registrar">
            <p id="login"> <a href="Login.html">Caso tenha conta, clique aqui</a></p>
          </form>
    </main>

<script>
    var botao1 = document.getElementById("registrar");
    var inp1 = document.getElementById("usuario");
    var inp2 = document.getElementById("senha");
    var inp3 = document.getElementById("senha2");

botao1.addEventListener('click', function(){
    validarUsu();
})
function validarUsu(){
    var usuario = inp1.value.trim();
        if(usuario != ''){
            validarSenha();
         }else{
            alert("Preencha o nome")
            }
}
function validarSenha(){
    var regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var senha = inp2.value;
    var senha2 = inp3.value;
    if(senha.trim() != ''){
        if(regex.test(senha)){
            if (senha === senha2) {
                window.open("Pagina_inicial.html");
            }else{
                alert("Confirme a senha!!");
            }
            
        }else{
            alert("A senha deve possuir um minimo de 8 numeros, uma letra maiúscula e uma minúscula");
        }
    }else{
        alert("Preencha a senha!!!");
    }
}
    
    </script>

</body>
</html>