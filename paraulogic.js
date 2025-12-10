const secreta = 'CALVO'
let resuelto = false
let intentos = 0
/*
Inicialitzam valors
 */
//document.getElementById('pista').value='La paraula d\'avui és de :'+secreta.length + ' lletres.'
function analitzarParaula(prueba) {
    let palabra = prueba.toUpperCase()
    let colores = ""
    if (intentos < 5) {
        if (palabra.length === 5) {
            if (palabra === secreta) {
                // document.getElementById('enviar').disabled = true
                resuelto = true
            } else {
                for (let i = 0; i < palabra.length; i++) {
                    if (secreta.includes(palabra.charAt(i))) {
                        if (palabra.charAt(i) === secreta.charAt(i)) {
                            colores += "2"
                        } else {
                            colores += "1"
                        }
                    } else {
                        colores += "0"
                    }
                }
            }
            intentos++
            pintarResposta(palabra, colores)
            if (intentos >= 5){
                document.getElementById('title').innerHTML = '<h1>PERDEDOR PRINGADO</h1>'
            }
        } else {
            alert("palabra de 5 letras pls")
        }

    }
    else {
        // document.getElementById('enviar').disabled = true
        alert("Te has quedado sin intentos. PERDEDOR")
    }
}

function pintarResposta(paraula, colores) {
    let final = '<div class="resposta">\n'
    // document.getElementById('respostes').innerHTML += '<div class="resposta">\n' +
    //     '        <div class="slot">' + paraula.charAt(0) + '</div>\n' +
    //     '        <div class="slot">' + paraula.charAt(1) + '</div>\n' +
    //     '        <div class="slot">' + paraula.charAt(2) + '</div>\n' +
    //     '        <div class="slot">' + paraula.charAt(3) + '</div>\n' +
    //     '        <div class="slot">' + paraula.charAt(4) + '</div>\n' +
    //     '    </div>';
    for (let i = 0; i < paraula.length; i++){
        if (colores.charAt(i) === "0") {
            final += '        <div class="slot">' + paraula.charAt(i) + '</div>\n'
        }
        else if (colores.charAt(i) === "1") {
            final += '        <div class="slot blue">' + paraula.charAt(i) + '</div>\n'
        }
        else {
            final += '        <div class="slot green">' + paraula.charAt(i) + '</div>\n'
        }
    }
    final += '</div>'
    document.getElementById('respostes').innerHTML += final
}

let texto = "";

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        texto = texto.slice(0, -1);
    }
    else if (event.key === "Enter" && resuelto === false) {
        analitzarParaula(texto);
        texto = ''
    }
    if (texto.length < 5) {
        if (event.key.length === 1) {
            texto += event.key;
        }
    }

    document.getElementById("texto").textContent = texto;
});
