<template>
<div class="container">
    <h1>PEDIDOS</h1>
    <!-- alerta -->

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged">
      {{mensaje.texto}}
    </b-alert>
    <!-- formulario ingresar datos -->

    <form @submit.prevent="agregarCliente()" v-if="!editar">
      <h3>Agregar Cliente</h3>

      <input type="text" class="form-control my-2" placeholder="Nombre"  v-model="cliente.nombre">
       <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="cliente.descripcion">
      <b-button class="btn btn-success my-2" type="submit">Agregar</b-button>
    </form>

    <!-- formulario editar datos -->

    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
      <h3>Editar nota</h3>

      <input type="text" class="form-control my-2" placeholder="Nombre"  v-model="notaEditar.nombre">
      <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="notaEditar.descripcion">
      <b-button class="btn btn-success my-2 mx-2" type="submit">Editar</b-button>
      <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>
    </form>
    <!-- Base de Datos -->
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cliente_Id</th>
      <th scope="col">Factura_ID</th>
      <th scope="col">Estado Pedido</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody>
  
   
    <tr v-for="(item, index) in clientes" :key="index">
      <th scope="row">{{item._id}}</th>
      <th>{{item.nombre}}</th>
      <th>{{item.clienteId}}</th>
      <td>{{item.FacturaId}}</td>
      <td>{{item.estadoPedido}}</td>
      <td>{{item.date}}</td>
    </tr>
    
  </tbody>
  
 
</table>

</div>
</template>

<script>
export default {
    data(){
      return{
        clientes:[],
        mensaje:{color:'success',texto:''},
        dismissSecs: 5,
        dismissCountDown: 0,

        cliente:{nombre:"",clienteID:"",FacturaId:"",estadoPedido:""},

        editar: false,
        clienteEditar:{}

      }
    },
    created(){
      this.listaclientes();

    },
    methods:{
      listaclientes(){
        
        this.axios.get('/cliente')
        .then(res=>{
          this.clientes=res.data;

        })
        .catch(e=>{
          console.log(e.response)

        })
      },
      agregarNota(){
        this.axios.post('/nota-nueva', this.nota)
        .then(res=>{
          this.notas.push(res.data)
          this.nota.nombre="";
          this.nota.descripcion="";
          this.mensaje.color="success";
          this.mensaje.texto="Nota agregada";
          this.showAlert();
        })
        .catch(e=>{
          console.log(e.response)
        })
            
      },
    }

}
</script>

<style>

</style>