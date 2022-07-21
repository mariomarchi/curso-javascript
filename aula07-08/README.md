# Aula 07

# Operadores

## Ordem de Precedência

1. Aritiméticos
2. Relacionais
3. Lógicos
4. Ternários

<br>

## OPERADORES e OPERANDOS

Os OPERANDOS são os elementos à serem manipulados pelos Operadores.

> Exemplo:
>
> `5 + 2`
>
> `5` e `2` são os OPERANDOS
>
> `+` é o OPERADOR

<br>

## Tipos de OPERADORES

<br>

## Aritiméticos

São mesmos operadores de Cálculo da Matemática.

São eles:

- `+` : Soma / Adição

  - `5 + 2` = 7

- `-` : Subtração

  - `5 - 2` = 3

- `*` : Multiplicação

  - `5 * 2` = 10

- `/` : Divisão REAL (leva em conta as casas decimais)

  - `5 / 2` = 2.5

- `%` : Divisão INTEIRA (desconsidera as casas decimais, retorna o RESTO da divisão)

  - `5 % 2` = 1

- `**` : Potência

  - `5 ** 2` = 25
    ou
  - 5² = 25

<br>

### Precedência dos Operadores Aritiméticos

O JavaScript possui uma ordem de precedência

Exemplo:

`5 + 3 / 2` = `6.5`

No exemplo acima, o JavaScript irá realizar primeiramente a divisão `3 / 2` que da `1.5` e depois realiza a soma `5 + 1.5`, retornando o resultado como `6.5`.

<br>

Para alterar a ordem de precedência de uma expressão, basta colocar a operação entre parêmteses `()`

Exemplo:

`(5 + 3) / 2` = `4`

<br>

### Ordem de Precedência

1. `()`
2. `**`
3. `*` `/` `%`
4. `+` `-`

Se mais de um aparecer na mesma expressão, prioriza-se da esquerda para a direita.

<br>

### Atribuição

#### Auto-Atribuição

Auto-atribuição permite a reatribuição de valores em uma variável, através da autoreferência da mesma.

Exemplo:

```js
var Num = 5; // a var recebe o valor 5
var Num = Num + 2; // a var armazena a soma do valor atual (5) + 2, portanto o valor armazenado pela var é 7
var Num = Num - 3; // a var pega o valor armazenado anteriormente (7) e subtrai 3, portanto o valor armazenado agora é 4
var Num = Num * 3; // a var pega o valor armazenado anteriormente (4) e multiplica por 3, portanto o valor armazenado agora é 14
```

Também é possível usar a sintaxe `var Num +=` para auto-atribuição de uma mesma variável.

Exemplo:

```js
var Num = 4
var += 4
```

#### Incremento

```js
var Num = 10;
Num++; // a var Num agora é igual a 11
```

<hr>

## Relacionais

Toda expressão que possui um operador Relacional, tem um resultado Booleano (`true` ou `false`).

- `>` Maior que

  - `5 > 2` = `true`

- `<` Menor que

  - `7 < 4` = `false`

- `>=` Maior ou Igual

  - `8 >= 8` = `true`

- `<=` Menor ou Igual

  - `9 <= 7` = `false`

- `==` Igual

  - `5 == 5` = `true`
  - `5 == "5"` = `true`

- `!=` Não igual / Diferente

  - `4 != 4` = `false``

- `===` Idêntico / Igualdade Restrita (considera o tipo)
  - `5 === "5"` = `false`

<hr>

## Lógicos

- `!` Negação / Não

  - é um operador unário (aceita apenas um valor)
  - Só aceita boolean

- `&&` conjunção

  - é um operador binário (aceita dois valores lógicos)
  - precisa que os dois valores booleanos sejam concordantes

- `||` disjunção
  - é um operador binário
  - precisa que apenas um dos dois valores booleanos seja verdadeiro

<hr>

## Ternários

O operador ternário recebe sempre 3 OPERANDOS e funciona da seguinte maneira:

```js
var x = 8;
var resultado = x % 2 == 0 ? A : B;

resultado = A;
```

a `var resultado` recebe o valor de `A` pois a expressão `x % 2 == 0` retorna o valor booleano `true`, que tem o valor A atribuído à este retorno no operador ternário.
