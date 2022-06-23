<template>
  <div style="background-color: beige">
    <Navbar></Navbar>
    <div class="container p-0 min-vh-100">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
