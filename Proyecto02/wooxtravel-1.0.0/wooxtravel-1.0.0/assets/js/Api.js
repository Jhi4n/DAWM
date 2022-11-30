let cargarDatosApi = () =>{
    fetch("http://api.citybik.es/v2/networks")
    .then(response => response.text())
    .then(data =>{
        data = JSON.parse(data)
        namecountry = Array.from(document.getElementsByClassName("ciudadbanner"));
        console.log(namecountry[1]);
        namecountry[0].innerHTML = data.networks[0].location.city;
        namecountry[1].innerHTML = data.networks[1].location.city;
        namecountry[2].innerHTML = data.networks[2].location.city;
        namecountry[3].innerHTML = data.networks[3].location.city;
    })
}
let arra = []

function obtenerNoticias(){
    fetch("http://api.citybik.es/v2/networks")
    .then(response => response.text())
    .then(data =>{
        data = JSON.parse(data)
        for(networks of data.networks){
            arra.push(networks.location.city)
        }
    if(arra.includes(document.getElementById("buscador").value)){
        const index = arra.indexOf(document.getElementById("buscador").value)
        console.log(index)
        fetch("http://api.citybik.es/v2/networks")
        .then(response => response.text())
        .then(data =>{
            data = JSON.parse(data)
                console.log(data["networks"][index])
                const direccion = data["networks"][index]
                const ciudad = document.getElementById("Ciudad")
                ciudad.innerHTML = direccion.location.city
                const pais = document.getElementById("Pais")
                pais.innerHTML = direccion.location.country
                const Latitud = document.getElementById("latitud")
                Latitud.innerHTML = direccion.location.latitude
                const Longitud = document.getElementById("longitud")
                Longitud.innerHTML = direccion.location.longitude
            })
    }
    })
}
window.addEventListener('DOMContentLoaded',(event) =>{
    cargarDatosApi()
})