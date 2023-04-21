
var cal ={
    teclas:document.querySelectorAll("#numero"),
    operaciones:document.querySelector("#operaciones"),
    accion:null,
    digito:null,
    cantisignos:0,
    cantidecimal:false,
    resultado:false
}
var me={
    inicio:function(){
        for(var i=0;i<cal.teclas.length;i++){
            cal.teclas[i].addEventListener("click",me.oprimirteclas);
        }
    },
    oprimirteclas:function(teclas) 
    {
        cal.accion = teclas.getAtribute("class");
        cal.digito = teclas.target.innerHTML;
        me.calculadora(cal.accion,cal.digito);
    },
    calculadora:function(accion,digito)
    {
        switch(accion){
            case"numero":
            cal.cantisignos = 0;
            if(cal.operaciones.innerHTML == "0"){
                cal.operaciones.innerHTML = digito;
            }
            else{
                if(cal.resultado){
                    cal.resultado=false;
                    cal.resultado.innerHTML = digito;
                }
                else{
                    cal.operaciones.innerHTML += digito
                }
            }break;
        }
    }
}
me.inicio()
