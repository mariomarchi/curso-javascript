var n1 = Number(window.prompt("Digite um número!"));

var n2 = Number(window.prompt("Digite outro número"));

/*
Semelhante ao exemplo anterior (ex002), delcara-se as variáveis "n1" e "n2", ambas executando o método `prompt` solicitando ao usuário que digite um número.
Este valor é transformado em NUM - através do método `Number()` - uma vez que, por padrão, o método `prompt` captura o conteúdo digitado como STRING

Digamos que os valores digitados foram "5" e "2".
*/

var soma = n1 + n2;
/* 
Declara-se a var soma, que armazena o resultado da soma dos dois valores armazenados na var n1 e var n2
*/

window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`);

/*
Executa o método `alert()`, que abre uma janela pop-up imprimindo o texto "A soma entre 5 e 2 é igual a 7"

A mensagem foi construída através de uma Template String, que torna mais fácil a utilização de valores armazenados nas variáveis declaradas por sua semântica simplificada.

Para declarar uma Template String, deve-se escrever a string entre caractéres de cráse (`) e chamar os valores armazenados nas variáveis através da síntase ${}
 */
