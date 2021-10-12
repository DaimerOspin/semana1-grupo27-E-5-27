<template>

<div class="container-fluid">
    <br>
    <h2  class="titulo-noticias">Quienes Somos</h2>
    <div class="row row-cols-1 row-cols-md-4 g-2">
        <article class="col">
            <div id= "new"  class="">
                <img id="img-team" class="desvanecer" src="imgre/Daniela.gif"  alt="DANIELA" />
                <div class="card-body">
                    <h2 id="Dan"> DANIELA APOLINAR RIVERA </h2>
                    <hr>
                    <p id="parra" >
                    Soy administradora de empresas, egresada de la Universidad Nacional, tengo 23 años, me apasiona y me in el mundo de los negocios y conocer nuevos lugares.
                
                    </p>
                </div>
            </div>
        </article>
        <article class="col">
            <div id= "new"  class="">
                <img id="img-team" class="desvanecer" src="imgre/Daimer.gif" alt="damier" />
                <div class="card-body">
                    <h2 id="Dan"> DAIMER OSPINA CONTRERAS </h2>
                    <hr>
                    <p id="parra" class="card-text">
                            Soy ingeniero aeroespacial egresado del Instituto Nacional de Pesquisas Espacial INPE en la ciudad de Sao José dos campos - Sao Paulo Brasil. Tengo 30 años y dentro de mis pasatiempos están los videojuegos y el anime. 
                    </p>
                </div>
            </div>
        </article>
        <article class="col">
            <div id= "new"  class="">
                <img id="img-team" class="desvanecer" src="imgre/Jairo.jpeg"  alt="JAIRO" />
                <div class="card-body">
                    <h2 id="Dan">
                            JAIRO HERNANDEZ TORDECILLA              
                    </h2>
                    <hr>
                    <p id="parra" class="card-text">
                        Soy técnico en programación de software del SENA tengo 32 años, me gusta el deporte, el cine, la música y soy apasionado por la tecnología.
                    </p>
                </div>
            </div>
        </article>
        <div class="col">
            <div id= "new"  class="">
                <img id="img-team" class="desvanecer" src="imgre/Santiago.gif"  alt="SANTIAGO" />
                <div class="card-body">
                    <h2 id="Dan">
                            SANTIAGO DEJESUS VEGA
                    </h2>
                    <hr>
                    <p id="parra">
                        Soy tecnico manejo ambiental, estudio programación, tengo 26 años, me gusta hacer deporte, salir a caminar y los animales, en especial los perros me gusta interactuar con el medio ambiente y la naturaleza.
                    </p>
                </div>
            </div>
        </div>
     
    </div>
    
    <br>

</div>
</template>

<script>
export default {
    name: 'equipo'

}
</script>

<style>
#img-team{
    width: 200px;
    margin-top: 24px; 
    margin-left: 60px;
}
.desvanecer {
    border-radius: 50px;
   
    
}
.desvanecer:hover {
    opacity: 0.07;
    -webkit-transition: opacity 500ms;
    -moz-transition: opacity 500ms;
    -o-transition: opacity 500ms;
    -ms-transition: opacity 500ms;
    transition: opacity 500ms;
}
#Dan{
    text-align: center;

}


</style>