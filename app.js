
alert ('Bem vindo ao desafio do número');

let entrenumeros = 100; 
let numerosecreto = parseInt(Math.random() * entrenumeros + 1); 
let chute; 
tentativas = 1;
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 

while (chute != numerosecreto) {

    chute = prompt (`Escolha um número entre 1 e ${entrenumeros}`);

    if (chute == numerosecreto) {

        break 

    }
    
    else {
    
        if (chute > numerosecreto) {
            alert (`O numéro é menor que ${chute}`);
        }

        else {
            alert (`O número é maior que ${chute}`);
        }

        
        tentativas++; 
    }
    
}



alert (`Você acertou o número ${numerosecreto} com ${tentativas} ${palavratentativa}.`);



// Operador Ternario, no lugar de utilizar: 
// alert (`Você acertou o número ${numerosecreto} com ${tentativas} tentativa.`); 
// pode se utilizar uma a ? para fazer uma pergunta e : para gerar as condições. 
// Antes: 
//if (tentativas > 1) {
//    alert (`Você acertou o número ${numerosecreto} com ${tentativas} tentativas.`);
//}
//else {
//    alert (`Você acertou o número ${numerosecreto} com ${tentativas} tentativa.`); 
//}
// Depois: 
//
//



