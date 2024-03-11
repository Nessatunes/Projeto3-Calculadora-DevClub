function adicionarCaracter(caracter){
    const valorDisplay = document.querySelector('.display').value /*valor do input*/
    document.querySelector('.display').value = valorDisplay + caracter /* valor digitado*/
    
}
function limpaTela(){
    document.querySelector(".display").value = ""
}
function calcular(){
    const valorDisplay = document.querySelector('.display').value 
    document.querySelector('.display').value = eval(valorDisplay)
}
function inverterNumero(){
    const valorDisplay = document.querySelector('.display').value
    document.querySelector('.display').value = valorDisplay * -1
}