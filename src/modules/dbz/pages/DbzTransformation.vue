<!-- <template>

    <section class="container text-center">
        <div class="row d-block">
            <div class="col mb-5">
                <div class="row">


                    <div class="col-12 d-flex justify-content-center">
                        <div class="col-12">
                            <InputSearch placeholder="Buscar Transformacion" v-model="search" />
                            <input v-show="false" v-model="search" />
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="content d-flex flex-wrap justify-content-around">
                            <div v-if="personajes.error">
                                <h3>
                                    {{ personajes.error }}
                                </h3>
                            </div>

                            <div class="d-flex flex-wrap justify-content-around ">
                                <b-card v-for="item in personajes" :key="item.id" :title="item.name" 
                                :img-src="item.image" :img-alt="item.name" img-top tag="article" class="mt-5 m-4"
                                
                                >
                                </b-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> -->

<template>


    <section class="container text-center">
      
      <!-- <b-card   v-for="(item, index) in personaje.characters" -->
      <!-- <div class="row d-block mt-5"> -->
        <!-- <div class="col mb-5"> -->
          <!-- <div class="row"> -->
            <!-- <div v-if="personajes.items">
              <Pagination 
              :rows=personajes.meta.totalPages
              :perPage=personajes.meta.currentPage
              :currentPage=personajes.meta.totalPages
              @click="onPagina"
              ></Pagination>
            </div> -->
       
            <div class="col-12 d-flex justify-content-center">
              <div class="col-8">
                <InputSearch placeholder="Buscar Trasnformation" v-model="search" />
                <input v-show="false" v-model="search" />
              </div>
            </div>
  
            <!-- <div class="col-md-12 derecha"> -->
              <div class="content d-flex flex-wrap justify-content-center">
  
                <!-- <div> -->
                  <b-card no-body class="m-4" style="max-width: 550px" v-for="(item, index) in personajes"
                  :key="item.id"  >
                    <!-- <b-row no-gutters> -->
                      <b-col md="6" class="d-flex justify-content-center align-items-center">
                        <div>
                            <b-title>{{ item.name }}</b-title>
                          <b-card-img :src="item.image ??
                            '/src/assets/img/no-image-available.png'"
                             :alt="item.name" :key="item.id"
                            class="img rounded-0"></b-card-img>
                            <b-card-body>
                                ki {{ item.ki }}
                            </b-card-body>
                        </div>
                      </b-col>
                      
                    <!-- </b-row> -->
                  </b-card>
                <!-- </div> -->

              <!-- </div> -->
              
            <!-- </div> -->
          <!-- </div> -->
        <!-- </div> -->
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
            console.log( this.personajes );
            // this.totalakatsuki = this.personajes.total;


        },
    },
    watch: {
        search(newValue, oldValue) {
            console.log( newValue + '' + oldValue);
        }
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
</style>