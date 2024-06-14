<template>
  <div class="col-12 d-flex justify-content-center">
    <section>
      <!-- <InputSearch placeholder="Buscar Clan" /> -->
      <div class="scrollarea m-4 p-3">
        <div v-if="clanes.error">
          <h3>
            {{ clanes.error }}
          </h3>
        </div>
        <div>
          <b-card
            no-body
            class="overflow-hidden m-4"
            style="max-width: 550px"
            v-for="(item, index) in clanes.clans"
            :key="item.id"
          >
            <b-row no-gutters>
              <b-col class="">
                <div class="m-4">
                  <h1>{{ item.name }}</h1>

                  <img
                    alt="Vue logo"
                    src="@/assets/img/naruto/clansNaruto.png"
                    style="width: 250px"
                  />
                  <footer class="h1 mx-5 my-4">
                    <b-icon
                      v-b-modal.modal-lg
                      icon="person-fill"
                      variant="secondary"
                      class="icon-footer m-2"
                      @click="personajesByClan(item)"
                    ></b-icon>
                  </footer>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </div>

        <!-- <Pagination/> -->
      </div>

      <div>
        <b-modal id="modal-lg" size="lg" modal-cancel hide-footer>
          <template #modal-header>
            <div class="modal-title mx-auto ">
              <h2>
                Miembros del clan:
                <b>
                  {{ clan }}
                </b>
              </h2>
            </div>
          </template>

          <div class="d-flex flex-wrap" >
            <b-card v-for="personaje in personajes" :key="personaje.id"
              :title="personaje.name"
              :img-src="personaje.images[0] ?? '/src/assets/img/no-image-available.png'"
              :img-alt="personaje.name"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2 p-5 m-4 col-6"
            >
              <b-card-text>
                <ul class="info">
                      <li v-for="(familia, key) of personaje.family">
                        <b> {{ key }}: </b>
                        {{ familia }}
                      </li>
                    </ul>
              </b-card-text>
            </b-card>
          </div>
        </b-modal>
      </div>
    </section>
  </div>
</template>

<script>
import { getClanes } from "../../../helpers/naruto/getClanes";
import { getPersonajesByIds } from "../../../helpers/naruto/getPersonajes";
import InputSearch from "../../shared/components/InputSearch.vue";

export default {
  name: "NarutoPersonajes",
  components: {
    InputSearch,
  },
  data() {
    return {
      clanes: [],
      personajes: [],
      clan: "",
      imagen: 0,
      totalClanes: 0,
      img: "@/assets/img/naruto/clansNaruto.png",
    };
  },

  methods: {
    async mixClanes() {
      const resp = await getClanes();

      if (resp.error) return (this.clanes = resp);

      this.clanes = resp;
      this.totalClanes = this.clanes.total;
      //   this.totalclaness =   Math.floor(this.clanes.total / 20)
      console.log({ clanes: this.clanes });
    },

    async personajesByClan(item) {
      const { characters, name } = item;
      const personajesArrResp = getPersonajesByIds(characters);

      if (personajesArrResp.error) return (this.personajes = personajesArrResp);

      // personajesArrResp
      this.personajes = [];
      this.clan = name;
      console.log({ name, clan: this.clan });
      personajesArrResp
        .then((data) => {
          data.forEach((personaje) => {
            this.personajes.push(personaje.data);
          });
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });

      console.log({ persona: this.personajes });

      // this.personajes.forEach( personaje => {
      //   console.log( personaje );
      //   console.log( 'AJA NOJODA' );
      // });
      // this.personajes.map( i => {
      //   console.log( i );
      // })
      // console.log( { personajes: this.personajes });
    },

    // nextImagen(index) {
    //   this.personaje.characters[index].images.reverse()[0];
    // },
  },

  mounted() {
    this.mixClanes();
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
carousel-control-prev {
  background-color: transparent;
}
carousel-control-next {
  background-color: transparent;
}

.info {
  list-style: none;
  padding: 0px;
}
</style>
