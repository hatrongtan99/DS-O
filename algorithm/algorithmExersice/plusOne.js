// var plusOne = function(digits) {
//     let n = digits.length - 1;

//     while (n >= 0 && digits[n] == 9){
//         digits[n] = 0
//         if (n == 0) digits.unshift(1)
//         n--
//     }

//     if (digits[n] < 9) digits[n] += 1
//     return digits
// };

class Parrent {
    constructor(ho) {
        this.ho = ho
    }

    inHoTen() {
        console.log("inHoTen" + ' ' + this.ho)
    }

}
