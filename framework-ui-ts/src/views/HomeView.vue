<template>
  <div class="home">
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
    }
  },
  created() {
    console.log('created1')
  }
})
export default class HomeView extends Vue {
  created(){
    console.log('created2')
  }
}
</script>
