let formulario = document.querySelector(".fale-conosco") //ir ao html para selecionar o componente desejado
let mascara = document.querySelector (".mascara-form")



function chamarForm() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function sumirForm() {
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
    formulario.style.transform = "translateX(0)"

    
}


    

