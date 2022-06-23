import Vue from 'vue';
import VueRouter from 'vue-router';
import WorkList from './../components/WorkList';
import WorkWrite from './../components/WorkWrite';


const routesLink = [
    {
        path:'/',
        redirect:{name: 'main'}
    },
    {
        path:'/main',
        name:'main',
        component:WorkList
    },
    {
        path:'/write',
        name:'write', 
        component:WorkWrite
    }
]

Vue.use(VueRouter); //vue2에서 vue-router 그냥 설치불가 (vue-router4가 최신인데 vue2에선 호환안되기때문 vue-router@3으로 설치필요)
export const router = new VueRouter({
    mode:'history',
    routes:routesLink
})
