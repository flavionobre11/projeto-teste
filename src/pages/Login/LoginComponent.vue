<template>
<div class="main">
    <div class="container container-login">
       <h1>Entrar no G-Func</h1>
       <form action="" class="formulario">
           <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="Ex. jose.uzumaki@exemplo.com" autocomplete="off">
            <label for="password">Senha</label>
            <input type="password" class="form-control" name="password" id="password" placeholder="Digite sua senha">
            <input @click.prevent="login()" type="submit" class="btn btn-success btn-block" value="Login">
           </div>
       </form>
       <p>Esqueceu a senha? Entre em contato conosco.</p>
       <p>0800 726 0101</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'LoginComponent',

    data(){

    },

    methods: {
        login(){
            this.$router.push({name:'home'})
        }
    }
}
</script>


<style src="./style.css"/>