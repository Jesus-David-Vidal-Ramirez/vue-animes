<template>
  <section class="container text-center">

    <div class="content d-flex flex-wrap justify-content-center align-items-center">
      <b-card no-body class="m-2" style="max-width: 250px" v-for="(item, index) in personajes" :key="item.id">
        <h4>{{ item.name }}</h4>
        <h4>{{ item.id }}</h4>
        <b-card-img :src="item.image ??
          '@/../img/no-image-available.png'" :alt="item.name" :key="item.id" class="img rounded-0"></b-card-img>
        <b-card-body>
          <b> KI {{ item.ki }} </b>
        </b-card-body>
        <!-- TODO: Agregar modal para ver la descripcion del personaje -->
        <b-card-footer class="h2 mb-0">
          <b-icon 
          v-b-modal.modal-lg
          :id="item.id" 
          @click="getPersonajeTransformation(item.id)" 
          icon="exclamation-circle-fill" 
          variant="secondary" 
          class="m-2 icon-footer"></b-icon>
          <!-- <b-icon icon="heart-fill" 
          :variant="getVariant(item.id)" 
          class="m-2 icon-footer" 
          @click="stateFavorite(item.id)" 
          :id="item.id"></b-icon> -->
        </b-card-footer>
      </b-card>
    </div>

    <!-- Modal Donde se visualizan los miembros del clan -->
    <div>
      <b-modal id="modal-lg" size="lg" modal-cancel hide-footer>
        <template #modal-header>
          <div class="modal-title mx-auto ">
            <h2>
              <b>
                {{ personaje?.name}} ( {{ personaje?.character?.race }})
              </b>
            </h2>
          </div>
        </template>

        <div class="d-flex flex-wrap">
          <b-card 
            tag="article" class="mb-2 p-5 m-4" >
            <!-- style="max-width: 100%" class="mb-2 p-5 m-4 col-6" -->
            <b-card-title>
            
            </b-card-title>
            <b-card-img style="max-width: 20rem" :src="personaje?.image ??
          '@/../img/no-image-available.png'" :alt="personaje?.name" :key="personaje?.id" class="img rounded-0"></b-card-img>
            <b-card-text>
              {{  personaje?.character?.description }}
              <ul class="info">
                <!-- <li v-for="(familia, key) of personaje.family">
                  
                </li> -->
              </ul>
            </b-card-text>
          </b-card>
        </div>
      </b-modal>
    </div>

  </section>
</template>

<script>
import { getTransformations, getTransformationsSearch } from '../../../helpers/dbz/getTransformation';
import InputSearch from '../../shared/components/InputSearch.vue';

export default {
  name: 'DbzTransformation',
  components: {
    InputSearch
  },

  data() {
    return {
      personajes: [],
      personaje: [],
      search: "",
      variant: [],
    }
  },

  methods: {
    async mixTransformation() {

      const resp = await getTransformations();
      if (resp.error) return (this.personajes = resp);
      this.personajes = resp;

    },

    async getPersonajeTransformation( id ) {

      console.log( 'id' + id);
      const resp = await getTransformationsSearch(id);
      if (resp.error) return (this.personajes = resp);
      console.log(resp);
      this.personaje = resp;
      // console.log( this.personaje );

    },
    getVariant(index){
      return this.variant[index] ? 'danger' : 'secondary';
    },

  },

  mounted() {
    this.mixTransformation();
  },

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
</style>