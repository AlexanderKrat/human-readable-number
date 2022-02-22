module.exports = function reverse (n) {
    let reverse = n.toString().split('').reverse().join('');
    if (n < 0){
        return reverse.slice(0, -1)
    }
    else{
        return reverse
    }
}