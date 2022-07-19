# Curso JavaScript - Curso em Vídeo

## Aula 06

### Tratamento de Dados

<hr>

# ex002

## Resumo

No ex002, temos o seguinte código JavaScript:

```js
var nome = window.prompt("Qual é seu nome?");

window.alert("É um prazer te conhecer, " + nome + "!");
```

O script começa declarando a var 'nome', que recebe como valor a informação inputada pelo usuário no prompt executado perguntando o nome do mesmo (conforme aula 04).

Na sequência, é executado um `alert`, que abre uma janela pop-up no navegador e imprime a string "É um prazer te conhecer, " concatenando o valor armazenado na var 'nome', exibindo uma saudação concisa de acordo com o nome inputado pelo usuário.

<hr>

# Formatando strings

Exemplo:

```js
n1;
1545.5;
n1.toFixed(2);
("1545.50");
n1.toFixed(2).replace(".", ",");
("1545,50");
n1.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
("R$ 1.545,50");
```

`toLocaleString()` = Localiza o idioma da string. Neste caso, a string é reconhecida como sendo da língua portuguesa para o Brasil (passando o parâmetro `pt-BR`)
