let resultado = document.getElementById("divResultado")

function acharQuadrante() {
    let x = Number(document.getElementById("inpX").value)
    let y = Number(document.getElementById("inpY").value)

    if (x > 0 && y > 0) {
        resultado.innerHTML = "Esta no primeiro quadrante"

    } else {
        if (x < 0 && y < 0) {
            resultado.innerHTML = "Esta no segundo quadrante"
        } else {
            if (x < 0 && y > 0) {
                resultado.innerHTML = "Esta no terceiro quadrante"

            } else {
                if (x > 0 && y < 0) {
                    resultado.innerHTML = "Esta no quarto quadrante"

                } else {
                    resultado.innerHTML = "Valores incorretos"
                }
            }
        }
    }
}
