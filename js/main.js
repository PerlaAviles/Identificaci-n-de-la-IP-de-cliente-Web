// alert("Hola mundo"); 
//se manda un mensaje al usuario que esta trabajando 
let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let zona_horaria=document.getElementById("zona_horaria");
const solicitudAPI = () => {
  
// Hacer una petición para un usuario con ID especifico
axios.get("https://itp-bdd-ptag.000webhostapp.com/php-geoip-api/index.php")
  .then(function (response) { // se crea una funcion en el cual recibo como parametro la funcion respuesta
    // manejar respuesta exitosa
    console.log(response.data.pais);
    ip.innerHTML=response.data.ip;
    pais.innerHTML= response.data.pais;
    continente.innerHTML= response.data.continente;
    zona_horaria.innerHTML= response.data.zona_horaria;

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
 


};
// Llama al evento LOAD CADA VEZ QUE SE REFRESCA O ACTUALIZA LA PÁGINA 
// Y llama a la funcion solicitudAPI que tiene la ruitina de llamar a la API desde axios
window.addEventListener('load', solicitudAPI);
