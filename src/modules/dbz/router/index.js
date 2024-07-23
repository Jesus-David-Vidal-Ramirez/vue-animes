export default {
    name: 'dbz',
    component: () => import (/* webpackChunkName: "DbzLayout"*/ '../layouts/DbzLayout.vue'),
    children: [
        {
            path: '',
            name: 'dbz',
            component: () => import(/* webpackChunkName: "DbzPersonajes" */ '../pages/DbzPersonajes.vue'),
        },
        {
            path: '/dbzPlanet',
            name: 'dbzPlanet',
            component: () => import(/* webpackChunkName: "DbzPlantes" */ '../pages/DbzPlanets.vue'),
        },
        {
            path: '/dbzTransformation',
            name: 'dbzTransformation',
            component: () => import(/* webpackChunkName: "DbzTransformation" */ '../pages/DbzTransformation.vue'),
        },
        // { 
        //     path: '/:pathMatch(.*)*', 
        //     component: () => import(/* webpackChunkName: "NoPageFoundDbz" */ '../pages/Dbz.vue')
        // },
    ]
}