document.getElementById('calcPrice').onclick = function() {calcPrice()}

function calcPrice() {
    const userName = document.getElementById("userName").value
    const distance = parseInt(document.getElementById("distance").value)
    const age =document.getElementById("age").value
    let saleAmount = 100
    let saleType = "Biglietto Standard"


    if (age == 'under18') {
        saleAmount = 80
        saleType = "Sconto Under18"
    }
    else if (age == 'over65') {
        saleAmount = 60
        saleType = "Sconto Over65"
    }
    let carriage = Math.round((Math.random() * 12) + 1)
    let cpCode = Math.round(100000 + (Math.random() * 900000))
    let price = ((distance * 0.21) / 100) * saleAmount
    price = price.toFixed(2)  
    
    let ticketCarriage = document.getElementById("carriage")
    ticketCarriage.innerHTML = carriage
    let ticketCpCode = document.getElementById("cpCode")
    ticketCpCode.innerHTML = cpCode
    let ticketSaleType = document.getElementById("saleType")
    ticketSaleType.innerHTML = saleType
    let ticketName = document.getElementById("ticketName")
    ticketName.innerHTML = (userName)
    let ticketPrice = document.getElementById("ticketPrice")
    ticketPrice.innerHTML = (price + "€")
}