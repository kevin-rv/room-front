<template>
  <div v-for="(room, index) in rooms" :key="index" class="card mb-3">
    <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80" class="card-img-top" alt="chambre">
    <div class="card-body">
      <h5 class="card-title">Chambre numéro :  {{room[index].number}}</h5>
      <p class="card-text">{{rooms}}</p>
      <p class="card-text">{{room[index].number}}</p>
      <p class="card-text">{{room[index].area}}</p>
      <p class="card-text">{{room[index].price}}</p>
      <p class="card-text">{{room[index].image}}</p>


      <button class="btn btn-success" @click="getAllRoom">Actualiser</button>
      <button class="btn btn-info text-white m-3" disabled><i class="bi-eye"></i></button>
      <button class="btn btn-success " disabled>Réservé</button>
    </div>
  </div>
</template>

<script>
import Api from "@/api/Api";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "RoomList",
  data: () => ({
  }),
  computed: {
    ...mapGetters({rooms: 'allRooms'}),
  },
  methods: {
    ...mapActions({
      updateAllRoom: 'updateAllRooms'
    }),
    getAllRoom() {
       Api.getAllRooms()
          .then(data => {
            console.log(data)
            this.rooms.push(data)
            console.log(this.rooms)
          })
          .catch(message => {
            console.log(message)
          })
    }
  },

  beforeMount() {
    this.getAllRoom()
  }


}
</script>

<style scoped>

</style>