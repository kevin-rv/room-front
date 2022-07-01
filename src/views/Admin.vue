<template>
<p>Admin</p>
  <div class="card mb-3">
    <h5 class="card-header">Apartment</h5>
    <div class="card-body">
      <button type="button" class="btn btn-info text-white mb-3 me-3" @click="this.openModalCreateApartment">
        créer un apartment
      </button>
      <button type="button" class="btn btn-info text-white mb-3" @click="this.getAllRooms">
        afficher toute les chambre
      </button>
      <ul v-for="(apart) in apartment" :key="apart.id" class="list-group">
        <li class="list-group-item">Nom: {{apart.name}} <br> Nombre de chambre: {{apart.rooms.length}}
          <button class="btn btn-outline-primary float-end" @click="this.openModalUpdateApartment(apart)">update</button>
          <button class="btn btn-outline-info float-end" @click="this.openModalGetRoomInApart(apart.id)">voir les chambre</button>
          <button class="btn btn-outline-danger float-end" @click="this.openModalDeleteApartment(apart.id)"><i class="bi bi-trash"></i></button>
        </li>
      </ul>
    </div>
  </div>

  <div class="card mb-3">
    <h5 class="card-header">All Rooms</h5>
    <div class="card-body">
      <button type="button" class="btn btn-info text-white mb-3" @click="this.openModalCreateRoom">
        créer une rooms
      </button>
      <ul v-for="(room) in rooms" :key="room.id" class="list-group">
        <li class="list-group-item">Nom de l'apartment: {{room.apartment.name}}<br> Numero de chambre : {{room.number}}
          <button class="btn btn-outline-primary float-end" @click="this.openModalUpdateRoom(room)">update</button>
          <button class="btn btn-outline-danger float-end" @click="this.openModalDeleteRoom(room.id)"><i class="bi bi-trash"></i></button>
        </li>
      </ul>
    </div>
  </div>

  <div class="card">
    <h5 class="card-header">All Reservation</h5>
    <div class="card-body">
      <button type="button" class="btn btn-info text-white mb-3" @click="this.openModalCreateReservation">
        créer une reservation
      </button>
      <p>{{reservations}}</p>
      <ul v-for="(reserve) in reservations" :key="reserve.id" class="list-group">

        <li class="list-group-item">numero de chambre: {{reserve.room.number}} <br> value: {{reserve.value}}
          <button class="btn btn-outline-primary float-end" @click="this.openModalUpdateReservation(reserve)">update</button>
          <button class="btn btn-outline-danger float-end" @click="this.openModalDeleteReservation(reserve.id)"><i class="bi bi-trash"></i></button>
        </li>
      </ul>
    </div>
  </div>
  <modal
  :title="modalCreateUpdateTitle"
  ref="modalCreateUpdate"
  :action-func="modalCreateUpdateAction"
  action-text="Enregistrer"
  button-action-class="btn-info text-white"
  >
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input class="form-control" v-model="name" placeholder="name">
    </div>
    <div class="mb-3">
      <label  class="form-label">street</label>
      <input class="form-control" v-model="street"  placeholder="street">
    </div>
    <div class="mb-3">
      <label  class="form-label">zipCode</label>
      <input class="form-control" v-model="zipCode"  placeholder="zipcode">
    </div>
    <div class="mb-3">
      <label  class="form-label">city</label>
      <input class="form-control" v-model="city"  placeholder="city">
    </div>
    <div class="mb-3">
      <label  class="form-label">image</label>
      <input class="form-control" v-model="image"  placeholder="image">
    </div>
  </modal>
  <modal
    :title="modalDeleteTitle"
    ref="modalDelete"
    :action-func="modalDeleteAction"
    action-text="Supprimer"
    button-action-class="btn-danger"
  >
    <p>Voulez vous vraiment supprimer !?</p>
  </modal>
  <modal
      :title="modalCreateUpdateRoomTitle"
      ref="modalCreateUpdateRoom"
      :action-func="modalCreateUpdateRoomAction"
      action-text="Enregistrer"
      button-action-class="btn-info text-white"
  >
    <div class="mb-3">
      <label class="form-label">Apartment</label>
      <select id="apartSelect" class="form-select" aria-label="Default select example">
        <option selected>Open this select apart menu</option>
        <option v-for="(apart) in apartment" :key="apart.id" :value="apart.id">{{apart.name}}</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Number</label>
      <input class="form-control" v-model="number" placeholder="number">
    </div>
    <div class="mb-3">
      <label  class="form-label">Area</label>
      <input class="form-control" v-model="area"  placeholder="area">
    </div>
    <div class="mb-3">
      <label  class="form-label">Price</label>
      <input class="form-control" v-model="price"  placeholder="price">
    </div>
    <div class="mb-3">
      <label  class="form-label">Image</label>
      <input class="form-control" v-model="image"  placeholder="image">
    </div>
  </modal>
  <modal
      :title="modalGetRoomInApartTitle"
      ref="modalGetRoomInApart"
  >
    <ul v-for="(room) in rooms" :key="room.id" class="list-group">
      <li class="list-group-item">Numero de chambre: {{room.number}}
      </li>
    </ul>
  </modal>

  <modal
      :title="modalCreateUpdateReservationTitle"
      ref="modalCreateUpdateReservation"
      :action-func="modalCreateUpdateReservationAction"
      action-text="Enregistrer"
      button-action-class="btn-info text-white"
  >
    <div class="mb-3">
      <label class="form-label">Rooms</label>
      <select id="roomSelect" class="form-select" aria-label="Default select example">
        <option selected>Open this select room menu</option>
        <option v-for="(room) in rooms" :key="room.id" :value="room.id">{{room.number}}</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Reservation Status</label>
      <select id="reservationSelect" class="form-select" aria-label="Default select example">
        <option selected>Open this reservation menu</option>
        <option v-for="(reserve) in reservations" :key="reserve.id" :value="reserve.value">{{reserve.value}}</option>
      </select>
    </div>
<!--    <div class="mb-3">-->
<!--      <label class="form-label">Value</label>-->
<!--      <input class="form-control" v-model="value" placeholder="value">-->
<!--    </div>-->
  </modal>
</template>

<script>
import Api from "@/api/Api";
import {mapActions, mapGetters} from "vuex";
import Modal from "@/components/Modal";

export default {
  name: "Admin",
  components: {Modal},
  data: () => ({
    apartmentId: null,
    name: '',
    street: '',
    zipCode: '',
    city: '',
    image: '',
    modalCreateUpdateTitle: '',
    modalCreateUpdateAction: () => {},
    modalDeleteTitle: '',
    modalDeleteAction: () => {},
    roomId: null,
    number: '',
    area: '',
    price: '',
    modalCreateUpdateRoomTitle: '',
    modalCreateUpdateRoomAction: () => {},
    modalGetRoomInApartTitle: '',
    reservationId: null,
    value: '',
    modalCreateUpdateReservationTitle: '',
    modalCreateUpdateReservationAction: () => {},

  }),
  computed: {
    ...mapGetters({
      apartment: 'allApartment',
      rooms: 'allRooms',
      reservations: 'allReservation'

    }),
  },
  methods: {
    ...mapActions({
      updateAllApartment: 'updateAllApartment',
      updateAllRooms: 'updateAllRooms',
      updateAllReservation: 'updateAllReservation'
    }),
    openModalCreateApartment() {
      this.name = ''
      this.street = ''
      this.zipCode = ''
      this.city = ''
      this.image = ''
      this.modalCreateUpdateTitle = 'Créer un apartment'
      this.modalCreateUpdateAction = this.addApartment
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdate.$el)
      modal.show()
    },
    openModalUpdateApartment(apartment) {
      this.apartmentId = apartment.id
      this.name = apartment.name
      this.street = apartment.street
      this.zipCode = apartment.zipCode
      this.city = apartment.city
      this.image = apartment.image
      console.log(apartment)
      this.modalCreateUpdateTitle = 'Update un apartment'
      this.modalCreateUpdateAction = this.updateApartment
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdate.$el)
      modal.show()
    },
    openModalDeleteApartment(apartId) {
      console.log(apartId)
      this.apartmentId = apartId
      this.modalDeleteTitle = 'Supprimer un appartment'
      this.modalDeleteAction = this.deleteApartment
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalDelete.$el)
      modal.show()
    },
    openModalCreateRoom() {
      console.log(document.getElementById('apartSelect').value)
      this.number = ''
      this.area = ''
      this.price = ''
      this.image = ''
      this.modalCreateUpdateRoomTitle = 'Créer une Room'
      this.modalCreateUpdateRoomAction = this.addRoom
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateRoom.$el)
      modal.show()
    },

    openModalGetRoomInApart(apartId) {
      this.apartmentId = apartId
      this.getAllRoomsInApart(apartId)
      this.modalGetRoomInApartTitle = 'Liste Room de votre apart'
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalGetRoomInApart.$el)
      modal.show()
    },

    openModalUpdateRoom(room) {
      this.roomId = room.id
      this.number = room.number
      this.area = room.area
      this.price = room.price
      this.image = room.image
      console.log(room)
      console.log(this.roomId)
      this.modalCreateUpdateRoomTitle = 'Update une rooms'
      this.modalCreateUpdateRoomAction = this.updateRoom
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateRoom.$el)
      modal.show()
    },

    openModalDeleteRoom(roomId) {
      console.log(roomId)
      this.roomId = roomId
      this.modalDeleteTitle = 'Supprimer une chambre'
      this.modalDeleteAction = this.deleteRoom
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalDelete.$el)
      modal.show()
    },

    openModalCreateReservation() {
      console.log(document.getElementById('roomSelect').value)
      this.value = ''
      this.modalCreateUpdateReservationTitle = 'Créer une Reservation'
      this.modalCreateUpdateReservationAction = this.addReservation
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateReservation.$el)
      modal.show()
    },

    openModalUpdateReservation(reservation) {
      this.reservationId = reservation.id
      this.value = reservation.value
      console.log(reservation)
      this.modalCreateUpdateReservationTitle = 'Update une reservation'
      this.modalCreateUpdateReservationAction = this.updateReservation
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateReservation.$el)
      modal.show()
    },

    openModalDeleteReservation(reservationId) {
      console.log(reservationId)
      this.reservationId = reservationId
      this.modalDeleteTitle = 'Supprimer une reservation'
      this.modalDeleteAction = this.deleteReservation
      let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalDelete.$el)
      modal.show()
    },


    addApartment(){
      let data = {
        name: this.name,
        street: this.street,
        zipcode: this.zipCode,
        city: this.city,
        image: this.image,
      }
      console.log(data)
      Api.addApartment(data)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdate.$el)
            modal.hide()
            this.getAllApartment()
          })
          .catch(message => {
            console.log(message)
          })
    },
    getAllApartment() {
      Api.getAllApartments()
          .then(data => {
            console.log(data)
            this.updateAllApartment(data)
          })
          .catch(message => {
            console.log(message)
          })
    },
    updateApartment(){
      let apartment = {
        id: this.apartmentId,
        name: this.name,
        street: this.street,
        zipcode: this.zipCode,
        city: this.city,
        image: this.image,
      }
      console.log(apartment)
      Api.updateApartment(apartment)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdate.$el)
            modal.hide()
            this.getAllApartment()
          })
          .catch(message => {
            console.log(message)
          })
    },

    deleteApartment(){
      let apartId = {
        id: this.apartmentId
      }

      Api.deleteApartments(apartId)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalDelete.$el)
            modal.hide()
            this.getAllApartment()
          })
          .catch(message => {
            console.log(message)
          })
    },

    addRoom(){
      let apartmentId = document.getElementById('apartSelect').value
      let data = {
        number: this.number,
        area: this.area,
        price: this.price,
        image: this.image,
      }
      console.log(data)
      Api.addRoom(apartmentId, data)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateRoom.$el)
            modal.hide()
            this.getAllRooms()
          })
          .catch(message => {
            console.log(message)
          })
    },

    getAllRooms() {
      Api.getAllRooms()
          .then(data => {
            console.log(data)
            this.updateAllRooms(data)
          })
          .catch(message => {
            console.log(message)
          })
    },

    getAllRoomsInApart() {
      let apartmentId = this.apartmentId
      Api.getAllRoomInApartment(apartmentId)
          .then(data => {
            console.log(data)
            this.updateAllRooms(data)
          })
          .catch(message => {
            console.log(message)
          })
    },

    updateRoom(){
      // let apartmentId = document.getElementById('apartSelect').value
      let room = {
        id: this.roomId,
        number: this.number,
        area: this.area,
        price: this.price,
        image: this.image,
      }
      console.log(room)
      Api.updateRoom(room)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateRoom.$el)
            modal.hide()
            this.getAllRooms()
          })
          .catch(message => {
            console.log(message)
          })
    },

    deleteRoom(){
      let roomId = {
        id: this.roomId
      }

      Api.deleteRoom(roomId)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalDelete.$el)
            modal.hide()
            this.getAllRooms()
          })
          .catch(message => {
            console.log(message)
          })
    },

    getAllReservation() {
      Api.getAllReservation()
          .then(data => {
            console.log(data)
            this.updateAllReservation(data)
          })
          .catch(message => {
            console.log(message)
          })
    },
    addReservation(){
      let roomId = document.getElementById('roomSelect').value
      let value = {
        value:document.getElementById('reservationSelect').value
      }
      console.log(value)
      Api.addReservation(roomId, value)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateReservation.$el)
            modal.hide()
            this.getAllReservation()
          })
          .catch(message => {
            console.log(message)
          })
    },
    updateReservation(){
      // let apartmentId = document.getElementById('apartSelect').value
      let reservation = {
        id: this.reservationId,
        value: this.value,
      }
      console.log(reservation)
      Api.updateReservation(reservation)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalCreateUpdateReservation.$el)
            modal.hide()
            this.getAllReservation()
          })
          .catch(message => {
            console.log(message)
          })
    },

    deleteReservation(){
      let reservationId = {
        id: this.reservationId
      }

      Api.deleteReservation(reservationId)
          .then(data => {
            console.log(data)
            let modal = this.$bootstrap.Modal.getOrCreateInstance(this.$refs.modalDelete.$el)
            modal.hide()
            this.getAllReservation()
          })
          .catch(message => {
            console.log(message)
          })
    },

  },

  beforeMount() {
    this.getAllApartment()
    this.getAllRooms()
    this.getAllReservation()
  }
}
</script>

<style scoped>

</style>