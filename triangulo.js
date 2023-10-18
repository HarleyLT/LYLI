const form = document.querySelector("form")
const form = document.querySelector("#outResp")
const form = document.querySelector("outResp1")

//ouvinte
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(form.inladoA.value)
    const ladoB = Number(form.inladoB.value)
    const ladoC = Number(form.inladoC.value)

    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)){
        alert("Essa medidas não podem formar um triângulo.Um dos lados não pode ser maior que a soma dos outros dois.")
        form.inladoA.focus()
        form.inladoB.focus()
        form.inladoC.focus()
        return
    }

    resp.innerText = `lados podem formar um triângulo`

    if(ladoA == ladoB && ladoA == ladoC){                                    //três lados são iguais
        resp1.innerText = `Tipo: Equilátero`                                
    } else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){    //dpos lados são iguais
        resp1.innerText = `Tipo: Isóceles`
    } else{
        resp1.innerText = `Tipo: Escaleno`                                   //três lados diferentes
    }
})