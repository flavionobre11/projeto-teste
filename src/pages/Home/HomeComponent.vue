<template>
 <div class="container-fluid">
     <div class="row nav-bar">
         
         <h1>G-FUNC</h1>
         <small>O seu gerenciador de pessoas!</small>
         <div class="btnpos">
             <button @click="show()">teste</button>
            <button @click.prevent="att()" title="atualizar dados do banco">Atualizar</button>
            <button @click.prevent="logout()" title="home">Log Out</button>

         </div>
     </div>

     <div class="row">
        <div class="container container-edit col">

            
            <h1>G-FUNC</h1>
            <p>Cadastre, edite e exclua seus funcionários.</p>
            <form @submit.prevent="salvar">
                <div class="form-group">
                    <h6>Informações Pessoais</h6>
                        <label for="nome">Nome completo</label>
                        <input type="nome" v-model="funcionario.nome" id="nome" name="nome" required class="form-control" placeholder="Ex. Jose Uzumaki da Silva" autocomplete="off">
                        <label for="cpf">CPF</label>
                        <input type="text" v-model="funcionario.cpf" id = "cpf" name="cpf" required class="form-control" placeholder="Somente números" autocomplete="off">
                        <label for="data">Data de Nascimento</label>
                        <input type="text" v-model="funcionario.data" id= "data" name="data" required class="form-control" placeholder="Ex: 01/01/1999">
                        <label for="endereco">Endereço</label>
                        <input type="text" v-model="funcionario.endereco" id="endereco" name = "endereco" required class="form-control" placeholder="Ex. Rua 89, 540A">
                        <label for="bairro">Bairro</label>
                        <input type="text" v-model="funcionario.bairro" id="bairro" name="bairro" required class="form-control">
                        <label for="cidade">Cidade</label>
                        <input type="text" v-model="funcionario.cidade" id="cidade" name="cidade" required class="form-control">
                        <label for="estado">Estado</label>
                        <select name="estado" class="form-control" v-model="funcionario.estado" id="estado" required>
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
                    <input type="text" v-model="funcionario.cargo" id="cargo" name="cargo" required class="form-control" placeholder="Ex. Estagiário">
                    <label for="depto">Departamento</label>  
                    <input type="text" v-model="funcionario.depto" id="depto" name="depto" required class="form-control" placeholder="Ex. Desenvolvimento">
                    <label for="admissao">Data de Admissão</label>  
                    <input type="text" v-model="funcionario.admissao" id="admissao" required name="admissao" class="form-control" placeholder="Ex: 01/01/1999">


                        
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
import Funcionario from '@/services/func'
import teste from '@/services/teste'
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

        att(){
            this.$router.go(0)
        },

        logout(){
            alert('Você fez logout da aplicação GFunc')
            this.$router.push({name:'login'})
            this.$router.go()
        },

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
        },


    }

}

</script>

<style src="./style.css">

</style>