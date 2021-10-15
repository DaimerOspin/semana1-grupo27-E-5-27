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
       <input type="text" class="form-control my-2" placeholder="Cliente_ID" v-model="cliente.clienteId">
       <input type="text" class="form-control my-2" placeholder="Factura_ID" v-model="cliente.FacturaId">
       <input type="text" class="form-control my-2" placeholder="Estado Pedido" v-model="cliente.estadoPedido">
      <b-button class="btn btn-success my-2" type="submit">Agregar</b-button>
    </form>

    <!-- formulario editar datos -->

    <form @submit="editarCliente(clienteEditar)" v-if="editar">
      <h3>Editar Cliente</h3>

      <input type="text" class="form-control my-2" placeholder="Nombre"  v-model="clienteEditar.nombre">
       <input type="text" class="form-control my-2" placeholder="Cliente_ID" v-model="clienteEditar.clienteId">
       <input type="text" class="form-control my-2" placeholder="Factura_ID" v-model="clienteEditar.FacturaId">
       <input type="text" class="form-control my-2" placeholder="Estado Pedido" v-model="clienteEditar.estadoPedido">
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
          <td>
                <b-button class="btn btn-danger mx-2" @click="eliminarCliente(item._id)">Eliminar</b-button>
                <b-button class="btn btn-warning mx-2" @click="activarEditar(item._id)">Editar</b-button>
                
            </td>
        </tr>
      
      </tbody>
  
 
    </table>

  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return{
        clientes:[],
        mensaje:{color:'success',texto:''},
        dismissSecs: 5,
        dismissCountDown: 0,

        cliente:{nombre:"",clienteId:"",FacturaId:"",estadoPedido:"",date:""},

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
      agregarCliente(){
        this.axios.post('/cliente-nuevo', this.cliente)
        .then(res=>{
          this.clientes.push(res.data)
          this.cliente.nombre="";
          this.cliente.clienteId="";
          this.cliente.FacturaId="";
          this.cliente.estadoPedido="";
          this.cliente.data="";
          this.mensaje.color="success";
          this.mensaje.texto="Cliente Registrado";
          this.showAlert();
        })
        .catch(e=>{
          console.log(e.response)
        })
            
      },

      eliminarCliente(id){
            
        this.axios.delete(`/borrar-cliente/${id}`)
             
        .then(res=>{
          const index =this.clientes.findIndex(item=> item._id===res.data._id);
          this.clientes.splice(index,1);
          this.mensaje.color="success";
          this.mensaje.texto="Cliente eliminado";
          this.showAlert();
        })
        .catch(e=>{
          console.log(e.response)
        })
        },

        activarEditar(id){
          this.editar=true;
          this.axios.get(`/cliente/${id}`)
          .then(res=>{
            this.clienteEditar=res.data;
          })
          .catch(e=>{
            console.log(e.response)
          })
        },

        editarCliente(item){
          this.axios.put(`/editar-cliente/${item._id}`, item)
          .then(res=>{
            const index =this.clientes.findIndex(n=> n._id===res.data._id); 
            this.clientes[index].nombre=res.data.nombre;
            this.clientes[index].descripcion=res.data.descripcion;
            this.mensaje.color="success";
            this.mensaje.texto="Nota editada";
            this.showAlert();
            this.editar=false;
          })
          .catch(e=>{
            console.log(e.response)
          })
        },

        countDownChanged(dismissCountDown){
          this.dismissCountDown = dismissCountDown
        },
        showAlert() {
          this.dismissCountDown = this.dismissSecs
        }
    }

  }
</script>

<style>

</style>