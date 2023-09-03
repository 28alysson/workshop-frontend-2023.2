let inicio = window.document.getElementById("inicio")
let galeria = window.document.getElementById("galeria")
let elemento1 = window.document.getElementById("elemento1")
let elemento2 = window.document.getElementById("elemento2")

function entrar(){
    inicio.style.color = "black"
    inicio.style.backgroundColor = "white"
    }


function sair(){
    inicio.style.color =  "white"
    inicio.style.backgroundColor = "black"
}
function entrar1(){
    
    galeria.style.color = "black"
    galeria.style.backgroundColor = "white"
    }
function sair1(){
    galeria.style.color =  "white"
    galeria.style.backgroundColor = "black"
}
function entrar2(){
    elemento1.style.background = "white"
    elemento1.style.color = "black"
}
function sair2(){
    elemento1.style.background =""
    elemento1.style.color = "white"
}
function entrar3(){
    elemento2.style.background = "white"
    elemento2.style.color = "black"
}
function sair3(){
    elemento2.style.background =""
    elemento2.style.color = "white"
}
function entrar4(){
    elemento3.style.background = "white"
    elemento3.style.color = "black"
}
function sair4(){
    elemento3.style.background =""
    elemento3.style.color = "white"
}
function entrar5(){
    elemento4.style.background = "white"
    elemento4.style.color = "black"
}
function sair5(){
    elemento4.style.background =""
    elemento4.style.color = "white"
}
function entrar6(){
    elemento5.style.background = "white"
    elemento5.style.color = "black"
}
function sair6(){
    elemento5.style.background =""
    elemento5.style.color = "white"
}
function entrar7(){
    elemento6.style.background = "white"
    elemento6.style.color = "black"
}
function sair7(){
    elemento6.style.background =""
    elemento6.style.color = "white"
}

fetch('https://swapi.dev/api/people/').then(resposta=>{
    return resposta.json()
}).then(corpo=>{
    console.log(corpo)
    document.getElementById("span").innerHTML=corpo.results

    
});


