<template>
    <div class="main">
        <div class="container container-login">
        
        
            <h1>Entrar no G-Func</h1>
        
            <!-- FORMULÁRIO -->
            <!-- login de usuario -->

            <form action="" class="formulario">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" v-model="email" class="form-control" name="email" id="email" placeholder="Ex. jose.uzumaki@exemplo.com" autocomplete="off">
                    <label for="password">Senha</label>
                    <input type="password" v-model="senha" class="form-control" name="password" id="password" placeholder="Digite sua senha">
                    <input @click.prevent="login()" type="submit" class="btn btn-success btn-block" value="Login">
                </div>
            </form>
            

            <!-- VOLTAR -->
            
            <p>Ainda não é cadastrado? 
                <span>
                    <router-link to="/registrar"> Cadastre-se</router-link>
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
            email:'',
            senha:''
        }

    },

    methods: {
       // login utilizando firebase
       login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    this.$router.replace('home')
                    alert('Login realizado com sucesso!\n\nBem vindo ' + this.email+' :)')
                },
                (err) =>{
                    alert('Login não permitido: verifique os dados\n\n'+ err.message+" :(")
                }
            )

        }
    }
}

// ------------------------- FIM DA AREA SCRIPT -------------------------------
</script>


<style src="./style.css"/>