let listaDeParticipantes = ["Pedro", "Bruno", "Lucas", "Thayna", "Vivian", "Jean", "Aline", "Tiago", "Felipe", "Leonardo", "João", "Flavia"]

console.log(listaDeParticipantes)

if (listaDeParticipantes.length <= 100) {
    console.log("Vagas disponíveis para cadastro")
} else {
    console.log("Limite de cadastro atingido")
}

const dataEvento = 2022

let dataAtual = 2021


if (dataAtual < dataEvento) {
    console.log("Data válida para cadastro")
} else {
    console.log("Data inválida")
}

const idadeLimite = 18

let  idade = 25

if (idade > idadeLimite) {
    console.log("Cadastro realizado com sucesso")
} else {
    console.log("Idade inválida")
}
