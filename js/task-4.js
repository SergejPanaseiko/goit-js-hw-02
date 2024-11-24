function getShippingCost(country){ 
    let price;
    if (country === "Australia") price = 170;
    else if (country === "China") price = 100;
    else if (country === "Chile") price = 250;
    else if (country === "Jamaica") price = 120;

    switch (country) {
        case "Australia": return `Shipping to ${country} will cost ${price} credits`;
            break;
        case "China": return `Shipping to ${country} will cost ${price}  credits`;
            break;
        case "Chile": return `Shipping to ${country} will cost ${price}  credits`;
            break;
        case "Jamaica": return `Shipping to ${country} will cost ${price}  credits`;
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