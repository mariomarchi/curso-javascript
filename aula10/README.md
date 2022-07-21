# Aula 10

# Eventos DOM

### Eventos de Mouse

`mouseenter` dispara quando o cursor do mouse entra na div

`mousemove` dispara quando o cursor se move dentro da area da div

`mousedown` dispara quando clica e segura na area da div

`mouseup` dispara quando solta o click da área da div

`click` dispara quando clica e solta na área da div

`mouseout` dispara quando o cursor sai da área da div

<hr>

## Functions

É um bloco de código que executa apenas quando o evento ocorrer ou quando a function ser executada

A sintaxe de uma function é:

```js
function nomeDaFuncao(parametros) {
  window.alert("blablabla");
}
```

## Listeners

É possível adicionar os eventos à um elemnto HTML sem a necessidade de parametriza-los diretamente no documento HTML, através do `addEventListener('event', function)`
