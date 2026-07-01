let latas = document.querySelectorAll('.latas img:nth-child(2)')
let slides = document.querySelectorAll('.slide')
let atual = 0

latas.forEach(lata => {
    lata.onclick = () => {
        const lataAtivo = document.querySelector('.slide.ativo')
        lataAtivo.classList.remove('ativo')

        if (atual == 3) {
            atual = 0
        } else { atual = atual + 1 }

        slides[atual].classList.add('ativo')
    }
})

let lata = document.querySelectorAll('.area img')
let area = document.querySelectorAll('.area')
let atualLata = 0

lata.forEach(latas => {
    latas.onclick = () => {
        const lataAtivas = document.querySelector('.area.ativo')
        lataAtivas.classList.remove('ativo')

        if (atualLata == 4) {
            atualLata = 0
        } else { atualLata = atualLata + 1 }
        area[atualLata].classList.add('ativo')
    }
})

function cadastro() {
    document.querySelector('.tela1').style.left = '-50%';
    document.querySelector('.tela1-esconde').style.left = '0%';
    document.querySelector('.tela2').style.right = '-50%'
    document.querySelector('.tela-esconde2').style.right = "0%"
}

function ver() {
    let senha = document.getElementById('olho-senha').style.display = 'none'
    let ver = document.getElementById('olho-texto').style.display = 'block'
    let senhaNunber = document.getElementById('senha')

    if (senhaNunber.type == 'password') {
        senhaNunber.type = 'text'
    }
}
function naover() {
    let senha = document.getElementById('olho-senha').style.display = 'block'
    let ver = document.getElementById('olho-texto').style.display = 'none'
    let senhaNunber = document.getElementById('senha')

    if (senhaNunber.type == 'text') {
        senhaNunber.type = 'password'
    }
}
function loginAparessa() {
    document.querySelector('.tela1').style.left = '0%';
    document.querySelector('.tela1-esconde').style.left = '-50%';
    document.querySelector('.tela2').style.right = '0%'
    document.querySelector('.tela-esconde2').style.right = "-50%"
}
function abrir() {
    document.querySelector('.carrosfundo').style.display = 'block'
}
function fecha() {
    document.querySelector('.carrosfundo').style.display = 'none'
}

gsap.registerPlugin(ScrollTrigger)

let latinhas = document.querySelectorAll('.Produto')

gsap.to(latinhas, {
    opacity: 1,
    scrollTrigger: {
        start: '65% 60%',
        end: '90% 60%',
        scrub: true,
        //markers: true,
    }
})

function comprar1() {
    document.querySelector('.produtoss.um').style.display = 'block'
}
function lixo1() {
    document.querySelector('.produtoss.um').style.display = 'none'
}

function comprar2() {
    document.querySelector('.produtoss.dois').style.display = 'block'
}
function lixo2() {
    document.querySelector('.produtoss.dois').style.display = 'none'
}
function comprar3() {
    document.querySelector('.produtoss.tres').style.display = 'block'
}
function lixo3() {
    document.querySelector('.produtoss.tres').style.display = 'none'
}
function comprar4() {
    document.querySelector('.produtoss.quatro').style.display = 'block'
}
function lixo4() {
    document.querySelector('.produtoss.quatro').style.display = 'none'
}
function comprar5() {
    document.querySelector('.produtoss.cinco').style.display = 'block'
}
function lixo5() {
    document.querySelector('.produtoss.cinco').style.display = 'none'
}
function comprar6() {
    document.querySelector('.produtoss.seis').style.display = 'block'
}
function lixo6() {
    document.querySelector('.produtoss.seis').style.display = 'none'
}