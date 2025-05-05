const convertButton = document.querySelector(".button-converter")
const select1 = document.querySelector(".select-converterde")
const select2 = document.querySelector(".select-converterpara")
const img02 = document.querySelector(".img-02")
const descricao02 = document.querySelector(".descriçao-moeda")


function convertValue() {
    const input = document.querySelector(".input-valor").value
    const numerosaconverter = document.querySelector(".valor-a-converter")
    const numerosconvertidos = document.querySelector(".valor-convertido")

    const dolarHoje = 5.69
    const euroHoje = 7.56
    const pesoargentinoHoje = 0.0047

    if (select2.value == "Dólar") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(input / dolarHoje)

    }

    if (select2.value == "Euro") {
        numerosconvertidos.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(input / euroHoje)

        img02.src = "assets/libra 1.png"

        descricao02.innerHTML = "Euro"
    }

    if (select2.value == "Peso") {
        numerosconvertidos.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ARS"
        }).format(input / pesoargentinoHoje)

        img02.src = "assets/peso argentino (2).png"

        descricao02.innerHTML= "Peso Argentino"
    }

    numerosaconverter.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(input)

}
convertButton.addEventListener("click", convertValue)




function mudarselect02() {

    if (select2.value == "Dólar") {
        descricao02.innerHTML = "Dolár Americano"
        img02.src = "assets/estados-unidos (1) 1.png"



    }

    if (select2.value == "Euro") {
        descricao02.innerHTML = "Euro"
        img02.src = "assets/libra 1.png"
    }

    convertValue()
}

select2.addEventListener("change", mudarselect02)






























