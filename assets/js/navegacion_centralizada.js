let contenedor_menu;
let menu_items = [];
let paginas = [];
var iniciarLogin = undefined, iniciarRegistro = undefined;

const menu_html = `

<li class="nav-item">
    <a class="nav-link" href="javascript:void(0); " id="item_1" >Home <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
    <a class="nav-link" href="javascript:void(0);" id="item_2">About</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="javascript:void(0);" id="item_3" >Contact</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="javascript:void(0);" id="item_4">flex</a>
</li>
`;


window.onload = function(){
    contenedor_menu = document.querySelector("#menu");
    contenedor_menu.innerHTML = menu_html;
    setTimeout(hideURLbar, 0);

    asignarNavegacion();
}

function asignarNavegacion(){
    menu_items.push(document.getElementById("item_1"));
    menu_items.push(document.getElementById("item_2"));
    menu_items.push(document.getElementById("item_3"));
    menu_items.push(document.getElementById("item_4"));

    paginas["item_1"] = "home.html";
    paginas["item_2"] = "about.html";
    paginas["item_3"] = "contact.html";
    paginas["item_4"] = "flex.html";

    for(var i of menu_items)
    {
        i.addEventListener("click",abrirPagina);
    }
}

function hideURLbar() {
    window.scrollTo(0, 1);
}

function abrirPagina(evento){
    location.href = paginas[evento.target.id];
}