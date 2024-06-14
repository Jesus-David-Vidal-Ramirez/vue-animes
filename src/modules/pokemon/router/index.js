
export default {
    name: 'pokemon',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBooksLayout.vue'),
    children: [
        {
            path: '',
            name: 'pokemon',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        }
    ]
}