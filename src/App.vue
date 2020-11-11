<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created(){
    console.log("Conectando com WebSocket")
    this.connection = new WebSocket("wss://echo.websocket.org")

    this.connection.onmessage = function(event) {
      console.log(event);
    }

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Conectado com sucesso ao echo websocket server...")
    }
  }
}
</script>

<style>

</style>
