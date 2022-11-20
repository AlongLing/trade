<template>
  <div class="wrapper">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import vHeader from "@/components/Header";
import vSidebar from "@/components/Sidebar";

export default {
  name: 'Home',
  data() {
    return {
      tagsList: [],
      collapse: false,
    };
  },
  components: {
    vHeader,
    vSidebar
  },
  created() {
    this.$bus.on('collapse-content', msg => {
      this.collapse = msg;
    });
  },
  beforeDestroy() {
    this.$bus.off('collapse-content', msg => {
      this.collapse = msg;
    });
  }
}
</script>
