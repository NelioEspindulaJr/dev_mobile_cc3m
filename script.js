
//1)
// fazer uma funcao que gera  e retorna um vetor de objetos
// os objetos tem 3 atributos: nome, idade, cpf
// retronar 5 objetos

var personsGroup = []

function pessoa() {

    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let cpf = document.getElementById('cpf').value

    let person = [{
        nome: name,
        idade: age,
        documento: cpf,
    }]

    personsGroup.push(person)

    //LIMPAR INPUTS DEPOIS DE ENVIAR DADOS PRO ARRAY personsGroup[]
    const inputs = document.querySelectorAll('#name, #age, #cpf');
    inputs.forEach(input => {
        input.value = '';
    })

}