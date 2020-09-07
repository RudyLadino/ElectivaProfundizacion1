let var1 = prompt("Ingrese el primer valor");
let var2 = prompt("Ingrese el segundo valor");
let menor;
if (var1 >= var2) {
    menor = var2;
}
else {
    menor = var1;
};
for (let i = 1; i <= menor / 2; i++) {
    if (var1 % i == 0 && var2 % i == 0) {
        document.write(i, ", ");
    }
};