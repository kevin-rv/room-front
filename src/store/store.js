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
        updateAllApartment({commit}, apartment) {
            commit('UPDATE_ALL_APARTMENT', apartment)
        },
        updateAllRooms({commit}, room) {
            commit('UPDATE_ALL_ROOM', room)
        }
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
