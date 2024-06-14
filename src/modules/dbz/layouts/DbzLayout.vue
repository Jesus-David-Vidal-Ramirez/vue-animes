<template>
    <div class="list-container d-flex justify-content-center">
      <div class="col-8 list-menu align-items-center">
        <ul>
          <li v-for="link of links" :key="link.id">
            <router-link :to="link.to"          
            >
            <!-- :class="isActive ? 'is-active' : 'normal-link'" -->
            <a>
                {{ link.name }}
              </a>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-12 scrollarea">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  // import Naruto from "@/modules/naturo/pages/Naruto.vue";
  
  export default {
    name: "DbzLayout",
    components: {
      // Naruto,
    },
    data() {
      return {
        links: [
          { to: "/home", name: "home", id: 0 },
          { to: "dbz", name: "personajes", id: 1 },
        //   { to: "clans", name: "clanes", id: 2 },
        //   { to: "akatsuki", name: "akatsukis", id: 3 },
        //   { to: "village", name: "villas", id: 4 },
        ],
      };
    },
  
  };
  </script>
  
  <style lang="scss" scoped>
  .list-menu {
    height: calc(100vh - 100px);
    border-right: 1px solid #2c3e50;
  }
  
  .scrollarea {
    //   width: calc(100vw - 850px);
    height: calc(100vh - 60px);
    overflow: auto;
  }
 
  a.router-link-exact-active {
      color: rgb(7, 7, 7);
  }
  </style>
  