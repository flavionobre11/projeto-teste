<template>
 <div class="container-fluid">
     <div class="row">
        <div class="container container-edit col">

            
            <h1>G-FUNC</h1>
            <p>Cadastre, edite e exclua seus funcionários.</p>
            <form @submit.prevent="salvar">
                <div class="form-group">
                    <h6>Informações Pessoais</h6>
                        <label for="nome">Nome completo</label>
                        <input type="nome" v-model="funcionario.nome" id="nome" name="nome" class="form-control" placeholder="Ex. Jose Uzumaki da Silva" autocomplete="off">
                        <label for="cpf">CPF</label>
                        <input type="text" v-model="funcionario.cpf" id = "cpf" name="cpf" class="form-control" placeholder="Somente números" autocomplete="off">
                        <label for="data">Data de Nascimento</label>
                        <input type="text" v-model="funcionario.data" id= "data" name="data" class="form-control" placeholder="Ex: 01/01/1999">
                        <label for="endereco">Endereço</label>
                        <input type="text" v-model="funcionario.endereco" id="endereco" name = "endereco" class="form-control" placeholder="Ex. Rua 89, 540A">
                        <label for="bairro">Bairro</label>
                        <input type="text" v-model="funcionario.bairro" id="bairro" name="bairro" class="form-control">
                        <label for="cidade">Cidade</label>
                        <input type="text" v-model="funcionario.cidade" id="cidade" name="cidade" class="form-control">
                        <label for="estado">Estado</label>
                        <select name="estado" class="form-control" v-model="funcionario.estado" id="estado">
                            <option value="">Selecione seu estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                </div>

                <br>
                <div class="form-group">    
                    <h6>Informações Profissionais</h6>
                    <label for="cargo">Cargo</label>  
                    <input type="text" v-model="funcionario.cargo" id="cargo" name="cargo" class="form-control" placeholder="Ex. Estagiário">
                    <label for="depto">Departamento</label>  
                    <input type="text" v-model="funcionario.depto" id="depto" name="depto" class="form-control" placeholder="Ex. Desenvolvimento">
                    <label for="admissao">Data de Admissão</label>  
                    <input type="text" v-model="funcionario.admissao" id="admissao" name="admissao" class="form-control" placeholder="Ex: 01/01/1999">


                        
                </div>

                <button class="button btn btn-block">Salvar</button>
            </form>
            <button @click="limpar(funcionario)" class="button btn btn-block">Limpar</button>
            <ul>
                <li v-for="(erro, index) of erros" :key="index">
                    Erro <b>{{ erros.error }}</b>  - <b>{{ erros.message }}</b><br>
                    Verifique se há erros nos campos (campos vazios, etc) e tente novamente!            
                </li>
            </ul>            
        </div>

        <!-- INICIO SEGUNDO CONTAINER -->

        <div class="col col-lg-auto tabela">
            <h5>Funcionários Cadastrados: </h5>
            <table class="table table-striped table-bordered container container-edit2">

                <thead>

                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Cpf</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">UF</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Data de Admissão</th>
                        <th scope="col">OPÇÕES</th>
                    </tr>

                </thead>

                <tbody>

                    <tr v-for="funcionario of funcionarios" :key="funcionario._id">
                        <th scope="row">1</th>
                        <td>{{ funcionario.nome }}</td>
                        <td>{{ funcionario.cpf }}</td>
                        <td>{{ funcionario.data }}</td>
                        <td>{{ funcionario.endereco }}</td>
                        <td>{{ funcionario.bairro }}</td>
                        <td>{{ funcionario.cidade }}</td>
                        <td>{{ funcionario.estado }}</td>
                        <td>{{ funcionario.cargo }}</td>
                        <td>{{ funcionario.depto }}</td>
                        <td>{{ funcionario.admissao }}</td>
                        <td>
                        <button @click="editar(funcionario)" title="Editar" class="btn btn-info icon">
                            <span class="iconify" data-icon="bi:pencil" style="color: white;" data-inline="false"></span>
                        </button>

                        <button @click="deletar(funcionario)" title="Excluir" class="btn btn-info icon">
                            <span class="iconify" data-icon="bi:trash" data-inline="false" style="color: white;"></span>
                        </button>
                        </td>

                    </tr>

                </tbody>
            
            </table>
        </div>
     </div>
</div>

</template>



<script>
import Funcionario from '../services/func'
export default {
    data(){
        return{
            funcionario:{
                _id:'',
                nome:'',
                cpf:'',
                data:'',
                endereco:'',
                bairro:'',
                cidade:'',
                estado:'',
                cargo:'',
                depto:'',
                admissao:''
            },

            funcionarios: [],
            erros: []
        }
    },

    mounted(){
        this.listar();
    },
    
    methods: {
        listar(){
            Funcionario.listar().then(resposta => {
                this.funcionarios = resposta.data;
            })
        },

        salvar(){
            if(!this.funcionario._id){
                Funcionario.salvar(this.funcionario).then(resposta =>{
                    this.funcionario = {};
                    alert('Salvo com sucesso!');
                    this.listar();
                    this.erros=[];
                }).catch(e => {
                    console.log(e.response.data);
                    this.erros = e.response.data;
                })
            }else{
                Funcionario.atualizar(this.funcionario).then(resposta =>{
                    this.funcionario = {};
                    alert('Atualizado com sucesso!');
                    this.listar();
                    this.erros=[];
                }).catch(e => {
                    console.log(e.response.data);
                    this.erros = e.response.data;
                })               
            }
            
        },

        //a edicao é feita dentro do metodo salvar()
        editar(funcionario){
            this.funcionario = funcionario;
        },

        deletar(funcionario){
            Funcionario.deletar(funcionario).then(resposta =>{
                this.listar();
                this.erros=[];
            }).catch(e =>{
                console.log(e.response.data);
                this.erros = e.response.data;                
            })
        },

        limpar(funcionario){
            this.funcionario ={};
            //this.listar()
        }
        
    }

}


</script>



<style>
/* configuracao geral */

* {
  box-sizing: border-box;
  color: rgb(39, 39, 39);
  border: none;
}

/* config container centro */
.container-edit {
  width: auto;
  min-width: 15vw;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px 40px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  background-image: linear-gradient(120deg, #f1a350,  #ffb86d);
  border-radius: 10px;
  text-align: center;
}

.container-edit2 {
  width: auto;
  margin-left: 0;
  padding: 20px 40px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  border-radius: 7px;
  background-image: linear-gradient(120deg, #f1a350,  #ffb86d);
  text-align: center;
}

h6 {
  text-align: left;
  font-weight: bold;
  margin-bottom: 2vh;
}

h5{
  margin-bottom: -30px;
  color:white;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #17a2b8;
}

h1{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  font-weight: bold;
  color:white;
  width: auto;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #17a2b8;
}

p{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color:#17a2b8;
  width: auto;
  text-align: center;
  letter-spacing: 3px;
  font-size: 0.6em;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  background-color:white;
}

/* formulario */
form{
  margin-bottom: -20px;
  margin-top: 40px;
}

label, input {
  display: block;
  width: 100%;
  text-align: left;
}


input {
  padding: 10px;
  margin-bottom: 10px;
}

/* links */
.alink {
  text-align: center;
  text-transform: uppercase;
  border: none;
  height: 40px;
  border-radius: 20px;
  margin-top: 30px;
  cursor: pointer;
  color: white;
  background-color: #558edf;
  font-weight: bold;
}

.alink:hover {
  color: white;
  background-color:#2e76c9;
  transition: 0.5s;
}


/* botao */

.button{
  display:block;
  text-align: center;
  text-transform: uppercase;
  border: none;
  min-width: 10vh;
  max-width: 20vh;
  height: 40px;
  border-radius: 20px;
  margin: 30px auto auto auto;
  cursor: pointer;
  color: #FFF;
  background-color: #17a2b8;
  font-weight: bold;
}

.button:hover{
  background-color: #108a9c;
  color:white;
  transition: 0.5s;
}

  /* placeholders */
input::-webkit-input-placeholder{
  font-style: italic;
  font-size: .8rem;
}

  /* imagem de home */
.img-home{
  position:absolute;
  left: 0;
  padding: 2em;
  max-width:70px;
  max-height:70px;
  width: auto;
  height: auto;
  cursor: pointer;
}

/* tables */

.tabela{
  margin-top: 4vh;
  padding: 10px;
  margin-left: 5px;
  border-radius: 10px;
}


.container-edit2 td{
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8em;
}

.container-edit2 th{
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8em;
}
</style>