import { createStore } from 'vuex'
import Api from "@/api/Api";
export default createStore({
    state: {
        api: Api,
        rooms: [],
        apartment: []

    },
    mutations: {
        UPDATE_ALL_APARTMENT(state, apartment){
            state.apartment = apartment
        },
        UPDATE_ALL_ROOM(state, rooms){
            state.rooms = rooms
        }
    },
    actions: {
        updateAllRooms(context) {
            return Api
                .getAllRooms()
                .then((data) => {
                    context.commit('UPDATE_ALL_ROOM', data)
                    console.log(data)
                })
        },
    },
    getters: {
        allApartment(state) {
            return state.apartment
        },
        allRooms(state) {
            return state.rooms
        },

    },
    modules: {

    }
})
