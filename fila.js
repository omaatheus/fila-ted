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

export function retirarDaPilha(){

}


