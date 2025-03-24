function contar(){
    let inicio= document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] Faltam dados a serem digitados!!`)
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert(`Passo Inválido! Reconsiderando Passo como 1`)
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i;c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `// \u{1F449}<- metodo para adicionar emojis, digitar no google full emoji list e pegar os codigos deles
            }
        
        } else {
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}` 
    }
h1 = document.getElementById('emoji')
h1.innerHTML = `\u{1F600} PARABÉNS \u{1F600}`
}
h1 = document.getElementById(`emoji`)
h1.innerHTML = `\u{1F4AF} CONTADOR \u{1F4AF}`


