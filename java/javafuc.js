
/*var cal ={
    teclas:document.querySelectorAll("#calcular li"),
    operacion:document.querySelector("#operaciones"),
    accion:null,
    digito:null,
    cantisignos:0,
    cantidecimal:false,
    resultado:false
}
var me={
    inicio:function(){
        for(var i=0; i<cal.teclas.length; i++){
            cal.teclas[i].addEventListener("click",me.oprimirteclas);
        }
    },
    oprimirteclas:function(teclas) 
    {
        cal.accion = teclas.getAttribute("class");
        cal.digito = teclas.target.innerHTML;
        me.calculadora(cal.accion,cal.digito);
    },
    calculadora:function(accion,digito)
    {
        switch(accion){
            case"numero":{
            
                console.log("numero")
                cal.cantisignos = 0;
                if(cal.operacion.innerHTML == "0"){
                    cal.operacion.innerHTML = digito;
                }
                else{
                    if(cal.resultado){
                        cal.resultado=false;
                        cal.resultado.innerHTML = digito;
                    }
                    else{
                        cal.operacion.innerHTML += digito
                    }
                }
            }
            break;
            case "operador":
            {   console.log("operador")
                cal.cantisignos++;
                if(cal.cantisignos ==1)
                {
                    if(cal.operacion.innerHTML == 0)
                    {
                        cal.operacion.innerHTML = 0;
                    }else
                    {
                       
                     cal.operacion.innerHTML += digito;
                        cal.resultado = false;
                        cal.cantidecimal=false;

                    }
                }
            }
            break;

            case "decimal":
            if (!cal.cantidecimal && cal.cantisignos!=1)
            {
                cal.operacion.innerHTML += digito;
                cal.cantidecimal = true;
                cal.resultado = false;
            }

            break;
        }
    }
}
me.inicio()*/
const pantalla = document.querySelector("#operaciones");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        const botonapretado = boton.textContent;

        pantalla.textContent = botonapretado;
    })
})



