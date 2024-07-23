
export default {
    name: 'pokemon',
    component: () => import(/* webpackChunkName: "PokemonLayout" */ '../layouts/PokemonLayout.vue'),
    children: [
        {
            path: '',
            name: 'pokemon',
            component: () => import(/* webpackChunkName: "Pokemon" */ '../pages/Pokemon.vue'),
            // component: () => import(/* webpackChunkName: "DbzPersonajes" */ '../pages/DbzPersonajes.vue'),
        }
    ]
}