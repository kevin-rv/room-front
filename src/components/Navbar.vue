// eslint-disable-next-line
<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="$router.push('/')"><i class="bi-moon-stars"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ path: '/' }"><a class="nav-link active" aria-current="page" href="#">Home</a></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/admin' }"><a class="nav-link" aria-current="page" href="#">Admin</a></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/apartments' }"><a class="nav-link" href="#">Liste appartement</a></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/rooms' }"><a class="nav-link" href="#">Liste de chambre</a></router-link>
          </li>
          <li class="nav-item disabled">
            <a class="nav-link" href="#" >Liste de réservation</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
  methods: {
  },

}
</script>

<style scoped>

</style>