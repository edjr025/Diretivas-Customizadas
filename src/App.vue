<template>
<div>
  <p v-texto="configuracaoTexto">Minha primeira diretiva customizada</p> 
  <p>sem a diretiva</p>
  <p v-texto="{cor: 'blue', tamanhoFonte: '300%', totalCaracter: 4}">Teste</p>
  <p v-texto="{cor: 'red', tamanhoFonte: '200%', totalCaracter: 15}">meu texto ta sendo processado aqui</p>

  <div v-posicao:absolute="75" v-texto="{cor: 'pink'}">Ola, eu sou um binding de argumento e valor</div>
  <span>Codigo A:</span><input type="text"><span v-informacao:simples.umClickMouse="'você encontrará o codigo A na parte frontal do equipamento'">i</span>
  <br>
  <span>Codigo B:</span><input type="text"><span v-informacao:destacado.doisClickMouse.sairAutomaticamente="'você encontrará o codigo B na parte traseira do equipamento, abaixo da tampa de proteção'">i</span>
  <hr>
  <h1 v-colorir="'red'">Diretiva customizada registrda localmente no componente</h1>
</div>
 
</template>

<script>
import colorir from "@/directives/colorir";

export default {
  name: 'App',
  directives: { //declarando diretivas locais
    colorir: colorir
  },
  data: () => ({
      configuracaoTexto: {cor: 'green', tamanhoFonte: '400%', totalCaracter: 10}
  }),
}
</script>

<style>

</style>
