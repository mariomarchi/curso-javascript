# Aula 07

# Operadores

<br>

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

### Aritiméticos

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

#### Precedência de operadores

<br>

O JavaScript possui uma ordem de precedência

Exemplo:

`5 + 3 / 2` = `6.5`

No exemplo acima, o JavaScript irá realizar primeiramente a divisão `3 / 2` que da `1.5` e depois realiza a soma `5 + 1.5`, retornando o resultado como `6.5`.

<br>

Para alterar a ordem de precedência de uma equação, basta colocar a operação entre parêmteses `()`

Exemplo:

`(5 + 3) / 2` = `4`

<br>

#### Ordem de Precedência

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

- Relacionais
- Lógicos
- Ternários

<hr>
