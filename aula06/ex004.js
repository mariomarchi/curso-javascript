var nome = window.prompt("Qual é seu nome?");
//Declara a var chamada "nome", que armazena o valor inputado pelo usuário através do prompt executado.
//Suponhamos que o usuário digitou "Mario"

document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.<br>`);
/*
Executa o método/função `write()`, que adiciona ao HTML o parámetro passado, que por sua vêz é a string "Olá, Mario! Seu nome tem 5 letras.""

.length() = método aplicado ao objeto `nome` que retorna a quantidade de caracteres do objeto em um NUM
*/

document.write(`Seu nome em maiúsculas fica ${nome.toLocaleUpperCase()}<br>`);
/*
Executa o método/função `write()`, que adiciona ao HTML o parámetro passado, que por sua vêz é a string "Seu nome em maiúsculas fica MARIO"

.toLocaleUpperCase() = método aplicado ao objeto `nome` quer transforma o valor armazenado no objeto em letras maiúsculas
*/

document.write(`Seu nome em minúsculas fica ${nome.toLocaleLowerCase()}<br>`);

/*
semelhante ao código acima, porém com letras minúsculas.
*/
