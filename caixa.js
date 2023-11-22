const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")
const resp3 = document.querySelector("#outresp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)

    if (saque % 10 != 0) {                         //  se  resultado da divisão for difenrete de zero
       alert("Valor invalido pra notas disponiveis(R$10, 50, 100")   
       frm.inSaque.focus()
       return
    }                       
     
    const notasCem = Math.floor(saque/100)      //calcula quantas notas de 100
    let resto = saque % 100                     //quanto sobra para pagar
    const notasCinquenta = Math.floor(resto/50)  //calcula quantas notas de 50
    resto = resto % 50                          //quanto ainda sobra
    const notasDez = Math.floor(resto/10)       //calcula quantas notas de 10

    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
       }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
       }
    if (notaDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
       }
 })

 frm.addEventListener ("reset", (e) => {
    resp1.innerText = " "  //limpa o conteúdo de h3
    resp2.innerText = " "  //limpa o conteúdo de h3
    resp3.innerText = " "  //limpa o conteúdo de h3
 })