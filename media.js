const fprm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
//cria um ouvinte
form.addEdventListener("submit",(e)=>{e.preventDefault()
//evitar envio do form
const nome = form.inNome.value
//obtém o nome
const nota1 = Number(form.inNote1.value)
//obtém a primeira nota
const nota2 = Number(form.inNote2.value)
//obtém segunda nota
const media = (nota1 + nota2)/2
//média das notas
resp1.innerText = `Média das Notas ${media.toFixed(2)}`
//criar as condições
if(media >= 7){
resp2.innerText = `Parabéns ${nome}! Você foi aprovado(A)`
resp2.style.color = "blue"
} else if (media >=4) {
    resp2.innerText = `Atenção ${nome}! Você está de exame`
    resp2.style.color = "green"
} else{
    resp2.innerText = `Ops ${nome}! Você foi reprovado(a)`
    resp2.style.color = "red"
}
})
