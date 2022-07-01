<template>
  <div class="card mb-3">
    <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80" class="card-img-top" alt="chambre">
    <div class="card-body">
      <h5 class="card-title">Chambre numéro :  {{rooms.number}}</h5>
      <p class="card-text">Number :{{rooms.number}}</p>
      <p class="card-text">Area: {{rooms.area}}</p>
      <p class="card-text text-danger">Price: {{rooms.price}}</p>
      <p class="card-text">image: {{rooms.image}}</p>

      <button class="btn btn-success " @click="addReservation">Réservé</button>
    </div>
  </div>
</template>

<script>
import Api from "@/api/Api";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Room",
  data: () => ({
  value: 'Reserver'
  }),
  computed: {
    ...mapGetters({rooms: 'allRooms'}),
  },
  methods: {
    ...mapActions({
      updateAllRoom: 'updateAllRooms'
    }),
    getOneRoomInApart() {
      Api.getOneRoom(this.$route.params.id)
          .then(data => {
            console.log(data)
            this.updateAllRoom(data)
            console.log(this.rooms)
          })
          .catch(message => {
            console.log(message)
          })
    },

    addReservation(){
      let value = {
        value:this.value
      }
      console.log(value)
      Api.addReservation(this.$route.params.id, value)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateReservation.$el)
            modal.hide()
            this.getAllRooms()
          })
          .catch(message => {
            console.log(message)
          })
    },
  },



  beforeMount() {
    this.getOneRoomInApart()
  }
}
</script>

<style scoped>

</style>