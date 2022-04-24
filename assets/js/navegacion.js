window.onload=function(){
    let btn_registrar, btn_login;
    btn_registrar=document.getElementById("register");
    btn_login=document.getElementById("login");
    
    btn_registrar.addEventListener("click",register);
    btn_login.addEventListener("click",login);
}

function login(){
    let url="logeo.html"
    location.href=url;
}
function register(){
    let url="registro.html"
    location.href=url;
}