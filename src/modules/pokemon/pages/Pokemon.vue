<template>

    <section class="container text-center">
      <div class="row d-block">
        <div class="col mb-5">
          <div class="row">
  
  
            <div class="col-12 d-flex justify-content-center">
              <div class="col-12">
             
              </div>
            </div>
  
            <div class="col-md-12">
              <div class="content d-flex flex-wrap justify-content-around">
                <!-- <div v-if="akatsukis.error">
                  <h3>
                    {{ akatsukis.error }}
                  </h3>
                </div> -->
  
                <div class="d-flex flex-wrap justify-content-around ">
                   
                  <b-card 
                  v-for="item in pokemons" 
                  :key="item.id" 
                  :title="item.name" 
                  :img-src="item.sprites.other.dream_world.front_default ?? '/src/assets/img/no-image-available.png'" 
                  :img-alt="item.name" 
                  img-top tag="article" 
                  class="mt-5 m-4">
  
                    <b-card-text>
                      <!-- <ul class="info">
                        <li v-for="(familia, key) of item.family">
                          <b> {{ key }}: </b>
                          {{ familia }}
                        </li>
                      </ul> -->
  
                      <div>
                        <!-- <b-button v-if="item.jutsu" block variant="secondary" v-b-modal.modal-jutsu
                          @click="jutsus(item)">Jutsu</b-button> -->
                      </div>
                    </b-card-text>
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
import SpeciePokemon from "../components/SpeciPokemon.vue";
import { getPokemons } from "../../../helpers/pokemon/getPokemons";
export default {
    name: "Pokemon",
    components: {
        SpeciePokemon
    },
    data() {
        return {
            pokemons: []
        }
    },
    methods: {
        async mixPokemons() {
            const resp = await getPokemons();
            
            console.log(resp);
            if (resp.error) return (this.pokemons = resp);
            this.pokemons = resp;


        },
    },

    mounted() {
        this.mixPokemons();
    },
}
</script>

<style lang="scss" scoped></style>