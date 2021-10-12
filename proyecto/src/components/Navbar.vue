<template>
<div>
     
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
       
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="imgre/motos1.jpg" style=" height: 516px; width: 100%;" class="d-block w-100" alt="Vue Js" >
                 <div class="carousel-caption d-none d-md-block">
                <div class="container-socia">
                 <h3 class="row" id="baner_image">
                    <p class="col-7 col-sm-9 site-title"  id="banner_titulo">La Movilidad Del Futuro</p></h3>

                    <br>   

                    <ul class="social-iconos">
                        <li><a href="https://www.facebook.com/Motos-Scooter-108807104589055/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a></li>
                        <li><a href="https://github.com/DaimerOspin/semana1-grupo27-E-5-27" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li><a href="#https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                
            </div>
            </div>
            <div class="carousel-item">
            <img src="imgre/patin.jpg" style=" height: 516px; width: 100%;" class="d-block w-100" alt="uyy">

            <div class="carousel-caption d-none d-md-block">
                <div class="container-socia">
                     <h3 class="row" id="baner_image">
                    <p class="col-7 col-sm-9 site-title"  id="banner_titulo">La Movilidad Del Futuro</p></h3>

                    <br> 
                    <ul class="social-iconos">
                        <li><a href="https://www.facebook.com/Motos-Scooter-108807104589055/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a></li>
                        <li><a href="https://github.com/DaimerOspin/semana1-grupo27-E-5-27" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li><a href="#https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <img src="imgre/patineta1.jfif" style=" height: 517px; width: 100%;" class="d-block w-100" alt="JavaScript" >
            <div class="carousel-caption d-none d-md-block">
                 <h3 class="row" id="baner_image">
                    <p class="col-7 col-sm-9 site-title"  id="banner_titulo">La Movilidad Del Futuro</p>
                    </h3>
                    
                <div class="container-socia">
                   
                    <ul class="social-iconos">
                        <li><a href="https://www.facebook.com/Motos-Scooter-108807104589055/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a></li>
                        <li><a href="https://github.com/DaimerOspin/semana1-grupo27-E-5-27" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li><a href="#https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>
    
    <div class="redes1">
    </div>
    <div class="header" id="inicio">
        <div class="banner">
            <div class="row" id="baner_image">
                    <p class="col-7 col-sm-9 site-title" style="" id="banner_titulo">La Movilidad Del Futuro</p>
                    <br>          
            </div> 
        </div> 
    </div> 
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
   <br>
   
</div>
</template>

<script>

export default {
    name: 'navbar'
}
</script>

<style>
*{
    margin:0;
    padding:0;
    
}
.banner>img {
    width: 100%;
    height: 575px;
    max-width: 100%;
    object-fit: cover;
}
ul{
    font-family: cursive;
    font: 3em ;
}
#contenedor{
    margin: 0;
    width: 100%;
}
h1{
    margin-right: 100px;
   font-size: 2em; 
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
   margin-top: 25px;
   
}
#head{
    color: rgb(196, 236, 14);
    background-color: rgb(0, 0, 0);
    padding: 1px;  
    

      
    
}
.menu-principal{
    display: flex;
    list-style: none;
    justify-content: right;    
}
#img5-center{
    width: 50px;
    float: left;
    margin-right: 4px;
    margin-left: 15px; 
    
}
#img4-center{
    width: 49px;
    float: left;
    margin-right: 9px;
    margin-left: 15px; 
    top: -6px;  
}
#img3-center{
    width: 60px;
    float: left;
    top: -4px;
    left: 20px;
}
#img2-center{
    width: 60px;
    float: left;
    margin-right: 100px;
    margin-left: 0px;  
}
.carousel-item{
    margin-top:-px;

}
#img1-center{
    width: 170px;
    float: right;
    margin-top: 11px;
    margin-left: -30px;
    
}
nav{
    margin:  auto;
    width: 90%;
    max-width: 900px;
}
nav ul{
    list-style: none;
}
nav > ul{
   
    overflow: hidden;
    width: 100%;
    background: rgba(2, 2, 2, 0.322);
    position: relative;  
}
nav > ul li{
    display:table-cell;
}
/*sub menu*/
nav > ul > li:hover > ul {
    display: block;
    -webkit-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    -moz-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    -o-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    transition: all 0.3s 0s ease, all 0.5s 0s ease;
}
nav > ul > li > ul{
    display: none;
}
nav > ul li a{
    color: #fff;
    display: block;
    line-height: 55px;
    padding: 11px;
    position: relative;
    text-align: center;
    text-decoration: none;
    -webkit-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    -moz-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    -o-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    transition: all 0.3s 0s ease, all 0.5s 0s ease;   
}
nav > ul > li > ul > li a:hover{
    background: #5da5a2;
}
nav > ul > li >a span{
    background: #174459;
    display: block;
    height: 100%;
    width: 100%;
    left: 0;
    position:absolute;
    top: -97px;
    -webkit-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    -moz-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    -o-transition: all 0.3s 0s ease, all 0.5s 0s ease;
    transition: all 0.3s 0s ease, all 0.5s 0s ease;
    
}
nav > ul > li > a span .icon{
    display: block;
    line-height: 60px;
}
nav > ul > li > a:hover > span{
    top: 0;
}
nav ul li a .primero{
    background-color: #c9d2d4;
}
nav ul li a .segundo{
    background-color: #2422b6;
}
nav ul li a .tercero{
    background-color: #53c5f2;
}
.banner{
    width: 100%; 
    text-align: center;
}
#baner_image{

    margin-left: 50px;
    margin-top: -270px;
    
   
} 
#banner_titulo{
    font-size: 2em;
    color:rgb(252, 252, 252);
   
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
}
.hero-texts { 
    
    padding: 0;
    position: absolute;
    top: 30%;
    left: 30%;
    text-align: center;
    margin-top: 150px;
    transform: translateX(-50%) translateY(-50%); 
}
#img1{
    float: right;
    margin-bottom: 200px;
}
#btn-menu{
    display: none;
}
 
/* colores*/
.primero{
    color: rgb(184, 78, 17);

}
.segundo{
    color: #dfd7d7b9;
}
.tercero{
    color: rgb(119, 3, 3);
}

.social-iconos{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0; 
}
.social-iconos{
    list-style: none;
}
.social-iconos li a{
    display: block;
    margin-left: -80px;
    /* position: relative; */
    width: 50px;
    height: 40px;
    line-height: 40px;
    /* font-size: 1em; */
    margin-top: -30px;
    border-radius: 100%;
    text-align: center;
    color: #ffffff;
    transition: .5s;
    border: 3px solid #fff;
    overflow: hidden;
} 
.social-iconos li a:hover{
    transform: scale(1,2);
}
.social-iconos li a::before{
    content: "";
    position: absolute;
    width: 50%;
    height: 50px;
    z-index: -1;
    transform: scale(1);
    top: 0;
    left: 0;
    transition: .5s;
}
.social-iconos li a:hover::before{
    transform: scale(0);
}
.social-iconos li:nth-child(1) a,
.social-iconos li a:hover::before {

    background: #1876f24b;
}

.social-iconos li:nth-child(2) a,
.social-iconos li a:hover::before {
    background: #1DA1F2;
}
.social-iconos li:nth-child(3) a,
.social-iconos li a:hover::before {
    background: #25D366;
}
.social-iconos li:nth-child(4) a,
.social-iconos li a:hover::before {
    background: #131418;
}
.social-iconos li:nth-child(5) a,
.social-iconos li a:hover::before {
    background:#e44048;
}
/*hover efect menu socila*/

.social-iconos li:nth-child(1) a:hover {
    background:  #fff;
    border: 2px dashed #1876f24b;
    color: #1876f24b;
}

.social-iconos li:nth-child(2) a:hover {
    background:  #fff;
    border: 2px dashed #1DA1F2;
    color: #1DA1F2;
}
.social-iconos li:nth-child(3) a:hover {
    background:  #fff;
    border: 1px dashed #25D366;
    color: #25D366;
}
.social-iconos li:nth-child(4) a:hover {
    background:  #fff;
    border: 1px dashed #131418;
    color: #131418;
}
.social-iconos li:nth-child(5) a:hover {
    background:  #fff;
    border: 1px dashed #E4405F;
    color:#E4405F;
}
/* secciones serviccios      */


.services-info {
    padding: 20px;
    text-align: center;
}
.services-section{
 
    display: flex;
}
.titu-services{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; color: azure;
    background-color: rgb(61, 61, 61);
    border: 3px solid color rgb(24, 131, 131);
}
#servicio1{
    border: 2px solid rgb(255, 255, 255); 
   
    color: rgb(255, 255, 255);
    border: 3px solid rgb(216, 204, 149); 
    background-color: rgb(61, 61, 61);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif

}
#servicio2{
    border: 2px solid rgb(255, 255, 255); 
   
    color: rgb(255, 255, 255);
    border: 3px solid rgb(216, 204, 149); 
    background-color: rgb(61, 61, 61);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
#servicio3{
    border: 2px solid rgb(255, 255, 255); 
   
    color: rgb(255, 255, 255);
    border: 3px solid rgb(216, 204, 149); 
    background-color: rgb(61, 61, 61);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.titulo-servicios{
    font-family:'Times New Roman', Times, serif;
     font-size: 2em; color: rgb(216, 204, 149);

}


</style>
