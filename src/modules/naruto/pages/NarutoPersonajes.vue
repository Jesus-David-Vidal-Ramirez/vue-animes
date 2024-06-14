<template>
  <!-- <div class="d-flex justify-content-center">
    <section>
      <InputSearch placeholder="Buscar Personajes" />
      <div class="scrollarea m-4 p-3">
        <div v-if="personaje.error">
          <h3>
            {{  personaje.error }}
          </h3>
        </div>
        
        <div>
          <b-card
            no-body
            class="overflow-hidden m-4"
            style="max-width: 550px"
            v-for="(item, index) in personaje.characters"
            :key="item.id"
          >
            <b-row no-gutters>
              <b-col md="6" class="d-flex align-items-center">
                <div>
                  <b-card-img
                    :src="item.images[imagen] ??
                     '/src/assets/img/no-image-available.png'"
                    :alt="item.name"
                    :key="item.id"
                    class="rounded-0 m-4 img"
                  ></b-card-img>
                  <div v-if="item.images.length >= 2">
                    <b-icon
                      icon="arrow-right-circle"
                      variant="secondary"
                      class="icon"
                      @click="nextImagen(index)"
                    ></b-icon>
                  </div>
                </div>
              </b-col>
              <b-col md="6">
                <b-card-body :title="item.name" class="pt-4">
                  <b-card-text class="pt-3">
                    <h6>Familia</h6>
                    <ul class="info">
                      <li v-for="(familia, key) of item.family">
                        <b> {{ key }}: </b>
                        {{ familia }}
                      </li>
                    </ul>
                    <h6>Jutsu</h6>
                    <ul>
                      <li v-for="jutsu of item.jutsu.slice(0, 5)">
                        {{ jutsu }}
                      </li>
                    </ul>
                    <p>
                      <b> Clan: </b>
                      {{ item.personal.clan ?? "Desconocido" }}
                    </p>
                  </b-card-text>
                  <b-card-footer class="h2 mb-0">
                    <b-icon 
                      icon="exclamation-circle-fill"
                      variant="secondary"
                      class="m-2 icon-footer"
                    ></b-icon>
                    <b-icon 
                      icon="heart-fill"
                      variant="secondary"
                      class="m-2 icon-footer"
                    ></b-icon>
                  </b-card-footer>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>

      </div>
    </section>
  </div> -->


  <section class="container text-center">
    <div class="row d-block mt-5">
      <div class="col mb-5">
        <div class="row">

          <div class="col-12 d-flex justify-content-center">
            <div class="col-8">
              <p>Message is: {{ search }}</p>
              <InputSearch placeholder="Buscar Personajes" v-model="search" />
              <input v-show="false" v-model="search" />
            </div>
          </div>

          <div class="col-md-12 derecha">
            <div class="content d-flex flex-wrap justify-content-around">

              <div v-if="personaje.error">
                <h3>
                  {{ personaje.error }}
                </h3>
              </div>

              <div>
                <b-card no-body class="m-4" style="max-width: 550px" v-for="(item, index) in personaje.characters"
                  :key="item.id">
                  <b-row no-gutters>
                    <b-col md="6" class="d-flex justify-content-center align-items-center">
                      <div>
                        <b-card-img :src="item.images[imagen] ??
                          '/src/assets/img/no-image-available.png'" :alt="item.name" :key="item.id"
                          class="img rounded-0"></b-card-img>
                        <div v-if="item.images.length >= 2">

                          <svg @click="nextImagen(index)" xmlns="http://www.w3.org/2000/svg" width="46" height="46"
                            fill="currentColor" class="icon bi bi-arrow-right-square" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                          </svg>
                          <!-- <b-icon icon="arrow-right-circle" variant="secondary" class="icon"
                            @click="nextImagen(index)"></b-icon> -->
                        </div>
                      </div>
                    </b-col>
                    <b-col md="6">
                      <b-card-body :title="item.name" class="pt-4">
                        <b-card-text class="pt-3">
                          <h6>Familia</h6>
                          <ul class="info">
                            <li v-for="(familia, key) of item.family">
                              <b> {{ key }}: </b>
                              {{ familia }}
                            </li>
                          </ul>
                          <h6>Jutsus</h6>
                          <ul v-if="item.jutsu">
                            <li v-for="jutsu of item.jutsu.slice(0, 5)">
                              {{ jutsu }}
                            </li>
                          </ul>
                          <p>
                            <b> Clan: </b>
                            {{ item.personal.clan ?? "Desconocido" }}
                          </p>
                        </b-card-text>
                        <b-card-footer class="h2 mb-0">
                          <b-icon icon="exclamation-circle-fill" variant="secondary" class="m-2 icon-footer"></b-icon>
                          <b-icon icon="heart-fill" variant="secondary" class="m-2 icon-footer"></b-icon>
                        </b-card-footer>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
              <!-- <div class="card mt-4 mx-3" style="width: 20rem" v-for="(item, index) in personaje.characters" :key="item.id"> 
                <div class="mt-3">

                  <img
                    :src="item.images[imagen] ??
                          '/src/assets/img/no-image-available.png'" :alt="item.name" :key="item.id"
                          
                    class="img-fluid rounded-start" alt="..." />
                    <div class="mt-3" v-if="item.images.length >= 2">
                      <i class="bi bi-arrow-right-square"  @click="nextImagen(index)"></i>
                         
                    </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{  item.name }}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getPersonajes, searchGetPersonajes } from "../../../helpers/naruto/getPersonajes";
import InputSearch from "../../shared/components/InputSearch.vue";
import Pagination from "../../shared/components/Pagination.vue";

export default {
  name: "NarutoPersonajes",
  components: {
    InputSearch,
    Pagination,
  },
  props: {
    // imagen: {
    //     type: Number,
    //     default: 0
    // },
  },
  data() {
    return {
      search: '',
      personaje: [],
      imagen: 0,
      totalPersonajes: 0,
    };
  },

  methods: {

    async mixPersonajes() {
      const resp = await getPersonajes();
      console.log({ resp });
      if (resp.error) return this.personaje = resp;

      this.personaje = resp;
      this.totalPersonajes = this.personaje.total;
      //   this.totalPersonajes =   Math.floor(this.personaje.total / 20)
      console.log({ personaje: this.personaje });
    },

    nextImagen(index) {
      this.personaje.characters[index].images.reverse()[0];
    },

    // Recbimos el nombre para la comparacion
    async searchPersonajes(name) {

      const resp = await searchGetPersonajes(name);
      console.log({ respuesta: resp });
      if (resp.error) return this.personaje = resp;

      this.personaje = resp;
      // this.totalPersonajes = this.personaje.total;

      // console.log({ personaje: this.personaje });
    },

    // search(event) {

    //   console.log(event);
    //   console.log('method');
    //   // this.isValidQuestion = false

    //   // if (!value.includes('?')) return

    //   // this.isValidQuestion = true

    //   // TODO: Realizar petición http
    //   // this.getAnswer()
    //   }
  },

  watch: {
    search(event) {

      // console.log(this.search);
      const data = this.searchPersonajes(event);

      console.log(event);
      console.log(data);
      // this.isValidQuestion = false

      // if (!value.includes('?')) return

      // this.isValidQuestion = true

      // TODO: Realizar petición http
      // this.getAnswer()
    }
  },

  mounted() {
    this.mixPersonajes();
  },
};
</script>

<style lang="scss" scoped>
.info {
  list-style: none;
  padding: 0px;
}

.icon {
  cursor: pointer;
  width: 100px;
  height: 20px;
  margin-left: 40px;
}

.icon-footer {
  cursor: pointer;
}

.icon-footer:hover {
  transform: scale(1.2);
}

.icon-footer:hover {
  color: black;
}

.img {
  margin: 1.5rem
}

@media (max-width: 769px) {

  .img {
    margin: 2rem 0px 0px;
    // margin-top: 2rem;
    // margin-left: 0px;
  }

  .icon {
    margin: 2rem 0px 0px;
    // margin-left: 0px;
  }
}
</style>
