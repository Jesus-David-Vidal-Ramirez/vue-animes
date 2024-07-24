<template>
  <section class="d-flex flex-wrap justify-content-center">
    <div class="card mt-4 mx-3 nav" style="width: 18rem" v-for="link of linksImage">
          <img 
            
            :src="link.img"
            :alt="link.alt"
            class="img-fluid rounded-start" alt="..." />

          <div class="card-body">
            <h5 class="card-title"> {{  link.title }}</h5>
            <p class="card-text">
              {{ link.descripcion }}
            </p>
            <router-link :to="link.path">
              <a class="btn btn-primary">
                {{ link.title }}
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </a>
            </router-link>
          </div>
        </div>

    <!-- <div class="container">
      <b-card-group class="card">
        <b-card
          class="card-img"
          v-for="link of linksImage"
          :key="link.id"
          :title="link.title"
          :img-src="link.img"
          :img-alt="link.alt"
          img-top
        >
          <b-card-text>
            {{ link.descripcion }}
          </b-card-text>
          <template>
            <router-link :to="link.path">
              <a>
                {{ link.title }}
              </a>
            </router-link>
          </template>
        </b-card>
      </b-card-group>
    </div> -->
  </section>
</template>

<script>
// import imageNames from '@/assets/imgApi';
import searchImgApi from "@/utils/searchImgApi";

export default {
  name:'navBar',
  linksImage: {
    type: Array,
    required: true,
  },
  data() {
    return {
      linksImage: [
        {
          img: '../public/img/naruto.png',
          descripcion: "Naruto es una serie de manga escrita e ilustrada por Masashi Kishimoto. La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea, con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros",
          alt: "Naruto",
          path: "/naruto",
          title: "Naruto",
          id: 1,
        },
        {
          img: '../public/img/Dbz.png',
          descripcion: "Dragon Ball Z sigue la historia de Son Goku, un saiyajin que, en su vida adulta, defiende la Tierra de diversas amenazas.",
          alt: "Dragon Ball Z",
          path: "/dbz",
          title: "Dragon Ball Z",
          id: 2,
        },
        {
          img: '../public/img/Pokemon.png',
          descripcion: "sigue las aventuras de Ash, sus amigos y su grupo de criaturas lindas y sumamente hábiles.",
          alt: "Pokemon",
          path: "/pokemon",
          title: "Pokemon",
          id: 3,
        },
        // {
        //   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/164.svg",
        //   descripcion: "sigue las aventuras de Ash, sus amigos y su grupo de criaturas lindas y sumamente hábiles.",
        //   alt: "Pokemon",
        //   path: "/pokemon",
        //   title: "Pokemon",
        //   id: 4,
        // },
        // {
        //   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",
        //   descripcion: "sigue las aventuras de Ash, sus amigos y su grupo de criaturas lindas y sumamente hábiles.",
        //   alt: "Pokemon",
        //   path: "/pokemon",
        //   title: "Pokemon",
        //   id: 5,
        // },
        // {
        //   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/112.svg",
        //   descripcion: "sigue las aventuras de Ash, sus amigos y su grupo de criaturas lindas y sumamente hábiles.",
        //   alt: "Pokemon",
        //   path: "/pokemon",
        //   title: "Pokemon",
        //   id: 6,
        // },
        // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
        // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
        // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/164.svg",
        // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",
        // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",
        // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",
      ],
    };
  },
  mounted() {
    // this.imageNames = imageNames;

    console.log(searchImgApi);
  },
};
</script>

<style lang="scss" scoped>

// .card {
//   justify-content: center;
//   align-items: center;
//   height: auto;
// }

// div {
//   padding: 20px;
// }

// img {
//   width: 200px;
// }
// div a {
//     font-weight: bold;
//     color: Black;
//     border: 0px;
// }
</style>
