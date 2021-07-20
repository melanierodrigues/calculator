let displayResultado = document.getElementById(`resultado`);


// Aparecer os números no display resultado
function numero(valor1){
    document.getElementById(`resultado`).value += valor1;
    if(document.getElementById(`resultado`).value.includes("=")){
    document.getElementById(`resultado`).value = valor1;
    }
}

// Número 0
function numero0(){
    const displayResultado = document.getElementById(`resultado`).value;

    if(displayResultado >= 0){
        document.getElementById(`resultado`).value += "0";
    }
    if(displayResultado === ""){
        document.getElementById(`resultado`).value = "0.";
    } else {
        document.getElementById(`resultado`).value = displayResultado + "0";
    }
}

// C - Limpar
function limpar(){
    document.getElementById(`resultado`).value = "";

    calculo.valor1 = 0;
    calculo.valor2 = 0;
    calculo.funcaoParaCalcular = null;
}

// . - Ponto
function ponto() {
    const displayResultado = document.getElementById(`resultado`);

    if(displayResultado.value === "" || isNaN(displayResultado.value)){
        displayResultado.value = "0."
    } else if(!displayResultado.value.includes(".")) {
        displayResultado.value += ".";
    }
}


// Divisão
function divisao() {
    let res = document.getElementById(`resultado`).value;

    if(res >= 0) {
        document.getElementById("resultado").value = "";
        let num1 = res + `/`;
        document.getElementById("resultado").value = num1;

    } else if (document.getElementById(`resultado`).value.includes("/")){
        let x = document.getElementById("resultado").value;
        let y = eval(x);
        document.getElementById("resultado").value = "=" + y;
}
}

// Multiplicação
function multiplicacao() {
    let res = document.getElementById(`resultado`).value;

    if(res >= 0) {
        document.getElementById("resultado").value = "";
        let num1 = res + `*`;
        document.getElementById("resultado").value = num1;

    } else if (document.getElementById(`resultado`).value.includes("*")){
        let x = document.getElementById("resultado").value;
        let y = eval(x);
        document.getElementById("resultado").value = "=" + y;
}
}

// Subtração
function subtracao() {
    let res = document.getElementById(`resultado`).value;

    if(res >= 0) {
        document.getElementById("resultado").value = "";
        let num1 = res + `-`;
        document.getElementById("resultado").value = num1;

    } else if (document.getElementById(`resultado`).value.includes("-")){
        let x = document.getElementById("resultado").value;
        let y = eval(x);
        document.getElementById("resultado").value = "=" + y;
}
}

// Adição
function adicao() {
    let res = document.getElementById(`resultado`).value;

    if(res >= 0) {
        document.getElementById("resultado").value = "";
        let num1 = res + `+`;
        document.getElementById("resultado").value = num1;

    } else if (document.getElementById(`resultado`).value.includes("+")){
        let x = document.getElementById("resultado").value;
        let y = eval(x);
        document.getElementById("resultado").value = "=" + y;
}
}

// Igual
function igual(){
    var resultado = document.getElementById('resultado').value;
    let x = document.getElementById("resultado").value;
    let y = eval(x);
    document.getElementById("resultado").value = "=" + y;
    clearInterval(resultado);
}

//Raiz Quadrada
function raizQuadrada() {
    let a = document.getElementById("resultado").value;
   let num1 = Math.sqrt(a);
   document.getElementById("resultado").value = "=" + num1;
}

// M+
function mMais(){
    if(document.getElementById(`resultado`).value.includes("=")){
        document.getElementById(`reservatorio`).value += document.getElementById(`resultado`).value + "+";
    }
}

// M-
function mMenos(){
    if(document.getElementById(`resultado`).value.includes("=")){
        document.getElementById(`reservatorio`).value += document.getElementById(`resultado`).value + "-";
    }
}

// MC
function mc(){
    document.getElementById(`reservatorio`).value = "";
}

// MR
function mr(){
    const regex = /[=]+|[+]{1}$|[-]{1}$/gm;
    const str = document.getElementById("reservatorio").value;
    const subst = ``;

    const result = str.replace(regex, subst);

    console.log('Substitution result: ', result);
    let y = eval(result);
    document.getElementById(`reservatorio`).value = str.replace(regex, subst);
    document.getElementById(`resultado`).value = "MR= " + y;
}

// +/-
function maisMenos(){
if(document.getElementById("resultado").value >= 0 && document.getElementById("resultado").value >= `-`) {
    let str = document.getElementById("resultado").value;
    let num1 = `-` + str;
    document.getElementById('resultado').value = num1;

} else if (document.getElementById(`resultado`).value.includes(`-`)){

    const regex = /^[-]{1}/gm;
    let str = document.getElementById("resultado").value;
    const subst = `+`;
    

    const result = str.replace(regex, subst);
    document.getElementById('resultado').value = result;


} else if (document.getElementById(`resultado`).value.includes(`+`)){

    const regex = /^[+]{1}/gm;
    let str = document.getElementById("resultado").value;
    const subst = `-`;
    

    const result = str.replace(regex, subst);
    document.getElementById('resultado').value = result;

}
}

// ON/CE
function onCe() {
    const regex = /[\d]{1}$/gm;
    const str = document.getElementById("resultado").value;
    const subst = ``;
    const result = str.replace(regex, subst);
    document.getElementById(`resultado`).value = result;
}


//Percentagem --------------- Rever ------------
function percentagem(){
    let b1 = document.getElementById("resultado").value;
    let b2 = eval(b1);
    let num2 = b2*100 + (`%`);
    document.getElementById("resultado").value = num2;
}