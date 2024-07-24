<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeLayout from "@/modules/home/layouts/HomeLayout.vue";
// import Test from "@/modules/shared/components/test.vue";
// import ViewExample from "@/modules/shared/components/ViewExample.vue";

export default {
  name: "App",
  components: {
    HomeLayout,
    // Test,
    // ViewExample
    // : defineAsyncComponent(() => import(/* webpackChunkName: "Home" */ '@/modules/home/layouts/HomeLayout.vue'))
  },
};
</script>

<template>
    <HomeLayout/>
    <!-- <Test /> -->
    <!-- <ViewExample /> -->
    

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
