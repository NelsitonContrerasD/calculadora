
const pantalla = document.querySelector(".operaciones");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonapretado = boton.textContent;
        if(pantalla.textContent = pantalla.textContent.slice(0,13)){
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }
        if(boton.id === "borar" ){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if(boton.id === "raiz"){  
            pantalla.textContent = Math.sqrt  (pantalla.textContent);
            return;
        }
        if(boton.id === "igual"){
            if(pantalla.textContent.includes("^")){
            let x = pantalla.textContent.replace("^", " ** ");
            pantalla.textContent = x;
            pantalla.textContent = eval(pantalla.textContent)
            return;
            }
            else if(pantalla.textContent.includes("%")){
                if(boton.id === "igual"){
                    let x = pantalla.textContent.replace("%", "/100 * ")
                    pantalla.textContent = x
                    pantalla.textContent = eval(pantalla.textContent) 
                    return;
                }
            }
            else{
                try{
                pantalla.textContent = eval(pantalla.textContent);
                }
                catch{
                pantalla.textContent = "Error!"
                }
                return;
            } 
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonapretado;
        }else{
            pantalla.textContent += botonapretado;
        }
        
    }
    })
})



