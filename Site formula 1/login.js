var botao1 = document.getElementById("login");
var botao2 = document.getElementById("registrar");
var inp1 = document.getElementById("user");
var inp2 = document.getElementById("password");

botao2.addEventListener('click', function(){
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

    if(senha.trim() != ''){
        if(regex.test(senha)){
            return true;
        }else{
            alert("A senha deve possuir um minimo de 8 numeros, uma letra maiúscula e uma minúscula");
        }
    }else{
        alert("Preencha a senha!!!");
    }
}
    