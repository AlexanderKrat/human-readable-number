module.exports = function toReadable (number) {
    let numberarr = number.toString().split('');
    let from0To19 = [
        'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let tens = [
        'ten', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let index1 = numberarr[0] - 1;
    let index2 = numberarr[1] - 1;
    let index3 = numberarr[2];

if(number === 0){
    return "zero";
}
if(number % 10 === 0 && number < 100){
    return tens[index1];
}
else if(number < 20){
return from0To19[number];
}
else if(number > 19 && number < 100){
return tens[index1] + " " + from0To19[index2];
}
else if (number ){
    return from0To19[index1 + 1] + " hundred"
}

}
