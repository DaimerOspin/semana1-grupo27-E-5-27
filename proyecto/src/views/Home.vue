<template>
  <div class='home'>
    <navbar></navbar>
    
    <servicios></servicios>
    <news></news>
    <equipo></equipo>
    <looter></looter>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Servicios from '../components/Servicios.vue'
import news from '../components/news.vue'
import equipo from '../components/Equipo.vue'
import looter from '../components/Piepagina.vue'




export default {
  components: { 

    Navbar,
    Servicios, 
    news, 
    equipo, 
    looter
  },
  name: 'home',
 

}
</script>

<style>

</style>




