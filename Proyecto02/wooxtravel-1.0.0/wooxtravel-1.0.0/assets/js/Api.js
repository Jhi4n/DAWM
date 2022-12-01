let cargarDatosApi = () =>{
    fetch("http://api.citybik.es/v2/networks")
    .then(response => response.text())
    .then(data =>{
        data = JSON.parse(data)
        namecountry = Array.from(document.getElementsByClassName("ciudadbanner"));
        namecountry[0].innerHTML = data.networks[0].location.city;
        namecountry[1].innerHTML = data.networks[1].location.city;
        namecountry[2].innerHTML = data.networks[2].location.city;
        namecountry[3].innerHTML = data.networks[3].location.city;
        for(networks of data.networks){
            let ciudad = networks.location.city;
            let plantilla =
            `
            <tr>
                <th onclick="seleccionar(this)">${ciudad}</th>
            </tr>   
            `
            arra.push(networks.name)
            document.querySelector(".contenedordedatos .tabladedatos .api").innerHTML += plantilla
        }
        console.log(arra);
        namecountry = Array.from(document.getElementsByClassName("encabezado"));
    })
}

function seleccionar(tr){
    $(function(){
        console.log(tr.innerHTML)
        var texto = tr.innerHTML
        document.getElementById("buscador").value = texto;
    })
}
function iniciarMap(latitud, longitud){
    var coords = {lat:latitud ,lng:longitud };
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 13,
        center: coords
    });
    var marker = new google.maps.Marker({
        position: coords,
        map: map
    });
}

let arra = []

function obtenerPais(){
    fetch("http://api.citybik.es/v2/networks")
    .then(response => response.text())
    .then(data =>{
        data = JSON.parse(data)
        for(networks of data.networks){
            arra.push(networks.location.city)
        }
    if(arra.includes(document.getElementById("buscador").value)){
        const index = arra.indexOf(document.getElementById("buscador").value)
        fetch("http://api.citybik.es/v2/networks")
        .then(response => response.text())
        .then(data =>{
            data = JSON.parse(data)
                const direccion = data["networks"][index - 614]
                console.log(direccion.location.city)
                const ciudad = document.getElementById("Ciudad")
                ciudad.innerHTML = direccion.location.city
                const pais = document.getElementById("Pais")
                pais.innerHTML = direccion.location.country
                const Latitud = document.getElementById("latitud")
                Latitud.innerHTML = direccion.location.latitude
                const Longitud = document.getElementById("longitud")
                Longitud.innerHTML = direccion.location.longitude
                iniciarMap(direccion.location.latitude, direccion.location.longitude);
            })
    }
    })
}
window.addEventListener('DOMContentLoaded',(event) =>{
    cargarDatosApi()
})