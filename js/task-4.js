function getShippingCost(country) { 
    let price = 0;
    switch (country) {
        case "Australia":
            price = 170;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case "China":
            price = 100;
            return `Shipping to ${country} will cost ${price}  credits`;
            break;
        case "Chile":
            price = 250;
            return `Shipping to ${country} will cost ${price}  credits`;
            break;
        case "Jamaica":
            price = 120;
            return `Shipping to ${country} will cost ${price}  credits`;
            break;
        default: return "Sorry, there is no delivery to your country";
}
}
console.log("-------------- Задача 4 -----------------")
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden")); 