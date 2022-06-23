<template>
  <div v-for="(apart, index) in apartment" :key="index" class="card mb-3">
    <img src="https://images.unsplash.com/photo-1554435493-93422e8220c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" class="card-img-top" alt="chambre">
    <div class="card-body">
      <h5 class="card-title">Apartement name :  {{apart[index].name}}</h5>
      <p class="card-text">{{apartment}}</p>
      <p class="card-text">{{apart[index].street}}</p>
      <p class="card-text">{{apart[index].zip_code}}</p>
      <p class="card-text">{{apart[index].city}}</p>
      <p class="card-text">{{apart[index].image}}</p>


      <button class="btn btn-success">Actualiser</button>
      <button class="btn btn-info text-white m-3" disabled><i class="bi-eye"></i></button>
      <button class="btn btn-success " disabled>voir les chambre</button>
    </div>
  </div>

  <div class="modal"  id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Créer un apartment</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="email" class="form-control"  placeholder="name">
          </div>
          <div class="mb-3">
            <label  class="form-label">street</label>
            <input type="email" class="form-control"  placeholder="street">
          </div>
          <div class="mb-3">
            <label  class="form-label">zipCode</label>
            <input type="email" class="form-control"  placeholder="zipcode">
          </div>
          <div class="mb-3">
            <label  class="form-label">city</label>
            <input type="email" class="form-control"  placeholder="city">
          </div>
          <div class="mb-3">
            <label  class="form-label">image</label>
            <input type="email" class="form-control"  placeholder="image">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="addApartment">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

</template>

<script>
import {mapGetters} from "vuex";
import Api from "@/api/Api";

export default {
  name: "ApartmentList",
  data: () => ({
    name: '',
    street: '',
    zipCode: '',
    city: '',
    image: '',
  }),
  computed: {
    ...mapGetters({apartment: 'allApartment'}),
  },
  methods: {
    addApartment(){
      let data = {

      }
      Api.addApartment(data)
          .then(data => {
            console.log(data)
          })
          .catch(message => {
            console.log(message)
          })
    },
    getAllApartment() {
      Api.getAllApartments()
          .then(data => {
            console.log(data)
            this.apartment.push(data)
          })
          .catch(message => {
            console.log(message)
          })
    }
  },

  beforeMount() {
    this.getAllApartment()
  }
}
</script>

<style scoped>

</style>