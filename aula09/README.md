# Aula 09

# DOM (Document Object Model)

## Resumo

É um conjunto de objetos JavaScript dentro do navegador que permite a manipulação de elementos HTML através do script JS.

<hr>

## Árvore DOM

- `window` é o objeto DOM raiz, que manipula todo o navegador
  - `location` é um objeto interno ao objeto `window` que guarda a URL atual
  - `document` é o DOM que manipula o documento
    - `html`
      - `head`
        - `meta`
        - `title`
      - `body`
        - `h1`
        - `p`
        - `p`
          - `strong`
        - `div`
  - `history` armazena todos os caminhos

<br>

### Selecionando Elementos no DOM

Existem vários seletores que permitem o DOM manipular os elementos HTML, alguns deles são:

- por Tag

  - `getElementsByTagName()`

- por ID

  - `getElementById()`

- por Nome

  - `getElementsByName`

- por Classe

  - `getElementsByClassName()`

- por Seletor
  - `querySelector()`
  - `querySelectorAll()`
    - A sintaxe do seletor querySelector(aceita a seleção do elemento à partir de mais de um seletor)
    - `querySelector("div#idName")` usa-se `#` para selecionar o ID do elemento div
    - `querySelector("div.className")` usa-se `.` para selecionar a Classe do elemento div
