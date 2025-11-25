const botones = document.querySelectorAll('button')
const pantallaH3 = document.querySelector('.pantalla h3')

let resetCalculadora = false /* RESETEA LA CALCULADORA ( vuelve a empezar desde 0) */

function borrarAc() {
    pantallaH3.textContent = '0'
}


function eliminarDigito(valor) {

    if(valor === 'C') {

        if(pantallaH3.textContent.length === 1 || pantallaH3.textContent === 'error') {

            pantallaH3.textContent = '0'
            return

        } else {
            pantallaH3.textContent = pantallaH3.textContent.slice(0, -1)
        }             
    } 
}


function igual(valor) { 

    if(valor === '=') {

        try {

            pantallaH3.textContent = Math.trunc(eval(pantallaH3.textContent));
            resetCalculadora = true

        } catch (error) {
            pantallaH3.texContent = 'error'
        }
        return
    } 
}

function agregarNumero(valor) {

    if(pantallaH3.textContent === '0') {

        pantallaH3.textContent = valor 
        
    } else {

        pantallaH3.textContent += valor
    } 
    return  
}


botones.forEach(boton => {

    boton.addEventListener('click', () => {

        let botonApretado = boton.textContent
        const limite = '13'

        if(resetCalculadora === true) {

            pantallaH3.textContent = '0'
            resetCalculadora = false
        }

        // SI LA LONGITUD DE LA PANTALLA EXEDE EL RANGO DEL TAMAÑO DE LA MISMA SE BLOQUEA
        if(pantallaH3.textContent.length != limite) {
            
            if(botonApretado === 'AC') {
    
                borrarAc(botonApretado)
    
            } else if(botonApretado === 'C') {
                eliminarDigito(botonApretado)
    
            } else if(botonApretado === '=') {
                igual(botonApretado)
    
            } else {
    
                agregarNumero(botonApretado)
            }
        } else {
            alert("numero maximo")
            pantallaH3.textContent = '0'
        }
        
    })
})
