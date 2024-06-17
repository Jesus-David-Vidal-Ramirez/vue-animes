export default {
    name: 'dbz',
    component: () => import (/* webpackChunkName: "DbzLayout"*/ '../layouts/DbzLayout.vue'),
    children: [
        {
            path: '',
            name: 'dbz',
            component: () => import(/* webpackChunkName: "DbzPage" */ '../pages/DbzPersonajes.vue'),
        },
        // { 
        //     path: '/:pathMatch(.*)*', 
        //     component: () => import(/* webpackChunkName: "NoPageFoundDbz" */ '../pages/Dbz.vue')
        // },
    ]
}