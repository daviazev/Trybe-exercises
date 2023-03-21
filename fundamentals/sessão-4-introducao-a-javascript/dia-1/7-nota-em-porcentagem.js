let porcentage = -1;

if (porcentage >= 90) {
    console.log("A")
} else if (porcentage >= 80) {
    console.log("B")
} else if (porcentage >= 70) {
    console.log("C") 
} else if (porcentage >= 60) {
    console.log("D") 
} else if (porcentage >= 50) {
    console.log("E") 
} else if (porcentage < 50 && porcentage > 0) {
    console.log("F no chat") 
} else if (porcentage < 0 || porcentage > 100) {
    console.log("Erro.")
}