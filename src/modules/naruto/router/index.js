
export default {
    name: 'naruto',
    component: () => import (/* webpackChunkName: "NarutoLayout"*/ '../layouts/NarutoLayout.vue'),
    children: [
        {
            path: '',
            name: 'naruto',
            component: () => import(/* webpackChunkName: "narutoPersonajes" */ '../pages/NarutoPersonajes.vue'),
        },
        {
            path: '/clans',
            name: 'clans',
            component: () => import(/* webpackChunkName: "narutoClans" */ '../pages/NarutoClans.vue'),
        },
        {
            path: '/akatsuki',
            name: 'akatsuki',
            component: () => import(/* webpackChunkName: "narutoAkatsuki" */ '../pages/NarutoAkatsuki.vue'),
        },
        // Todo: o una pagina Not Found
        // { 
        //     path: '/:pathMatch(.*)*',
        //     component: () => import(/* webpackChunkName: "NoPageFound" */ '../pages/NarutoPersonajes.vue')
        // },
    ]
}