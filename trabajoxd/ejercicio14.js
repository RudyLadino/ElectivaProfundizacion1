let var1 = parseInt(prompt("Ingrese numero ", ""));
if (var1 % 2 == 0) {
    document.write("El número " + var1 + " es divisible entre 2"+"</br> ");
};
if (var1 % 3 == 0) {
    document.write("El número " + var1 + " es divisible entre 3"+"</br> ");
};
if (var1 % 5 == 0) {
    document.write("El número " + var1 + " es divisible entre 5"+"</br> ");
};
if (var1 % 7 == 0) {
    document.write("El número " + var1 + " es divisible entre 7"+"</br> ");
};
if (var1 % 2 >= 1 && var1 % 3 >= 1 && var1 % 5 >= 1 && var1 % 7 >= 1) {
    document.write("El número " + var1 + " NO es divisible entre 2, 3, 5 o 7"+"</br> ");
}