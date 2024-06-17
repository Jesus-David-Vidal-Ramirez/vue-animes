<template>
  <section class="container text-center">
    <div class="row d-block">

      <div class="col">
        <div class="row">
          <div class="col-md-3 menu">
            <nav class="navbar navbar-expand-md bg-body-tertiary ">
              <button class="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav flex-column">
                  <li class="nav-item" v-for="link of links" :key="link.id">
                    <router-link :to="link.to" class="nav-link">
                      <a>{{ link.name }}</a>
                    </router-link>
                  </li>
                </ul>

              </div>
            </nav>
          </div>

          <div class="col-md-9 info">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: "DbzLayout",
  components: {
  },
  data() {
    return {
      links: [
        { to: "/home", name: "Home", id: 0 },
        { to: "dbz", name: "Personajes", id: 1 },
        { to: "planet", name: "Planetas", id: 2 },
        { to: "transformation", name: "Transformacion", id: 3 },
        //   { to: "village", name: "villas", id: 4 },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
a.router-link-exact-active {
  color: rgb(7, 7, 7);
}

.info {
  border-left: 1px solid black;
}

// .menu {
//   // margin-top: 25vh;
// }

.navbar {
  position: sticky;
  left: 35vh;
  top: 40vh;
}

@media (max-width: 768px) {

  .navbar {
    justify-content: center;
    left: 45vh;
    bottom: 10vh;
    z-index: 5;
  }

  .menu {
    position: sticky;
    top: 10px;
    z-index: 4;
    margin-top: -1rem;
    margin-bottom: 1rem;
    // margin-top: 0px;
    // margin-bottom: 0px;
  }

  .info {
    border-left: none;
  }
}
</style>
