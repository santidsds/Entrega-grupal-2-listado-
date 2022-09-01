agregarBtn = document.getElementById("agregar");
nuevoItem = document.getElementById("item");
lista = document.getElementById("contenedor")
limpiar = document.getElementById("limpiar");

let items = [];

window.addEventListener("DOMContentLoaded",()=>{
    vacio()
})

function vacio(){
    if(localStorage.getItem("list") === null){
        lista.innerHTML = ""
    } else {
        lista.innerHTML = `
        <li>${JSON.parse(localStorage.getItem("list"))}</li>
        `
    }
}

agregarBtn.addEventListener("click", () => {
    
    if (nuevoItem.value.length != 0){
        items.push(nuevoItem.value)
        localStorage.setItem("list", JSON.stringify(items.join("<br>")));
        lista.innerHTML = `
        <li>${JSON.parse(localStorage.getItem("list"))}</li>
        `

        
    }
})

limpiar.addEventListener("click", () => {
    localStorage.clear()
    lista.innerHTML = ""
})




