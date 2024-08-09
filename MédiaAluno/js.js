

//primeira parte
    var inpDisc = document.getElementById("inpDisc");
    var inpMeta = document.getElementById("inpMeta");
    var BotaoEntrar = document.getElementById("entrar");
    var visorDisc = document.getElementById("visorDisc");
    var visorMeta = document.getElementById("visorMeta");

    BotaoEntrar.addEventListener('click', function(){
        verificarDisc();
    });
    function verificarDisc(){
            var inp1 = inpDisc.value;
            if(inp1.trim() != ''){
                visorDisc.textContent = inp1 + ":";
                verificarMeta();
            }else{
                alert("Prencha o nome da Disciplina");
            }
        }
    function verificarMeta(){
        var meta = inpMeta.value;
        if(meta.trim() != ''){
            if(meta > 0 && meta <= 20){
                visorMeta.textContent = "Meta: " + meta;
                esconder();
            }else{
                alert("Preencha a Meta com um numero entre 0 e 20!");
            }
            
        }else{
            alert("Preencha a Meta");
        }
    }
    
    function esconder(){
        var sec1 = document.getElementById("section1");
        sec1.style.display = "none";
        var sec2 = document.getElementById("section2");
        sec2.style.display = "block";
        
}
   
//primeira parte
//segunda parte
    var Botao1 = document.getElementById("addBotao");
    var Botao2 = document.getElementById("cclBotao");
    

    Botao1.addEventListener('click', function(){
        verifNota();
    });
    Botao2.addEventListener('click', function(){
        calcularMedia();
    });

    var visor = document.getElementById("visorMedia");
    var visorNotas = document.getElementById("visorNotas");
    var notas = [];

function verifNota(){
    var notaInp = document.getElementById("addNota");
    var notaInp2 = notaInp.value;
    if(notaInp2.trim() != ''){
        if(notaInp2 >= 0 && notaInp2 <= 20){
        lerNotas();
        }else{
            alert("Introduza uma Nota válida!!(0 a 20)")
        }
    }else{
        alert("Preencha o campo Nota!!");
    }
}
function lerNotas(){
    var notaInput = document.getElementById("addNota");  
    var nota = parseFloat(notaInput.value);  
    notas.push(nota);
    notaInput.value = '';
    mostrarNota();
}
function mostrarNota(){
    visorNotas.innerHTML = "";
    notas.forEach(function(notas){
        var li = document.createElement("li");
        li.textContent = notas;
        visorNotas.appendChild(li);
    });
}
function calcularMedia(){
    visor.style.display = "block";
    var soma = 0;
    for(var i = 0; i < notas.length; i++){
      soma += notas[i];
    }
    var media = soma/notas.length;
    if(){
        visor.textContent = media;
    }else{
        
    }
    
    
}

