async function consultarApi() {

    let urlApi = 'data.json'
    try {
        let resText = await fetch(urlApi, { method: 'get' });
      
        let resJson = await resText.json();
       
        pintarInfo(resJson);
        return resJson.json;
    } catch (error) {
        console.log(error)
    }
}
consultarApi();

const pintarInfo = info => {
    producto1 = document.getElementById('producto1');
    asesoria2 = document.getElementById('asesoria');
    atencion = document.getElementById('atencion');
    

    servicio1.children[0].src = info.json[0].imagen;
    servicio1.children[1].innerText = info.json[0].titulo;
    servicio1.children[2].innerText = info.json[0].descripcion;

    servicio2.children[0].src = info.json[1].imagen;
    servicio2.children[1].innerText = info.json[1].titulo;
    servicio2.children[2].innerText = info.json[1].descripcion;

    servicio3.children[0].src = info.json[2].imagen;
    servicio3.children[1].innerText = info.json[2].titulo;
    servicio3.children[2].innerText = info.json[2].descripcion;

}