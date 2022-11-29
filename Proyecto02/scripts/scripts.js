let cargarDatosApi = () => {
    fetch("http://api.citybik.es/v2/networks")
    .then(response => response.text())
    .then(data =>{
        data = JSON.parse(data)
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
            
            document.querySelector(".contenedordedatos .tabladedatos .api").innerHTML += plantilla
            
        }
    })

    .catch(console.error)
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatosApi()
})
