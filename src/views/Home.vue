<template>
  <div class="text-center">
    <img class="w-100 h-100" src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="bienvenue">
    <button class="btn btn-info text-white text-capitalize" @click="$router.push('rooms')">voir les chambre</button>
  </div>
<p class="text-danger">coucou</p>
  <p>test</p>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>

</style>