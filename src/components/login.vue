<template>
    <div class="container container-edit">
       <h1>Entrar no G-Func</h1>
       <form action="">
           <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="Ex. jose.uzumaki@exemplo.com" autocomplete="off">
            <label for="password">Senha</label>
            <input type="password" class="form-control" name="password" id="password" placeholder="Digite sua senha">
            <input type="submit" class="btn btn-success btn-block" value="Login">
           </div>
       </form>
       <p>Esqueceu a senha? Entre em contato conosco.</p>
       <p>0800 726 0101</p>
    </div>
</template>

<script>

</script>



<style>
* {
    box-sizing: border-box;
    color: #FFF;
    border: none;
}

body {
    background-image: url('https://image.freepik.com/vetores-gratis/tiny-gerente-de-rh-procurando-um-candidato-a-emprego-entrevista-lupa-ilustracao-vetorial-plana-de-tela-de-computador-carreira-e-emprego_74855-8619.jpg');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-position-y: 60vh;
}

p{
    font-size: .8rem;
    margin-top: 0px;
    margin-bottom: 0px;
}


/* config container centro */
.container-edit {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 30px;
    margin-top: 10vh;
    margin-bottom: 10vh;
    background-image: linear-gradient(120deg, #f1a350,  #ffb86d);
    border-radius: 10px;
    text-align: center;
}

/* formulario */
form{
    margin-bottom: 20px;
    margin-top: 30px;
}

label, input {
    display: block;
    width: 100%;
    text-align: left;
  }

label {
    font-weight: bold;
}

input{
    padding: 10px;
    margin-bottom: 10px;
    font-weight: bold;
}


/* botao */
input[type="submit"] {
    text-align: center;
    text-transform: uppercase;
    border: none;
    height: 40px;
    border-radius: 20px;
    margin-top: 30px;
    cursor: pointer;
    color: #FFF;
    background-color: #558edf;
    font-weight: bold;
  }

  input[type="submit"]:hover{
    background-color:#2e76c9;
    transition: 0.5s;
  }

  /* placeholders */
  input::-webkit-input-placeholder{
        font-style: italic;
        font-size: .8rem;
  }
</style>