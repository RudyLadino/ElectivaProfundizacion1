let var1 = prompt("Ingrese el priemr valor");
for (let i = 1; i <= var1 / 2; i++) {
    if (var1 % i == 0) {
        document.write(i, ",");
        o = i + 1;
    }
}
document.write(var1);