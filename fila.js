export function criarFila(size = 5){
   return [...new Array(size)]
}

export function inserirItem(fila, item){
    const primeiroItem = fila.indexOf(undefined)
    if(primeiroItem !== -1){
        fila[primeiroItem] = item;
        console.log("Item inserido na fila!")
        return
    }
    console.log("Não há espaço para inserir.")
}

export function retirarDaFila(fila){
    if (fila[0] === undefined) {               //verifica se a fila esta vazia
        console.log("A fila está vazia!")
        return
    }

    let primeiroItem = fila[0] //verifica o primeiro item da lista, let pq o primeiro item muda

    for (let i = 0; i < fila.length; i++) {
       fila[i] = fila[i + 1]  
    }
    //fazer um if de se for o ultimo, saia

    
    fila[0].shift() //
}