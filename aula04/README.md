# Curso JavaScript - Curso em Vídeo

## Aula 04

### Criando o Primeiro Script

<hr>

# Resumo

O arquivo contento o script JavaScript está intitulado como "ex001.js" e está sendo linkado ao documento HTML através da tag `<script>` que recebe o parâmetro `src`, que por sua vez recebe o caminho do arquivo .js como valor.

# Primeiro Script

Código do script:

```js
window.alert("Minha primeira mensagem");
window.confirm("Está gostando de JS?");
window.prompt("Qual é seu nome?");
```

- `window.alert("Minha primeira mensagem")` = Abre uma janela pop-up que renderiza a mensagem "Mihnha primeira mensagem" (passada na chave `()` do método `alert`) com um botão de "ok"
- `window.confirm("Está gostando de JS?")` = Abre uma janela pop-up que renderiza a mensagem "Está gostando de JS?" e, diferente do método `alert`, oferece 2 opções de botão (um de confirmação e outro de cancelamento).
- `window.prompt("Qual é seu nome?")` = Abre uma janela pop-up que renderiza a mensagem "Qual é seu nome?", com um campo input que recebe o valor à ser digitado pelo usuário.
