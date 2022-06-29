import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import RoomList from "@/views/RoomList";
import ApartmentList from "@/views/ApartmentList";
import Admin from "@/views/Admin";
import Room from "@/views/Room";

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: Home
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/rooms',
        name: 'RoomList',
        component: RoomList
    },

    {
        path: '/room/:id',
        name: 'Room',
        component: Room
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