const convertButton = document.querySelector(".button-converter")
const select1 = document.querySelector(".select-converterde")
const select2 = document.querySelector(".select-converterpara")
const img01 = document.querySelector(".img-01")
const img02 = document.querySelector(".img-02")
const descricao01 = document.querySelector(".descriçao-moeda1")
const descricao02 = document.querySelector(".descriçao-moeda")


function convertValue() {
    const input = document.querySelector(".input-valor").value
    const numerosaconverter = document.querySelector(".valor-a-converter")
    const numerosconvertidos = document.querySelector(".valor-convertido")

    const dolarHoje = 5.69
    const euroHoje = 7.56
    const pesoargentinoHoje = 0.0047

    const realParaDolar = 0.18
    const realParaEuro = 0.16

    const euroParaDólar = 1.13
    const pesoParaDólar = 0.00083

    const dolarParaEuro = 0.88
    const pesoParaEuro = 0.00073


    if (select1.value == "Real") {

        numerosaconverter.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input)
    }

    if (select1.value == "Dólar") {

        numerosaconverter.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(input)
    }

    if (select1.value == "Euro") {

        numerosaconverter.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(input)
    }

    if (select1.value == "Peso") {

        numerosaconverter.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ARS"
        }).format(input)
    }





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
    }

    if (select2.value == "Peso") {
        numerosconvertidos.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ARS"
        }).format(input / pesoargentinoHoje)
    }

    if (select2.value == "Real") {
        numerosconvertidos.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input)
    }







    if (select1.value == "Dólar" && select2.value == "Real") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input / realParaDolar)
    }

    if (select1.value == "Dólar" && select2.value == "Euro") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(input / euroParaDólar)
    }

    if (select1.value == "Dólar" && select2.value == "Peso") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ARS"
        }).format(input / pesoParaDólar)
    }


    if (select1.value == "Dólar" && select2.value == "Dólar") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(input)
    }





    if (select1.value == "Euro" && select2.value == "Real") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input / realParaEuro)
    }

    if (select1.value == "Euro" && select2.value == "Dólar") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(input / dolarParaEuro)
    }

    if (select1.value == "Euro" && select2.value == "Peso") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ARS"
        }).format(input / pesoParaEuro)
    }

    if (select1.value == "Euro" && select2.value == "Euro") {

        numerosconvertidos.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(input)
    }




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

    if (select2.value == "Peso") {
        descricao02.innerHTML = "Peso Argentino"
        img02.src = "assets/peso argentino (2).png"
    }

    if (select2.value == "Real") {
        descricao02.innerHTML = "Real"
        img02.src = "assets/brasil 2.png"
    }



    convertValue()
}

select2.addEventListener("change", mudarselect02)





function mudarselect1() {

    if (select1.value == "Real") {
        img01.src = "assets/brasil 2.png"
        descricao01.innerHTML = "Real"
    }

    if (select1.value == "Dólar") {
        img01.src = "assets/estados-unidos (1) 1.png"
        descricao01.innerHTML = "Dólar Americano"
    }

    if (select1.value == "Euro") {
        img01.src = "assets/libra 1.png"
        descricao01.innerHTML = "Euro"
    }

    convertValue()


}


select1.addEventListener("change", mudarselect1)


























