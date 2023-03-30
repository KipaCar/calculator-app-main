




let tipAmount;
let total;


//Salta error cuando indica 0 persona
let personaInput=document.getElementById("persona");
let spanError=document.getElementsByClassName("container__label__error");

personaInput.addEventListener("change",()=>{
    if(personaInput.value==="0"){
        document.getElementsByClassName("container__label__error")[0].style.display="block" ;
        personaInput.style.border=" 1px solid red";
    } else{
        document.getElementsByClassName("container__label__error")[0].style.display="none" ;
        personaInput.style.border="none";
    }
})



//Resetear los datos
let resetearDatos=document.getElementById("reset");

resetearDatos.addEventListener("click", ()=>{
   location.reload();
    
})

let inputTotalFactura=document.getElementById("total-factura");
let mostrarTipAmount=document.getElementById("mostrar-tip-amount");
let mostrarTotal=document.getElementById("mostrar-total");
let botonesPorcentaje=document.querySelector(".container__button");


// for (let i = 0; i < botonesPorcentaje.length; i++) {
//     botonesPorcentaje[i].addEventListener("click", () => {
//         mostrarTipAmount.innerHTML = (((botonesPorcentaje[i].innerHTML.replace('%', '') * inputTotalFactura.value) / 100) / personaInput.value).toFixed(1);
//         mostrarTotal.innerHTML = ((parseInt(inputTotalFactura.value) / personaInput.value) + (((botonesPorcentaje[i].innerHTML.replace('%', '') * inputTotalFactura.value) / 100) / personaInput.value)).toFixed(1);
//             console.log(mo)
//     })
// }


//calcular el total de propina
let calcular;
let totalPerson;
botonesPorcentaje.addEventListener("click",(evento)=>{
    calcular=(inputTotalFactura.value * 5) /100;
    mostrarTipAmount.innerHTML=(calcular/personaInput.value).toFixed(2);
    
    totalPerson=((inputTotalFactura.value/personaInput.value) + (calcular/personaInput.value)).toFixed(2);
    mostrarTotal.innerHTML=totalPerson

});



    // clickPorcentaje(evento);


// function clickPorcentaje(evento){
    
        
//         // tipAmount=totalCuenta.value/totalDividirPersonas.value;
//         // mostrarTotal=tipAmount;
//         // console.log(tipAmount);
//         console.log(totalCuenta)
    
   

// }

//Por un lado está el total de la cuenta en bill
//En tip amount está la propina de cada uno
//total persona el total de la cuenta y propina
