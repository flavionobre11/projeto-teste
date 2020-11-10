<template>
 <div class="container-fluid">
     
     <!-- NAVBAR -->
     <div class="row nav-bar">
         
         <h1>G-FUNC</h1>
         <small>O seu gerenciador de pessoas!</small>
         <div class="btnpos">
            <button @click.prevent="att()" title="atualizar dados do banco">Atualizar</button>
            <button @click.prevent="logout()" title="home">Log Out</button>

         </div>
     </div>

     <div class="row">


         <!-- CONTAINER 1 -->
        <!-------------- FORMULARIO ------------------->
        <div class="container container-edit col">
            
            <h1>G-FUNC</h1>
            <p>Cadastre, edite e exclua seus funcionários.</p>
            <form @submit.prevent="salvar">
                <div class="form-group">
                    <h6>Informações Pessoais</h6>
                        <label for="nome">Nome completo</label>
                        <input type="nome" v-model="funcionario.nome" id="nome" name="nome" required class="form-control" placeholder="Ex. Jose Uzumaki da Silva" autocomplete="off" pattern= "[\wà-úÀ-Ú ]+[\s]{1,}/?[\wà-úÀ-Ú ]*">
                        <label for="cpf">CPF</label>
                        <input type="text" v-model="funcionario.cpf" id = "cpf" name="cpf" required class="form-control" placeholder="Ex. 000.000.000-00" autocomplete="off" pattern="\d{3}.\d{3}.\d{3}-\d{2}">
                        <label for="data">Data de Nascimento</label>
                        <input type="text" v-model="funcionario.data" id= "data" name="data" required class="form-control" placeholder="Ex: 01/01/1999" autocomplete="off" pattern="\d{2}/\d{2}/\d{4}">
                        <label for="endereco">Endereço</label>
                        <input type="text" v-model="funcionario.endereco" id="endereco" name = "endereco" required class="form-control" placeholder="Ex. Rua 89 540A" autocomplete="off" pattern= "[\wà-úÀ-Ú, ]+[\s]{1,}/?[\wà-úÀ-Ú, ]*">
                        <label for="bairro">Bairro</label>
                        <input type="text" v-model="funcionario.bairro" id="bairro" name="bairro" required class="form-control" autocomplete="off">
                        <label for="cidade">Cidade</label>
                        <input type="text" v-model="funcionario.cidade" id="cidade" name="cidade" required class="form-control" autocomplete="off">
                        <label for="estado">Estado</label>
                        <select name="estado" class="form-control select" v-model="funcionario.estado" id="estado" required autocomplete="off">
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
                    <input type="text" v-model="funcionario.cargo" id="cargo" name="cargo" required class="form-control" placeholder="Ex. Estagiário" autocomplete="off">
                    <label for="depto">Departamento</label>  
                    <input type="text" v-model="funcionario.depto" id="depto" name="depto" required class="form-control" placeholder="Ex. Desenvolvimento" autocomplete="off">
                    <label for="admissao">Data de Admissão</label>  
                    <input type="text" v-model="funcionario.admissao" id="admissao" required name="admissao" class="form-control" placeholder="Ex: 01/01/1999" autocomplete="off" pattern="\d{2}/\d{2}/\d{4}">


                        
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
    <!-------------- TABELA DE FUNCIONARIOS ------------>

        <div class="col col-lg-auto tabela">
            <h5>Funcionários Cadastrados: </h5>
            <p>Clique no botão acima para atualizar.</p>
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

                    <tr v-for="(funcionario, index) of funcionarios" :key="funcionario._id">
                        <th scope="row">{{ index+1 }}</th>
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
                        <button @click="editar(funcionario)" title="Editar" class="btn icon">
                            <span class="iconify" data-icon="bi:pencil" style="color: white;" data-inline="false"></span>
                        </button>

                        <button @click="deletar(funcionario)" title="Excluir" class="btn icon">
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


// ------------------------- INICIO AREA SCRIPT -------------------------------
//imports, metodos e outros. area
//de processamento da aplicaçao vue


import Funcionario from '@/services/func'
import firebase from 'firebase'

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

            funcionarios: [], //guarda as informacoes recebidas no get http
            erros: []         //salvar erros nos metodos post, put e delete
        }
    },


    mounted(){
        this.listar();
    },
    
    methods: {

        //atualizar dados da tabela
        att(){
            this.$router.go(0)
        },

        //logout da aplicação
        logout(){
            firebase.auth().signOut().then(() => {
                alert('Você fez logout da aplicação GFunc\n\nAté mais!')
                this.$router.push({name:'login'})
            })
        },

        //carrega os funcionarios do banco de dados
        listar(){
            Funcionario.listar().then(resposta => {
                this.funcionarios = resposta.data;
            })
        },

        //salva um funcionario no bando de dados
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

        //delta um funcionario
        deletar(funcionario){
            Funcionario.deletar(funcionario).then(resposta =>{
                this.listar();
                this.erros=[];
            }).catch(e =>{
                console.log(e.response.data);
                this.erros = e.response.data;                
            })
        },

        //limpar os campos do formulario
        limpar(funcionario){
            this.funcionario ={};
        },


    }

}

// ------------------------- FIM DA AREA SCRIPT -------------------------------
</script>


<style src="./style.css"></style>