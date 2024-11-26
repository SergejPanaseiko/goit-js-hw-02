function formatMessage(message, maxLength){
    let lengthMessage = 0;
    lengthMessage = message.length;
    if (lengthMessage > maxLength) {
        message = message.slice(0, maxLength) + "...";
    }
        return message;
    }
console.log("-------------- Задача 2 -----------------")
console.log(formatMessage("Curabitur ligula sapien", 16))
console.log(formatMessage("Curabitur ligula sapien", 23))
console.log(formatMessage("Vestibulum facilisis purus nec", 20))
console.log(formatMessage("Vestibulum facilisis purus nec", 30))
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15))
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41))
console.log(" ")