//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/login',
        name: 'loginApp',
        component: () => import( /* webpackChunkName: "home" */ '../components/login.vue')
    },
    {
        path: '/',
        name: 'homeApp',
        component: () => import( /* webpackChunkName: "home" */ '../views/Index.vue')
    },
    {
        path: '/list',
        name: 'cakadesList',
        component: () => import( /* webpackChunkName: "post.index" */ '../components/pages/cakadesList.vue')
    },
    {
        path: '/tambah',
        name: 'cakadesCreate',
        component: () => import( /* webpackChunkName: "post.index" */ '../components/pages/cakadesCreate.vue')
    },
    {
        path: '/posts',
        name: 'indexApp',
        component: () => import( /* webpackChunkName: "post.index" */ '../views/posts/Index.vue')
    },
    {
        path: '/posts/create',
        name: 'createApp',
        component: () => import( /* webpackChunkName: "post.create" */ '../views/posts/Create.vue')
    },
    {
        path: '/posts/edit/:id',
        name: 'editApp',
        component: () => import( /* webpackChunkName: "post.edit" */ '../views/posts/Edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes  // config routes
})

export default router
