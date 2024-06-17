<template>

  <section class="container text-center">
    <div class="row d-block">
      <div class="col mb-5">
        <div class="row">


          <div class="col-12 d-flex justify-content-center">
            <div class="col-12">
              <p>Message is: {{ search }}</p>
              <InputSearch placeholder="Buscar Akatsuki" v-model="search" />
              <input v-show="false" v-model="search" />
            </div>
          </div>

          <div class="col-md-12">
            <div class="content d-flex flex-wrap justify-content-around">
              <div v-if="akatsukis.error">
                <h3>
                  {{ akatsukis.error }}
                </h3>
              </div>

              <div class="d-flex flex-wrap justify-content-around ">
                <b-card v-for="item in akatsukis" :key="item.id" :title="item.name" :img-src="item.images[0] ?? '/src/assets/img/no-image-available.png'
                  " :img-alt="item.name" img-top tag="article" class="mt-5 m-4">

                  <b-card-text>
                    <ul class="info">
                      <li v-for="(familia, key) of item.family">
                        <b> {{ key }}: </b>
                        {{ familia }}
                      </li>
                    </ul>

                    <div>
                      <b-button v-if="item.jutsu" block variant="secondary" v-b-modal.modal-jutsu
                        @click="jutsus(item)">Jutsu</b-button>
                    </div>
                  </b-card-text>
                </b-card>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal de Jutsus -->
        <div>
          <b-modal id="modal-jutsu" modal-cancel hide-footer>
            <template #modal-header>
              <div class="modal-title mx-auto">
                <h2>
                  Jutsus: {{ akatsuki }}
                  <b> </b>
                </h2>
                <ul class="info">
                  <li v-for="item in jutsu">{{ item }}</li>
                </ul>
              </div>
            </template>
          </b-modal>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAkatsukis, searchGetAkatsukis } from "../../../helpers/naruto/getAkatsukis";
import InputSearch from "../../shared/components/InputSearch.vue";

export default {
  name: "NarutoAkatski",
  components: {
    InputSearch,
  },
  data() {
    return {
      akatsuki: '',
      akatsukis: [],
      imagen: 0,
      jutsu: [],
      search: '',
      totalAkatsuki: 0,
    };
  },

  methods: {
    async mixAkatsuki() {

      const resp = await getAkatsukis();
      if (resp.error) return (this.akatsukis = resp);
      this.akatsukis = resp.akatsuki;
      this.totalakatsuki = this.akatsukis.total;
      //   this.totalakatsukiss =   Math.floor(this.akatsukis.total / 20)

    },

    jutsus(item) {
      this.jutsu = item.jutsu;
      this.akatsuki = item.name;
    },

    // Recbimos el nombre para la comparacion
    async searchAkatsuki(name) {

      const resp = await searchGetAkatsukis(name);
      if (resp.error) return this.akatsukis = resp;
      this.akatsukis = resp.akatsuki;

    },

  },

  watch: {
    search(event) {
      this.searchAkatsuki(event);

    }
  },

  mounted() {
    this.mixAkatsuki();
  },
};
</script>

<style lang="scss" scoped>
.info {
  list-style: none;
  padding: 0px;
}
</style>
