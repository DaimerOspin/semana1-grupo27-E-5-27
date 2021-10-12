<template>
<div >
    <footer class="footer-section" >
        <section class="container-fluid col-12 col-sm-12">
            <h2  class="titulo-noticias">Footer Seccion</h2>
            <div class="footer">
                <div class="secciones_footer">
                    <h3 style="margin-left: -120px;" >Motivación</h3>
                    <p class="tex" >La siguiente pagina web es desarrollada por el equipo 27, trata de una plantilla de una empresa dedicada ala venta y reparacion de productos amigables con el medio ambiente. La pagina se divide en 5 secciones: La sección superior, la sección de servicios, la sección de noticias, la sección del equipo y la sección footer.</p> 
                    <figure class="redessociales">

                        <a href="https://www.facebook.com/Motos-Scooter-108807104589055/" target="_blank"><img class="imgy" src="imgre/bxl-facebook-circle.svg" alt="imgy"></a>
                        <a href="https://twitter.com/" target="_blank"><img src="imgre/bxl-instagram.svg" alt="imgu"></a>
                        <a href="https://www.whatsapp.com/" target="_blank"> <img src="imgre/bxl-whatsapp (1).svg" alt="imgo"></a>
                        <a href="https://github.com/cesardiaz-utp" target="_blank"><img src="imgre/bxl-twitter.svg" alt="img9"></a>
                                
                        <a href="https://github.com/DaimerOspin/semana1-grupo27-E-5-27" target="_blank"><img  src="imgre/bxl-github.svg"></a>
                                            
                    </figure>       
                </div>
                
                <div style="margin-left: -15px;" class="secciones_footer">
                    <h3 style="margin-left: -100px;" >Información del Equipo</h3>
                    <br>
                        <div class="contacto">
                            
                            <p>Daniela Apolinar rivera
                                <br>Scrum Master
                                <br>Correo:
                                <br>Celular: 3114383650
                                <br> <a id="github1" href="https://github.com/daapri" target="_blank"><i class="fab fa-github"></i></a>
                            </p><br>
                        </div>
                        <div class="contacto">
                            <p>Santiago Dejesus Vega
                                <br>Development Team
                                <br>Correo:
                                <br>Celular: 3127626040
                                <br> <a id="github1" href="https://github.com/tiag0777" target="_blank"><i class="fab fa-github"></i></a>
                            </p><br> 
                        </div>
                        
                        <div class="contacto">
                            <p>Daimer Ospina Contreras
                            <br>Development Team 
                            <br>Correo:
                            <br>Celular: 3214265813
                            <br>
                            <a id="github1" href="https://github.com/DaimerOspin/semana1-grupo27-E-5-27" target="_blank"><i class="fab fa-github"></i></a>
                            </p><br>
                        </div>
                        <div class="contacto">
                            <p>Jairo Miguel Hernandez Tordecilla
                            <br>Rol: Development Team 
                            <br>Correo:
                            <br>Celular: 3113647391
                            <br> <a id="github1" href="https://github.com/jamhert" target="_blank"><i class="fab fa-github"></i></a>
                            </p>
                        </div>
                </div>
            </div>
        </section>
    </footer>
</div>
</template>

<script>
export default {
    name: 'looter'

}
</script>

                            

<style>
.redessociales{
    margin-top: 20px;
    display: flex;
    margin-left:50px;
}

.tex{
    margin-left:10px;
    margin-top: 30px;
    text-align: justify;
    color: rgb(255, 246, 246);
    width: 60%;
   
}

.footer{
    text-align: center;
    background-color: #000000;
    background-color: #28282a;
    opacity: 0.8;
    background-size: 5px 5px;
    background-image: repeating-linear-gradient(45deg, #000000 0, #000000 0.5px, #28282a 0, #28282a 50%);
   
    
  
}

.secciones_footer{
    
    vertical-align: top;
    width: 550px;
    display: inline-block;
   
    text-align: center;
    color: rgb(255, 255, 255);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-top: 20px;
    
   
}

.contacto{
    vertical-align: top;
    align-content: center;
    font-size: x-small;
    text-align: center;
    display: inline-block;
    width: 245px;
    text-align: left;
    
}
#github1{
    width: 49px;
    color: #fff;
}
.footer_copyrigth{
    padding:  20px;
    border-top: 2px solid #615a5a;
    text-align: center;
    color:#fff;
    
}


</style>