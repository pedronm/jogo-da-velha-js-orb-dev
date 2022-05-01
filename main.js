var jogador, vencedor = null,
    img = document.getElementById('kono'),
    jogadorSelecionado = document.getElementById('jogador-selecionado'), 
    vencedorSelecionado = document.getElementById('vencedor-selecionado')

mudarJogador('X')

function escolherQuadrado(id){
    if(vencedor !== null) return

    var quadrado = document.getElementById(id)    

    if(quadrado.innerHTML !== '-') return    

    quadrado.innerHTML = jogador
    quadrado.style.color = "#000"

    if(jogador === 'X'){
        jogador = 'O'
    }else{
        jogador = 'X'
    }

    mudarJogador(jogador)
    checarVencedor()
}

function mudarJogador(valor){
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checarVencedor(){
    var quadrado1 = document.getElementById('1')
    var quadrado2 = document.getElementById('2')
    var quadrado3 = document.getElementById('3')
    var quadrado4 = document.getElementById('4')
    var quadrado5 = document.getElementById('5')
    var quadrado6 = document.getElementById('6')
    var quadrado7 = document.getElementById('7')
    var quadrado8 = document.getElementById('8')
    var quadrado9 = document.getElementById('9')
    
    if(checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1)
    }
    
    if(checarSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4)
    }
    
    if(checarSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7)
    }

    
    if(checarSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1)
    }
    
    if(checarSequencia(quadrado3, quadrado5, quadrado6)){
        mudarCorQuadrado(quadrado3, quadrado5, quadrado6)
        mudarVencedor(quadrado3)
    }
    
    if(checarSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1)
    }

    if(checarSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2)
    }

    if(checarSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3)
    }
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor
    if(vencedor === 'X'){
        img.src = "assets/dio.png"
    }else{
        img.src = "assets/jojo.png"
    }
}

function checarSequencia(quad1, quad2, quad3){
    if(quad1.innerHTML !== '-' && quad1.innerHTML  === quad2.innerHTML  && quad2.innerHTML  === quad3.innerHTML )
        return true
    return false
}

function mudarCorQuadrado(quad1, quad2, quad3){
    quad1.style.background = '#0f0';
    quad2.style.background = '#0f0';
    quad3.style.background = '#0f0';
}

function reiniciarVencedor(){
    vencedor = null
    vencedorSelecionado.innerHTML = ''
    kono.src= ''

    for(var i = 1; i <= 9; i++  ){
        var quadrado = document.getElementById(i)
        quadrado.style.background = "#eee"
        quadrado.style.color = '#eee'
        quadrado.innerHTML = '-'
    }
}
