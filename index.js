

const mostrarIngrediente = (ingredietesImPares,ingredietesPares)=>{
    console.log("Ingredientes pares: ");
    ingredietesPares.forEach(ingrediente=>{
        console.log(ingrediente);
    })

    console.log("Ingredientes impares: ");
    ingredietesImPares.forEach(ingrediente=>{
        console.log(ingrediente);
    })
}

const recorrerIngredientes = () =>{
    let ingredientes= ["queso","tomate","oregano","harina","agua","levadura","aceitunas","jamon","anana","perejil"]
    let ingredietesPares= [];
    let ingredietesImPares=[];

   ingredientes.forEach(ingrediente=>{
       if(ingrediente.length% 2 ==0){
            ingredietesPares.push(ingrediente);
       }else{
            ingredietesImPares.push(ingrediente);
       }
   })
   mostrarIngrediente(ingredietesImPares,ingredietesPares);
    
}

window.onload = recorrerIngredientes();

