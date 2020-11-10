/*
*
Arquivo: funcionario.js
Autor: Flavio
Data da criação: 06/11/2020
Descrição: arquivo responsavel onde crio um modelo de funcionario
*
*/

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FuncionarioSchema = new Schema({
    nome: {type: String, trim: true, required: true},
    cpf: {type: String, trim: true, required: true},
    data: {type: String, trim: true, required: true},
    endereco: {type: String, trim: true, required: true},
    bairro: {type: String, trim: true, required: true},
    cidade: {type: String, trim: true,  required: true},
    estado: {type: String, trim: true, required: true},
    cargo: {type: String, trim: true, required: true},
    depto: {type: String, trim: true, required: true},
    admissao: {type: String, trim: true, required: true}

});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);