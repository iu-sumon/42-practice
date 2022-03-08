// ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?

function getAdd(x, y) {
    const add = x + y;  // function er vitore let ,const , var sobai block scope toire kore
    return add;
}
const result = getAdd(12, 13)
console.log(result);

let n = 5;
if (n < 10) {
    var add = n * 5; // var diye declare korle block scope hoy na ... let and const er jonno hoy

}
console.log(add);