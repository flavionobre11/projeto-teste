# G-func: gerenciador de funcionários
Aplicação simples que realiza CRUD de funcionários.

Foram utilizados o mongoDB, como banco de dados, e os seguintes frameworks:

    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongodb": "^3.6.3",
    "mongoose": "^5.10.13",
    "request": "^2.88.2",
    
A aplicação também foi desenvolvida utilizando VueJs e Bootstrap, para o visual.

No sistema de login, primeiramente, pensei em deixar emails admin com maiores acessos (excluir, editar, criar) e outros apenas para consulta. Porém, optei por deixar qualquer usuário se cadastrar e obter acesso a aplicação, visando algo simples.

Também estou cogitando colocar o server.js para rodar em cloud. Acredito que implementarei isso nos próximos dias.


No mais, é isto :)
Detalhes de como iniciar aplicação mais abaixo.


## Iniciar servidor
Primeiramente é necessário abrir o prompt de comando e ir até a pasta onde estão os arquivos (*LEMBRANDO*: é necessário ter o node instalado). Após, digitar o seguinte comando: 
```
node server.js
```
se o server cair por algum motivo (testes) será necessario reinicia-lo. Ou utilizar a cli tool forever, para que reinicie automaticamente

```
npm i forever -g
```

depois

```
forever server.js
```

### Iniciando servidor vue
Também é necessario iniciar a aplicação vue.

Da mesma forma, é necessário abrir o prompt de comando e ir até a pasta onde estão os arquivos. Depois, digitar o seguinte comando:
```
npm run serve
```
