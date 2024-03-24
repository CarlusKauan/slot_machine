//1. Depositar algum valor. (user)                          [X]
//2. Determinar o numero de linhas da apostas. (user)       [ ]

//3. A maquina vai coletar o valor da aposta. (slot)        [ ]
//4. A maquina irá girar. (slot)                            [ ]
//5. A maquina fará a checagem se o user ganhar. (slot)     [ ]

//6. Dê ao usuario os seus ganhos. (slot>>user)             [ ]
//7. Jogar novamente. (slot>>user>>slot)                    [ ]

// Importação da lib user>>slot
const prompt = require("prompt-sync")();

// Arrow fuction
const depositar = () => {
    while(true){
        // const dos valores e Conversão
        const valorDepositado = prompt("Insira um valor de Deposito: ");
        const numeroValorDepositado = parseFloat(valorDepositado);
        
        // Validação
        if(isNaN(numeroValorDepositado) || numeroValorDepositado <= 0) {
            console.log("Valor de Deposito Invalido, Tente Novamente!");
        }
        else{
            return numeroValorDepositado;
        }
    }
}

const numeroValorDepositado = depositar();
console.log(numeroValorDepositado);

