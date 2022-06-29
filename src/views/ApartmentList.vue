<template>
  <div v-for="(apart) in apartment" :key="apart.id" class="card mb-3">
    <img src="https://images.unsplash.com/photo-1554435493-93422e8220c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" width="400" height="400" class="card-img-top" alt="chambre">
    <div class="card-body">
      <h5 class="card-title">Apartement name :  {{apart.name}}</h5>
      <p class="card-text">{{apart.street}}</p>
      <p class="card-text">{{apart.zip_code}}</p>
      <p class="card-text">{{apart.city}}</p>
      <p class="card-text">{{apart.image}}</p>
      <button class="btn btn-success float-end " disabled>voir les chambre</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Api from "@/api/Api";

export default {
  name: "ApartmentList",
  computed: {
    ...mapGetters({apartment: 'allApartment'}),
  },
  methods: {
    ...mapActions({
      updateAllApartment: 'updateAllApartment'
    }),
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
    }
  },

  beforeMount() {
    this.getAllApartment()
  }
}
</script>

<style scoped>

</style>