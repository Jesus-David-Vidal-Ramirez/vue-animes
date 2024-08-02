<template>
  <section class="container text-center">
    <div class="row d-block mt-5">
      <div class="col mb-5">
        <div class="row">
          <!-- <div v-if="personajes.items">
            <Pagination 
            :rows=personajes.meta.totalPages
            :perPage=personajes.meta.currentPage
            :currentPage=personajes.meta.totalPages
            @click="onPagina"
            ></Pagination>
          </div> -->
          <div>
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link previous" aria-label="Previous" @click="prevPagination(personajes.links.previous)">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link next" aria-label="Next" @click="nextPagination(personajes.links.next)">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <div class="col-8">
              <InputSearch placeholder="Buscar Personajes" v-model="search" />
              <input v-show="false" v-model="search" />
            </div>
          </div>

          <div class="col-md-12 derecha">
            <div class="content d-flex flex-wrap justify-content-around">
              <div v-if="!personajes.items">
                <h3>
                  Informacion no encontrada
                </h3>
              </div>

              <div>
                <b-card no-body class="m-4" style="max-width: 550px" v-for="(item, index) in personajes.items"
                  :key="item.id">
                  <b-row no-gutters>
                    <b-col md="6" class="d-flex justify-content-center align-items-center">
                      <div>
                        <b-card-img :src="item.image ??
                          '@/../img/no-image-available.png'" :alt="item.name" :key="item.id"
                          class="img rounded-0"></b-card-img>
                      </div>
                    </b-col>
                    <b-col md="6" class="my-auto">
                      <b-card-body class="pt-4">
                        <h4> {{ item.name }} ( {{ item.race }})</h4>

                        <b-card-text v-if="item.description.length <= 400" class="pt-3">
                          {{ item.description }}
                        </b-card-text>

                        <b-card-text v-else class="pt-3">
                          {{ item.description.slice(0, getSlice(item.id)) }}.
                          <br>
                          <span class="badge text-bg-info" @click="verDescripcion(item.id)" :id="item.id"> {{
                            getDescripcion(item.id) }} </span>
                        </b-card-text>

                        <b-card-footer class="h2 mb-0">
                          <h6 class="mt-3">Poder Maximo: <span v-if="item.maxKi != 'unknown'">{{ item.maxKi }} </span>
                            <span v-else>Desconocido</span> </h6>
                          <h6>Poder Minimo: <span v-if="item.ki != 'unknown'">{{ item.ki }} </span> <span
                              v-else>Desconocido</span> </h6>
                          <b-icon icon="heart-fill" :variant="getVariant(item.id)" class="m-2 icon-footer"
                            @click="stateFavorite(item.id)" :id="item.id"></b-icon>
                        </b-card-footer>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getPaginationPersonaje, getPersonajeSearch, getPersonajes } from "../../../helpers/dbz/getPersonajes";
import InputSearch from "../../shared/components/InputSearch.vue";
import Pagination from "../../shared/components/Pagination.vue";

export default {
  name: "DbzPersonajes",
  components: {
    InputSearch,
    Pagination,
  },
  props: {

  },
  data() {
    return {
      search: '',
      personajes: [],
      imagen: 0,
      totalPersonajes: 0,
      slice: [],
      variant: [],
      ver: []
    };
  },

  methods: {

    async mixPersonajes() {
      const resp = await getPersonajes();
      if (resp.error) return this.personajes = resp;

      this.personajes = resp;
    },

    async nextPagination(url) {

      const data = await getPaginationPersonaje(url);

      if (data.error) return "";
      this.personajes = data;

    },

    async prevPagination(url) {

      const data = await getPaginationPersonaje(url);

      if (data.error) return "";

      this.personajes = data;

    },

    getSlice(index) {
      return this.slice[index] ? -1 : 400;
    },

    getDescripcion(index) {
      return this.ver[index] ? 'Ver Menos' : 'Ver Mas...';
    },

    verDescripcion(index) {
      this.$set(this.slice, index, !this.slice[index]);
      this.$set(this.ver, index, !this.ver[index]);
    },

    getVariant(index) {
      return this.variant[index] ? 'danger' : 'secondary';
    },

    stateFavorite(index) {
      this.$set(this.variant, index, !this.variant[index]);
    },

    // Recbimos el nombre para la comparacion
    async searchPersonajes(name) {

      const resp = await getPersonajeSearch(name);
      console.log({ respuesta: resp });
      if (resp.error) return this.personajes = resp;

      this.personajes = { items: resp, links: { previous: null, next: null } };

    },

  },

  watch: {
    search(event) {
      this.searchPersonajes(event);
    }
  },

  mounted() {
    this.mixPersonajes();
  }
}
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

.badge {
  cursor: pointer;
  margin-top: 1.5em;
  transform: scale(1.1);
}

.badge:hover {
  transform: scale(1.2);
}

.pagination {
  cursor: pointer;
  margin-top: 1.5em;
  transform: scale(1.1);
}

.next:hover {
  transform: scale(1.2);
}

.previous:hover {
  transform: scale(1.2);
}

// .previous:hover {
//   transform: scale(1.2);
// }

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
