
window.onload = inicio;

function aleatorio(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function inicio(){
  consultarPersonaje();
  llenarCombo();
  asignarEventos();
}

function llenarCombo(){
  var opt;
  for(let i=1;i<493;i++)
  {
    opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    codigo.appendChild(opt);
  }
}
function asignarEventos(){
  btnConsultar.addEventListener("click",
  consultarPersonaje);
}
function consultarPersonaje(){
  let id;
  if(!codigo.value)
  {
    id = aleatorio(1,492);
  }
  else{
    id = codigo.value;
  }
    
   fetch("https://rickandmortyapi.com/api/character/"+id)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    //console.log(data);
    llenarTarjeta(data);
     
  })
}
function llenarTarjeta(data){
  codigo_personaje.innerHTML = data.id;
  fotoPerfil.innerHTML  = "<img src='"+data.image+"' />";
  nombre_personaje.innerHTML = data.name;
  estado_personaje.innerHTML = data.status;
  genero_personaje.innerHTML = data.gender;
}

window.onload = inicio;

function aleatorio(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function inicio(){
  consultarPersonaje();
  llenarCombo();
  asignarEventos();
}

function llenarCombo(){
  var opt;
  for(let i=1;i<493;i++)
  {
    opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    codigo.appendChild(opt);
  }
}
function asignarEventos(){
  btnConsultar.addEventListener("click",
  consultarPersonaje);
}
function consultarPersonaje(){
  let id;
  if(!codigo.value)
  {
    id = aleatorio(1,492);
  }
  else{
    id = codigo.value;
  }
    
   fetch("https://rickandmortyapi.com/api/character/"+id)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    //console.log(data);
    llenarTarjeta(data);
     
  })
}
function llenarTarjeta(data){
  codigo_personaje.innerHTML = data.id;
  fotoPerfil.innerHTML  = "<img src='"+data.image+"' />";
  nombre_personaje.innerHTML = data.name;
  estado_personaje.innerHTML = data.status;
  genero_personaje.innerHTML = data.gender;
}
