
function agrandar(par){
    var sector=par;
    document.getElementById(sector).style.fontSize="17px";
}    
function achicar(par){
    var sector=par;
    document.getElementById(sector).style.fontSize="small";   
}

document.getElementById('boton').onclick = function () {
    document.getElementById("vacio").innerHTML = "Soluciones tecnológicas, Paraná <br> tel  0343 4353510 <br> <br>Dirección General de Informática de Entre Ríos <br> 0343 4272815";
}

function sacarRef (){
    document.getElementById("vacio").innerHTML = ""
}








