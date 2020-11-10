# gfunc
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


## Iniciar servidor
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
```
npm run serve
```
