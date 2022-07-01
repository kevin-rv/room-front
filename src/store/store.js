import { createStore } from 'vuex'
import Api from "@/api/Api";
export default createStore({
    state: {
        api: Api,
        rooms: [],
        apartment: [],
        reservation: []
    },
    mutations: {
        UPDATE_ALL_APARTMENT(state, apartment){
            state.apartment = apartment
        },
        UPDATE_ALL_ROOM(state, rooms){
            state.rooms = rooms
        },
        UPDATE_ALL_RESERVATION(state, reservation){
            state.reservation = reservation
        }
    },
    actions: {
        updateAllApartment({commit}, apartment) {
            commit('UPDATE_ALL_APARTMENT', apartment)
        },
        updateAllRooms({commit}, room) {
            commit('UPDATE_ALL_ROOM', room)
        },
        updateAllReservation({commit}, reservation) {
            commit('UPDATE_ALL_RESERVATION', reservation)
        }
    },
    getters: {
        allApartment(state) {
            return state.apartment
        },
        allRooms(state) {
            return state.rooms
        },
        allReservation(state) {
            return state.reservation
        },

    },
    modules: {

    }
})
