# Curso JavaScript - Curso em Vídeo

## Aula 06

### Tratamento de Dados

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
