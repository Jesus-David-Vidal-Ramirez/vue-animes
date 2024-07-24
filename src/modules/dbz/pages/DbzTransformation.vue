<template>
  <section class="container text-center">

    <div class="content d-flex flex-wrap justify-content-center align-items-center">
      <b-card no-body class="m-2" style="max-width: 250px" v-for="(item, index) in personajes" :key="item.id">
        <h4>{{ item.name }}</h4>
        <b-card-img :src="item.image ??
          '@/public/img/no-image-available.png'" :alt="item.name" :key="item.id" class="img rounded-0"></b-card-img>
        <b-card-body>
          <b> KI {{ item.ki }} </b>
        </b-card-body>
        <!-- TODO: Agregar modal para ver la descripcion del personaje -->
        <b-card-footer class="h2 mb-0">
          <b-icon icon="exclamation-circle-fill" variant="secondary" class="m-2 icon-footer"></b-icon>
        </b-card-footer>
      </b-card>
    </div>

  </section>
</template>

<script>
import { getTransformations } from '../../../helpers/dbz/getTransformation';
import InputSearch from '../../shared/components/InputSearch.vue';

export default {
  name: 'DbzTransformation',
  components: {
    InputSearch
  },

  data() {
    return {
      personajes: [],
      search: ""
    }
  },

  methods: {
    async mixTransformation() {

      const resp = await getTransformations();
      if (resp.error) return (this.personajes = resp);
      this.personajes = resp;
      console.log(this.personajes);
      // this.totalakatsuki = this.personajes.total;

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