import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import RoomList from "@/views/RoomList";
import ApartmentList from "@/views/ApartmentList";

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: Home
    },
    {
        path: '/rooms',
        name: 'RoomList',
        component: RoomList
    },

    {
        path: '/apartments',
        name: 'ApartementList',
        component: ApartmentList
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router