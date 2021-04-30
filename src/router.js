import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            component: () => import('./vuews/Staffs.vue')
        },
        {
            path:'/office',
            component: () => import('./vuews/Offices.vue')
        },
        {
            path:'/OPIO3',
            component: () => import('./vuews/OPIO3.vue')
        },
        {
            path:'/OPIO4',
            component: () => import('./vuews/OPIO4.vue')
        }
    ]
})