const a = 60;
const b = 60;
const c = 60;

if (a > 0 && b > 0 && c > 0 && a + b +c == 180) {
    console.log(true)
} else if (a > 0 && b > 0 && c > 0 && a + b + c != 180) {
    console.log(false)
} else {
    console.log("ERRO! Digite ângulos válidos. ")
}