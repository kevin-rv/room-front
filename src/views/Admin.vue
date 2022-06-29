<template>
<p>Admin</p>
  <div class="card">
    <h5 class="card-header">Apartment</h5>
    <div class="card-body">
      <button type="button" class="btn btn-info text-white mb-3" @click="this.openModalCreateApartment">
        créer un apartment
      </button>
      <ul v-for="(apart) in apartment" :key="apart.id" class="list-group">
        <li class="list-group-item">{{apart.name}}
          <button class="btn btn-outline-primary float-end" @click="this.openModalUpdateApartment(apart)">update</button>
          <button class="btn btn-outline-info float-end" disabled>voir les apartment</button>
          <button class="btn btn-outline-danger float-end" @click="this.openModalDeleteApartment(apart.id)">delete</button>

        </li>
      </ul>
    </div>
  </div>

<!--  <div class="card">-->
<!--    <h5 class="card-header">All Rooms</h5>-->
<!--    <div class="card-body">-->
<!--      <button type="button" class="btn btn-info text-white mb-3" @click="this.openModalCreateApartment">-->
<!--        créer une rooms-->
<!--      </button>-->
<!--      <ul v-for="(apart) in apartment" :key="apart.id" class="list-group">-->
<!--        <li class="list-group-item">{{apart.name}}-->
<!--          <button class="btn btn-outline-primary float-end" @click="this.openModalUpdateApartment(apart)">update</button>-->
<!--          <button class="btn btn-outline-danger float-end" @click="this.openModalDeleteApartment(apart.id)">delete</button>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
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
  }),
  computed: {
    ...mapGetters({apartment: 'allApartment'}),
  },
  methods: {
    ...mapActions({
      updateAllApartment: 'updateAllApartment',
      updateAllRooms: 'updateAllRooms'
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
  },


  beforeMount() {
    this.getAllApartment()
    this.getAllRooms()
  }
}
</script>

<style scoped>

</style>