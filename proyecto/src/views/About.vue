<template>
<div class="container">
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cliente_Id</th>
      <th scope="col">Factura_ID</th>
      <th scope="col">Estado Pedido</th>
    </tr>
  </thead>
  <tbody>
  
   
    <tr v-for="(item, index) in servicios" :key="index">
      <th scope="row">{{item._id}}</th>
      <th>{{item.nombre}}</th>
      <th>{{item.clienteId}}</th>
      <td>{{item.FacturaId}}</td>
      <td>{{item.estadoPedido}}</td>
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
        
        this.axios.get('/cliente')
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