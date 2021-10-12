<template>
<div class="container">
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">nota</th>
      <th scope="col">acciones</th>
      <th scope="col">H</th>
    </tr>
  </thead>
  <tbody>
  
   
    <tr v-for="(item, index) in servicios" :key="index">
      <th scope="row">{{item.clienteId}}</th>
      <td>{{item.FacturaId}}</td>
      <td>{{item.data}}</td>
    </tr>
  </tbody>
  
 
</table>

</div>
</template>

<script>
export default {
    data(){
      return{
        servicios:[]

      }
    },
    created(){
      this.listaservicios();

    },
    methods:{
      listaservicios(){
        this.axios.get('/cliente/')
        .then(res=>{
          this.servicios=res.data;

        })
        .catch(e=>{
          console.log(e.response)

        })
      }

    }

}
</script>

<style>

</style>