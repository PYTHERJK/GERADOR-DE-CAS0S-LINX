const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const cnpj = evento.target.elements['cnpj']

    const existe = itens.find(elemento => elemento.nome === nome.value)

    const itemAtual = {
        "cnpj": cnpj.value
    }

    if (existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    cnpj.value = ""

})

// CRIAR ELEMENTO NA PÁGINA

function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    novoItem.innerHTML += `ABERTURA DO CASO` +
        `<br><br> LinxPOS Manager - Notas Fiscais - Notas pendentes de reprocessamento<br>` +
        `<br><br>Nome: Edgar ` + 
        `<br><br>CNPJ: ` + item.cnpj +
        `<br><br>Descrição: Ao acessar o módulo Notas Fiscais, foram identificadas notas pendentes de reprocessamento. 
        <br><br>Mensagem de erro: Não Há <br>  
    <br>Ambiente: Linx POS<br><br>
    =================================================
    <br>
    <br>FINALIZAÇÃO DO CASO 
    <br><br>Validado Por: ` + 
        `<br>Meio de contato: Monitoria` +
        `<br>Causa: A pendência ocorre, pois o sistema ao enviar as notas para a Sefaz, não conseguiu obter um retorno. 
        <br>Solução: Para aprovação da Notas Fiscais pendentes, execute os passos a seguir:
        <br> Acesse o LinxPOS Manager > Gerencial > Notas Fiscais;
        <br> Abra a nota rejeitada e clique na aba Nota fiscal eletrônica:
        <br> Clique na aba log para consultar o motivo da pendência:
        <br> Clique no botão Ok para a nota ser reenviada para autorização:
    <br> NPS: Estou muito feliz em concluir mais um chamado,
    e ter resolvido o seu incidente! Mas e você
    ficou satisfeito com meu atendimento? Assim que o chamado for finalizado
    chegará em seu e-mail uma pesquisa para avaliar meu atendimento :-)`

    novoItem.appendChild(botaoDeleta(item.id))
    console.log(item.nome)
    lista.appendChild(novoItem)
    navigator.clipboard.writeText(`Nome: Edgar`  +
        `\n\nCNPJ: ` + item.cnpj +
        `\n\nDescrição: Ao acessar o módulo Notas Fiscais, foram identificadas notas pendentes de reprocessamento. ` + 
        `\n\nMensagem de erro: Não Há\n 
Ambiente: LinxPOS Manager`);
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "DELETAR"

    elementoBotao.addEventListener("click", function () {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}
















