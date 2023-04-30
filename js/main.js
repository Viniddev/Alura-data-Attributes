var controle = document.querySelectorAll("[data-controle]")

controle.forEach( (tinta) => {
    tinta.addEventListener("click", (elemento) => {
        manipularDados(elemento.target.dataset.controle, elemento.target.parentNode)
    })    
});

function manipularDados(action, elemento){
    let tintas = elemento.querySelectorAll("[data-tintas]")
    let quadro = elemento.querySelector("[data-quadro]")

    tintas.forEach((item) => {
        if(action === "+"){
            item.setAttribute("style", "opacity: 1;")
            quadro.setAttribute("style", "opacity: 1;")
        }else{
            item.setAttribute("style", "opacity: 0;")
            quadro.setAttribute("style", "opacity: 0;")
        }
    });
}