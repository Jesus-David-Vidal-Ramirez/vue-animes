
export default {
    name: 'naruto',
    component: () => import (/* webpackChunkName: "NarutoLayout"*/ '../layouts/NarutoLayout.vue'),
    children: [
        {
            path: '',
            name: 'naruto',
            component: () => import(/* webpackChunkName: "NarutoPersonajes" */ '../pages/NarutoPersonajes.vue'),
        },
        {
            path: '/clans',
            name: 'clans',
            component: () => import(/* webpackChunkName: "NarutoClans" */ '../pages/NarutoClans.vue'),
        },
        {
            path: '/akatsuki',
            name: 'akatsuki',
            component: () => import(/* webpackChunkName: "NarutoAkatsuki" */ '../pages/NarutoAkatsuki.vue'),
        },
        // Todo: o una pagina Not Found
        // { 
        //     path: '/:pathMatch(.*)*',
        //     component: () => import(/* webpackChunkName: "NoPageFound" */ '../pages/NarutoPersonajes.vue')
        // },
    ]
}