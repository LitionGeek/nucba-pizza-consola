let ingPizza=["harina", "queso", "aceitunas", "oregano", "aceite", "sal", "jamon", "rucula", "levadura", "cebolla" ] 
let pares=[]
let impares=[]

Function (ingPizza.length>0);{  
    for(let i = 0; i<ingPizza.length; i++){
        if(ingPizza[i].length%2===0){
            pares.push(ingPizza[i])
        }else{
            impares.push(ingPizza[i])
        }
}
}
console.log("Los ingredientes pares son:", pares)
console.log("Los ingredientes impares son:", impares)