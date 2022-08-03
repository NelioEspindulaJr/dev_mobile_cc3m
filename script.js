
//1)
// fazer uma funcao que gera  e retorna um vetor de objetos
// os objetos tem 3 atributos: nome, idade, cpf
// retronar 5 objetos

var personsGroup = []
var personCount = 0 // SERVE COMO ÍNDICE DE REFERÊNCIA TANTO PARA O PRÓPRIO ARRAY QUANTO PARA CRIAÇÃO DE ELEMENTOS

var wordsGroup = []

function pessoa() {

    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let cpf = document.getElementById('cpf').value

    let person = [{
        name: name,
        age: age,
        cpf: cpf,
    }]

    personsGroup.push(person)

    //LIMPAR INPUTS DEPOIS DE ENVIAR DADOS PRO ARRAY personsGroup[]
    const inputs = document.querySelectorAll('#name, #age, #cpf');
    inputs.forEach(input => {
        input.value = '';
    })

    // A CADA VEZ QUE CHAMAR A FUNÇÃO, CRIA UM <p>
    // INSERE ELE NA PÁGINA E EXIBE AS INFORMAÇÕES
    // DA PESSOA CADASTRADA NA VEZ.

    let htmlPeople = document.getElementById('result-cont')
    let xPerson = document.createElement('p')
    xPerson.setAttribute('id', 'result' + personCount)

    htmlPeople.appendChild(xPerson)

    result = document.getElementById('result' + personCount)
    result.innerHTML = `<strong>Nome:</strong> ${personsGroup[personCount].at().name}, <strong>Idade:</strong> ${personsGroup[personCount].at().age}, <strong>Cpf:</strong> ${personsGroup[personCount].at().cpf}.`
    personCount++
}

// EXTRA //
// by: youtube.com/watch?v=bCxTRGXJhJc
function cpfMask() {
    let cpf = document.getElementById('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}

//2)
// armazenar os objetos em uma varivel, vetor.

/* VOU CONTAR O EXERCICIO DOIS COMO JÁ FEITO NAS OUTRAS QUESTÕES E TAMBÉM NO REPLIT USANDO NODE.JS */

//3)
// Fazer uma arrow function que recebe o vetor de objetos
// e retorna este vetor ordenado. Ordenar pelo atributo nome.

document.getElementById('words').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        let wordInput = document.getElementById('words').value
        wordsGroup.push(wordInput)

        const inputs = document.querySelectorAll('#words');
        inputs.forEach(input => {
            input.value = '';
        })
    }
})

let wordSorter = (arr) => {
    let sortedWords = arr.sort()

    let sortedWordsArray = document.getElementById('word-cont')
    let wordsArray = document.createElement('p')
    wordsArray.setAttribute('id', 'sortWords')

    sortedWordsArray.appendChild(wordsArray)

    result = document.getElementById('sortWords')
    result.innerHTML = `Palavras organizadas: ${sortedWords.join(", ")}`


    return sortedWords;
}


//4)
//armazenar o retorno da arrow function em uma outra variavel
//e exibir seu conteudo.

//5) fazer uma funcao que ordena por qualquer atributo do objeto:
//string ou numero.
