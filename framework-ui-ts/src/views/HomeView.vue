<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{hello}}
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  },
  data(){
    return {
      hello: 'tttt'
    }
  }
})
export default class HomeView extends Vue {}
</script>
