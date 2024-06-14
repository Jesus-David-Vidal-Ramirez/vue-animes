<template>
  <!-- <main
    id="app"
    class="container-fluid d-flex justify-content-center align-items-center"
    style="background-color: blanchedalmond"
  > -->
    <!-- <div class="grid text-center">
      <div class="g-col-4 mt-4"><h1 class="text-center">Animesss</h1></div>
      <div class="g-col-4 mt-4">
        <img alt="Vue logo" src="@/assets/logo.svg" style="width: 100px" />
      </div>
      <div class="g-col-4 mt-5">
        <router-view />
      </div>
    </div> -->

    <!--  -->
    <div class="container text-center">
    <div class="row d-block mt-5">
      <!-- Headers -->
      <div class="col mb-5">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid justify-content-center">
            <a class="navbar-brand" href="/">
              <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
              Titles
            </a>
          </div>
        </nav>
      </div>
      <!-- en cierto breakPoint en 770 poner justify-content-center
        y bajar los margenes entre bloques -->
      <div class="col mb-5">
        <router-view />
      </div>

      <!-- Footer -->
      <div class="col mb-5">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <!-- <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a> -->
            <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="#">
              <b-icon icon="whatsapp"></b-icon>
              </a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#">
              <b-icon icon="linkedin"></b-icon>
            </a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#">
              <b-icon icon="instagram"></b-icon>
            </a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#">
              <b-icon icon="youtube"></b-icon>
            </a></li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
  <!-- </main> -->
</template>

<script>
import NavBar from "@/modules/shared/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.icon-footer {
  cursor: pointer;
}

.icon-footer:hover {
  transform: scale(1.2);
}

.icon-footer g:hover {
  color: black;
}

.card-img-top {
  height: 100%;
  /* Puedes ajustar esta altura según tus necesidades */
}
</style>
