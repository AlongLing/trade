<template>
  <div class="home">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import vHeader from "@/components/Header";

export default {
  name: 'Home',
  components: {
    vHeader
  }
}
</script>
