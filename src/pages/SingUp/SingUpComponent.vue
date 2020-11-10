<template>
<div class="main">
    <div class="container container-login">
       <h1>Registrar-se</h1>
       <form action="" class="formulario">
           <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" v-model="email" class="form-control" name="email" id="email" placeholder="Ex. jose.uzumaki@exemplo.com" autocomplete="off">
                <label for="password">Senha</label>
                <input type="password" v-model="senha" class="form-control" name="password" id="password" placeholder="Digite sua senha">
                <input @click.prevent="login()" type="submit" class="btn btn-success btn-block" value="Registrar">
                <button @click.prevent="voltar()" class="btn btn-sucess btn-block">Voltar</button>
            </div>
       </form>
       
    </div>
</div>
</template>

<script>
export default {
    name: 'LoginComponent',

    data(){
        return{
            email: '',
            senha: ''  
        }
    },

    methods: {
        login(){
            this.$router.push({name:'login'})
            this.$router.go()
        },

        voltar(){
            this.$router.push({ name: 'login' })
            this.$router.go()
        }


    }
}
</script>


<style src="./style.css"/>