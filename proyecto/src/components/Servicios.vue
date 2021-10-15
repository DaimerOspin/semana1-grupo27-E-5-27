<template>
  <div class="container-fluid">
      
        <section  id="services" class="news-section"   >
            <div  class="services-info">
                <div class="row title-container">
                    <h2 class="titu-services"  >Seccion Servicios</h2>
  
                </div >
                <div  id="envoltorioServicios" class="row">
                    <article  style=" background: url(imgre/patin.jpg);"  class="col-12 col-md-6 col-lg-4 servicio 1" id="servicio1">
                        <img class="img-servicios" src="imgre/productos 2.jpg"  alt="Imagen servicio 1">
                        
                        <h3 class="titulo-servicios">PRODUCTOS</h3>
                        <p> "TRANSELECTRIC S.A.S cuenta con servicio tecnico para toda su clientela ademas de la veta de accesorios para proveer de la mejor experiencia y seguridad a nuestros clientes.</p>
                        <router-link to="/about">Mas informacion</router-link>
                        <hr>
                        
                    </article>
                    <article   style=" background: url(imgre/pa.jpeg);"  class="col-12 col-md-6 col-lg-4 servicio 2" >
                        <img class="img-servicios" src="imgre/asesoria2.jpg" alt="Imagen servicio 2">
                        
                        <h3 class="titulo-servicios" >ASESORIA</h3>
                        <p>Para TRANSELECTRIC S.A.S es muy importante poder ofrecerle a sus clientes un producto de calidad que cumpla con sus exigencias, por ello contamos con un servicio de asesoria para poder ayudar al cliente a elegir su mejor opcion que se acomode a sus necesidades, presupuesto y gusto.</p>
                        <router-link to="/about">Mas informacion</router-link>
                        <hr>
                        <hr>
                    </article>
                    <article   style=" background: url(imgre/patineta1.jfif);" class="col-12 col-md-6 col-lg-4 servicio 3 " id="servicio3">
                        <img class="img-servicios" src="imgre/servicio tecnico.jpg"  alt="Imagen servicio 3">
                        
                        <h3 class="titulo-servicios" >SEVICIO TECNICO</h3>
                        <p >TRANSELECTRIC S.A.S cuenta con servicio tecnico para toda su clientela ademas de la veta de accesorios para proveer de la mejor experiencia y seguridad a nuestros clientes.</p>
                        <router-link to="/about">Mas informacion</router-link>
                        <hr>
                        <hr>
                    </article>
                 </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    name: 'servicios'

}
</script>

<style>
 
#servicio2 :hover{
    opacity: 0.07;
    -webkit-transition: opacity 500ms;
    -moz-transition: opacity 500ms;
    -o-transition: opacity 500ms;
    -ms-transition: opacity 500ms;
    transition: opacity 500ms;


}
.servicio2 {
    border-radius: 50px;
   
    
}

</style>