function OlaMundo(){
    alert("olá mundo");
}

function mostrarnome(){
    let nome=prompt("Insira seu nome: ");
    console.log(nome);
}

function concatenaPalavras(){
    let p1=prompt("insira a primeira palavra: ");
    let p2=prompt("insira a segunda palavra: ");
    console.log(p1, p2);
}

function somaNumeros(){
    let num1=parseInt(prompt("insira o primeiro numero: "));
    let num2=parseInt(prompt("insira o segundo numero: "));

    let soma= num1 + num2
    console.log("O resultado da soma é: " + soma); 

}

function subtraiNumeros(){    
    let n1=parseInt(5);
    let n2=parseInt(3);
    let subtracao=n1-n2;
    console.log(subtracao);
}

function criaObjeto(){
    const usuario = {
        nome:prompt("insira o nome: "),
        idade:parseInt(prompt("insira a sua idade: ")),
        time:prompt("insira o seu time favorito: ")
    }

    console.log(usuario);
}

function calculadora(){
    let n1 =parseInt(prompt("insira o primeiro numero: "));
    let op = prompt("inisira o sinal da operação que você deseja: ");
    let n2 = parseInt(prompt("inista o segundo numero da operação: "));

    switch (op){
        case '+':
            let soma = n1 + n2;
            console.log(soma);
            break;

        case '-':
            let subtracao = n1 - n2;
            console.log(subtracao);
            break;
        
        case '/':
            if(n1 == 0 || n2 == 0){
                console.log("não é possível dividir por zero")
                break;
            }
            else{
                let divisao = n1 / n2;
                console.log(divisao);
                break;
    
            }

        case '*':
            let multiplicacao = n1 * n2;
            console.log(multiplicacao);
            break;
    }
}

function mudaConstante(){
    const nome = prompt("insira seu nome");
    console.log(nome);
}

function  manipulaArrays(){
    let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"];
    cores.push("laranja");
    let rm = cores.pop();
    cores.sort();
    console.log(rm);
    cores.splice(1,2);
    let tam = cores.length;
    console.log("O tamanho do array é de: " + tam);
    console.log("primeira cor do array: " + cores [0]);
    console.log("ultima cor do array: " + cores [9]);
    cores.unshift("fucsa");
    cores.shift(2);
    console.log(cores);
}
