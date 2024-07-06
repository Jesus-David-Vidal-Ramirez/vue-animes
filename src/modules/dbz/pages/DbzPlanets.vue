<template>
    <div class="col-12 d-flex justify-content-center">
        <section>
            <InputSearch placeholder="Buscar Planeta" v-model="search"/>
            <input v-show="false" v-model="search" />
            <div class="scrollarea m-4 p-3">
                <div v-if="planets.error">
            <h3>
              {{ planets.error }}
            </h3>
          </div>
                <div>
                    <b-card no-body class="overflow-hidden m-4" style="max-width: 550px"
                        v-for="(item, index) in planets.items" :key="item.id">
                        <b-row no-gutters>
                            <b-col class="">
                                <div class="m-4">
                                    <h1> {{ item.name }}</h1>
                                    <span>Destruido: {{  item.isDestroyed ? 'Si':'No' }}</span>
                                    <b-card-img :src="item.image ??
                                        '/src/assets/img/no-image-available.png'" :alt="item.name" :key="item.id"
                                        class="img rounded-0"></b-card-img>
                                        <b-card-text class="pt-3">
                                            {{  item.description }}
                                        </b-card-text>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>

                <!-- <Pagination/> -->
            </div>
        </section>
    </div>
</template>
<script>
import { getPlanetas } from '../../../helpers/dbz/getPlanetas';
import InputSearch from '../../shared/components/InputSearch.vue';

export default {
    name: 'DbzPlanets',
    components:{
        InputSearch
    },
    data() {
        return {
            planets: [],
            search: "",

            // personajes: [],
            // imagen: 0,
            // totalClanes: 0,
            // img: "@/assets/img/naruto/clansNaruto.png",
        };
    },

    methods: {
        async mixPlanets() {
            const resp = await getPlanetas();

            if (resp.error) return (this.planets = resp);

            this.planets = resp;
            console.log(this.planets);
            // this.totalClanes = this.clanes.total;
            //   this.totalclaness =   Math.floor(this.clanes.total / 20)

        },

        // async personajesByClan(item) {

        //     const { characters, name } = item;
        //     const personajesArrResp = getPersonajesByIds(characters);

        //     if (personajesArrResp.error) return (this.personajes = personajesArrResp);


        //     this.personajes = [];
        //     this.clan = name;
        //     personajesArrResp
        //         .then((data) => {
        //             data.forEach((personaje) => {
        //                 this.personajes.push(personaje.data);
        //             });
        //         })
        //         .catch((error) => {
        //             console.error("Error al obtener los datos:", error);
        //         });
        // },

    },
    watch: {
        search(event) {
      console.log( event);
    //   this.searchPersonajes(event);
      
    }
    },
    mounted() {
        this.mixPlanets();
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

.info {
    list-style: none;
    padding: 0px;
}
</style>