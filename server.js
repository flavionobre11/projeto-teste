/*
*
Arquivo: server.js
Autor: Flavio
Data da criação: 06/11/2020
Descrição:
*
*/

// configurar o Setup

//chamando pacotes importados
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Funcionario = require('./objeto/funcionario');
var app = express();

//Cloud
mongoose.connect('mongodb+srv://admin:admin@node-crud-api.e5pul.mongodb.net/node-crud-api?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

//local
// mongoose.connect('mongodb://localhost:27017/node-crud-api');

//Configuração da variavel app para usar o bodyParser()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//definindo a porta onde sera executada a nossa rota
var porta = process.env.port || 7000;

//-------------------------------------------------------------------------------------
//ROTAS: INICIO

//cirando uma instancia das rotas via express
var router = express.Router();

//rota de exemplo

//middleware segundo documentação: sinaliza quando há requests enviados a API.
//o next() faz com que a execução nao pare e vá para proxima rota.
router.use(function(req, res, next){
    console.log('Um movimentacao acontece...');
    next();
});

//definindo um padrao das rotas prefixadass: '/api': 
//quando recebe uma requisição, encaminha para o "router" que foi criado
//o plugin cors serve para permitir todas as requisicoes
app.use(cors());
app.use('/api', router);
app.use(express.static(__dirname+'/')); //quando entra no localhost:7000, retorna index.html



//API's:
//rotas que terminem com /funcionario servem para GET ALL e POST
router.route('/funcionario')

    /* POST: metodo para criar produto (http://localhost:7000/api/funcionario) */
    .post(function(req, res){
        var funcionario = new Funcionario();

        //setar os campos do funcionario (via request):
        funcionario.nome = req.body.nome;
        funcionario.cpf = req.body.cpf;
        funcionario.data = req.body.data;
        funcionario.endereco = req.body.endereco;
        funcionario.bairro = req.body.bairro;
        funcionario.cidade = req.body.cidade;
        funcionario.estado = req.body.estado;
        funcionario.cargo= req.body.cargo;
        funcionario.depto = req.body.depto;
        funcionario.admissao = req.body.admissao;

        funcionario.save(function(error){
            if (error){
                res.status(400).send({ 
                    error: '400',
                    message: 'Nao foi possivel salvar alguns dados.'
                })
            }
            
            
            res.json({ message: 'Funcionario cadastrado com sucesso!'});
            // res.redirect("/cadastrar.html")
        })
    })

    /* GET: metodo para selecionar todos funcionarios (http://localhost:7000/api/funcionario) */

    .get(function(req, res){
        Funcionario.find(function(error, funcionario){
            if (error)
                res.send("Ocorreu um erro ao selecionar todos os funcionarios... : " +error);
            
            res.json(funcionario);
        })
    });
   

 

    //Rotas que irao terminar em '/funcionario/:funcionario_id'
    //servem para: GET, PUT e DELETE: id

    router.route('/funcionario/:funcionario_id')

    /* GET_ID: metodo para selecionar por id (http://localhost:7000/api/funcionario/:funcionario_id) */
    
    .get(function(req, res){

        //essa função seleciona funcionario por ID
        Funcionario.findById(req.params.funcionario_id, function(error, funcionario){
            if (error)
                res.send("Nao foi possivel encontrar ID... :" + error);
            
            res.json(funcionario);

        })
    })

    /* PUT_ID: metodo para atualizar por id (http://localhost:7000/api/funcionario/:funcionario_id) */

    .put(function(req, res){

        //procurar ID
        Funcionario.findById(req.body._id, function(error, funcionario){
            if(error)
                res.send("id nao encontrado... :" + error);


            //nao será atualizado o campo CPF nem admissao    
            funcionario.nome = req.body.nome;
            funcionario.data = req.body.data;
            funcionario.endereco = req.body.endereco;
            funcionario.bairro = req.body.bairro;
            funcionario.cidade = req.body.cidade;
            funcionario.estado = req.body.estado;
            funcionario.cargo= req.body.cargo;
            funcionario.depto = req.body.depto;


            funcionario.save(function(error){
                if(error)
                    res.send("erro ao atualizar... :" + error); 
                
                res.json({ message: 'Dados atualizados com sucesso!'});
            })
        })

    })

    /* DELETE_ID: metodo para atualizar por id (http://localhost:7000/api/funcionario/:funcionario_id) */

    .delete(function(req, res){
       
        Funcionario.deleteOne({
            _id: req.body._id
        }, function(error){
            if (error)
                res.send("Nao foi possivel excluir funcionario... :" + error);
            
            res.json({ message: "O funcionário foi excluido com sucesso."})
        })
    });




//ROTAS: FIM
//-------------------------------------------------------------------------------------


//iniciando a aplicação (servidor)
app.listen(porta, function(){
    console.log("Servidor rodando na URL http://localhost:" +porta);
});