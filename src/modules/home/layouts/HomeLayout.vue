<template>
  <div class="container text-center">
    <div class="row d-block mt-5">
      <!-- Headers -->
      <div class="col mb-5">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid justify-content-center">
            <a class="navbar-brand" href="/">
              <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
              Animes
            </a>
          </div>
        </nav>
      </div>
      <div class="col mb-5">
        <router-view />
      </div>

      <!-- Footer -->
      <div class="col mb-5">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="https://api.whatsapp.com/send/?phone=3015977587" target="_blank">
                <b-icon icon="whatsapp"></b-icon>
              </a></li>
            <li class="ms-3"><a class="text-body-secondary" href="http://www.linkedin.com/in/jesus-vidal-706012153" target="_blank">
                <b-icon icon="linkedin"></b-icon>
              </a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://github.com/Jesus-David-Vidal-Ramirez" target="_blank">
                <b-icon icon="github"></b-icon>
              </a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#">
                <b-icon icon="instagram"></b-icon>
              </a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://www.youtube.com/channel/UCdrlZ34qdmGVHFigQHUzXAw" target="_blank">
                <b-icon icon="youtube"></b-icon>
              </a></li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/modules/shared/components/NavBar.vue";

export default {
  name: "HomeLayout",
  components: {
    NavBar,
  },
  props: {
    // title: {
    //   type: String,
    //   default: 'Animes' 
    // },
  },
  data() {
    return {

    }
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
