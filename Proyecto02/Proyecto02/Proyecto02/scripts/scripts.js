let cargarDatosApi = () => {
    fetch("http://api.citybik.es/v2/networks")
    .then(response => response.text())
    .then(data =>{
        data = JSON.parse(data)
        let arra = []
        for(networks of data.networks){
            let red = networks.href;
            let id = networks.id;
            let name = networks.name;
            let plantilla =
            `
            <tr>
                <th>${red}</th>
                <th>${id}</th>
                <th>${name}</th>
            </tr>   
            `
            arra.push(networks.name)
            document.querySelector(".contenedordedatos .tabladedatos .api").innerHTML += plantilla
        }
        console.log(arra);
        namecountry = Array.from(document.getElementsByClassName("encabezado"));
        console.log(namecountry[1]);
        namecountry[1].innerHTML = data.networks[1].name;
        titulo = document.getElementsByClassName("encabezado")
        titulo.innerHTML = data.networks[0].name;
    })

    .catch(console.error)
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatosApi()
})
