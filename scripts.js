
    const convertButton = document.querySelector (".convert-button")
    const currencySelect = document.querySelector(".currency-select-converter")
   


function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value /* Modelo para extrair o que for desejado no 'Input' ou qual for outra função desejado do HTML na tela */
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real (BR$)
    const currencyValueConverted = document.querySelector (".currency-value") // Valor em outras Moeadas
    

    const dolarToday = 5.2 /* variáveis - valores que têm que serem preenchidos como se fossem 'legendas'*/
    const euroToday = 6.2
    const realToday = 0.21
    const bitcoinToday = 122.000
    const libraToday = 6.13

    /*const convertedValue = inputCurrencyValue / dolarToday  Cálculo simples do valor desejado*/

    if(currencySelect.value =="dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{ /* Fazer formatação de moeda ou texto de acordo com o idioma*/
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if(currencySelect.value =="euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{ /* Fazer formatação de moeda ou texto de acordo com o idioma*/
            style: "currency",
            currency: "BRL" 
    }).format(inputCurrencyValue) /* Fazer formatação de moeda ou texto de acordo com o idioma*/
    
    /*currencyValueToConvert.innerHTML = inputCurrencyValue /* Modelo para alterar textos dentro do que for desejado na tela*/
    /*currencyValueConverted.innerHTML = convertedValue  /*Modelo para alterar textos dentro do que for desejado na tela*/
    
   
   
}

/* 1ª Etapa - const inputCurrencyValue = document.querySelector(".input-currency").value (Value: Pegar/Exibir os valores digitados)
    console.log(inputCurrencyValue)
} */

/* {
    Teste - console.log("Funcionouuuu!")
} */

    function changeCurrency(){
        const currencyName = document.getElementById ("currency-name")
        const currencyImage = document.querySelector(".currency-img")
        
        
        if (currencySelect.value == "dollar") {
            currencyName.innerHTML = "Dólar Americano"
            currencyImage.src="./assets/dollar-usa.png"}

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src="./assets/euro-euro.png"}

        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImage.src="./assets/libra-uk.png"}

        if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src="./assets/bitcoin.png"}

        if (currencySelect.value == "real") {
            currencyName.innerHTML = "Real"
            currencyImage.src="./assets/real-br.png"}
                

    convertValues ()

    }

    /*function currencyFromConvert(){
        
    const currencyFrom = document.querySelector(".currency-from")
    const currencyImgSecond = document.querySelector(".currency-img-from")
    const currencyNameFrom = document.getElementById("currency-name-from")   

    if (currencyFrom.value == "dollar") {
        currencyNameFrom.innerHTML = "Dólar Americano"
        currencyImgSecond.src="./assets/dollar-usa.png"}

    if (currencyFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImgSecond.src="./assets/euro-euro.png"}

    if (currencyFrom.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImgSecond.src="./assets/libra-uk.png"}

    if (currencyFrom.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImgSecond.src="./assets/bitcoin.png"}

    if (currencyFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real"
        currencyImgSecond.src="./assets/real-br.png"}

    }*/







    convertButton.addEventListener("click", convertValues) /* Chamar o ouvinte quando o botão receber o 'click' no botão da Function */
    currencySelect.addEventListener("change", changeCurrency)
   
  


