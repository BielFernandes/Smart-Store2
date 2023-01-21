const barra = document.querySelectorAll(".barra")
const imagem = document.querySelectorAll(".imagem")
let imagemAtual = 0;
let barrinhaAtual = 0;

const primeiro = document.querySelector(".primeiro")
const segundo = document.querySelector(".segundo")
const terceiro = document.querySelector(".terceiro")
const quarto = document.querySelector(".quarto")

const btnAvancarNovidades = document.querySelector(".botao-avancar")
const card = document.querySelectorAll(".card")


function carrossel(){
    if(imagemAtual === 3 && barrinhaAtual === 3){
        imagemAtual = -1;
        barrinhaAtual = -1;
    }

    const imagemAberta = document.querySelector(".selecionado")
    imagemAberta.classList.remove("selecionado")
    const barrinhaSelecionada = document.querySelector(".selecionado-barra")
    barrinhaSelecionada.classList.remove("selecionado-barra")

    imagemAtual++;
    imagem[imagemAtual].classList.add("selecionado")
    barrinhaAtual++;
    barra[barrinhaAtual].classList.add("selecionado-barra")
}

setInterval(() => {
    carrossel()
}, 3000);


function clicar() {
    primeiro.addEventListener("click", function(){
        imagem.forEach((item, index) => {
            item.classList.remove("selecionado")
            barra[index].classList.remove("selecionado-barra")
            barra[0].classList.add("selecionado-barra")
        });
        imagem[0].classList.add("selecionado")
    })    

    segundo.addEventListener("click", function(){
    imagem.forEach((item, index) => {
        item.classList.remove("selecionado")
        barra[index].classList.remove("selecionado-barra")
        barra[1].classList.add("selecionado-barra")
    });
    imagem[1].classList.add("selecionado")
})

    terceiro.addEventListener("click", function(){
        imagem.forEach((item, index) => {
            item.classList.remove("selecionado")
            barra[index].classList.remove("selecionado-barra")
            barra[2].classList.add("selecionado-barra")
        });
        imagem[2].classList.add("selecionado")
    })

    quarto.addEventListener("click", function(){
    imagem.forEach((item, index) => {
        item.classList.remove("selecionado")
        barra[index].classList.remove("selecionado-barra")
        barra[3].classList.add("selecionado-barra")
    });
    imagem[3].classList.add("selecionado")
})
}

clicar()

const controls = document.querySelectorAll(".control")
let currentItem = 3;
const items = document.querySelectorAll(".card")
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left")
        
        if(isLeft){
            currentItem -= 4
        }else {
            currentItem += 4
        }

        if(currentItem > maxItems){
            currentItem = 4
        }

        if(currentItem < 0){
            currentItem = 0
        }

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        })
    })
});


const buttons = document.querySelectorAll(".botoes")
const listaItens = document.querySelectorAll(".container-itens-blackfriday")
let itemAtual = 4;
const totalItens = listaItens.length

buttons.forEach(botao => {
    botao.addEventListener("click", () => {
        const isLeft = botao.classList.contains("arrow-left")

        if(isLeft){
            itemAtual -= 9
        }else {
            itemAtual += 9
        }

        if(itemAtual > totalItens){
            itemAtual = 7
        }

        if(itemAtual < 0){
            itemAtual = 0
        }

        listaItens[itemAtual].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        })
    })
});