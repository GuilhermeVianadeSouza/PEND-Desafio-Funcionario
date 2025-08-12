'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

function mostrarFuncionario(){
    const retrato = document.getElementById('apresentacao')

    funcionarios.forEach(func => {
        const container = document.createElement('div')
        container.classList.add('funcionario')

        const imagens = document.createElement('img')
        imagens.src = func.imagem
        imagens.alt = func.nome

        const nome = document.createElement('h2')
        nome.textContent = func.nome

        const cargo = document.createElement('p')
        cargo.textContent = func.cargo

        container.appendChild(imagens)
        container.appendChild(nome)
        container.appendChild(cargo)

        retrato.appendChild(container)
    })
}

mostrarFuncionario()