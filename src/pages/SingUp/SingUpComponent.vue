<template>
    <div class="main">
        <div class="container container-registrar">


        
            <h1>Registrar-se</h1>

            <!-- FORMULÁRIO -->
            <!-- registro de novo usuario -->

            <form action="" class="formulario-registrar">
                <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" v-model="email" class="form-control" name="email" id="email" placeholder="Ex. jose.uzumaki@exemplo.com" autocomplete="off">
                        <label for="password">Senha</label>
                        <input type="password" v-model="senha" class="form-control" name="password" id="password" placeholder="Pelo menos 6 digitos">
                        <input @click.prevent="registrar()" type="submit" class="btn btn-success btn-block" value="Registrar">
                    </div>
            </form>
            


            <!-- VOLTAR -->
            <p>ou retorne para fazer  
                <span>
                    <router-link to="/"> Login.</router-link>
                </span>
            </p> 



        </div>
    </div>
</template>

<script>

// ------------------------- INICIO AREA SCRIPT -------------------------------
//imports, metodos e outros. area
//de processamento da aplicaçao vue

import firebase from 'firebase';

export default {
    name: 'LoginComponent',

    data(){
        return{
            email: '',
            senha: ''  
        };
    },

    methods: {
        // metodo resgitrar utilizando firebase
        registrar(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha). then(
                (user) => {
                    alert("Aeeee!\nSeja muito bem vind@ a Gfunc :)\n\nO usuário "+this.email+" foi cadastrado com sucesso!\nVocê será redirecionad@ a aplicação.")
                    this.$router.replace('login')
                },
                (err) => {
                    alert('Aconteceu algo inesperado!\n' +err.message)
                }
            )
        },


    }
}

// ------------------------- FIM DA AREA SCRIPT -------------------------------
</script>


<style src="./style.css"/>