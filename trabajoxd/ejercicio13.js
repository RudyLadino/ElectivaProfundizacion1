let var1 = parseInt(prompt("Ingrese numero ", ""));
if (var1 % 2 == 0) {
    document.write("El número " + var1 + " es divisible entre 2");
} else {
    if (var1 % 3 == 0) {
        document.write("El número " + var1 + " es divisible entre 3");
    } else {
        if (var1 % 5 == 0) {
            document.write("El número " + var1 + " es divisible entre 5");
        } else {
            if (var1 % 7 == 0) {
                document.write("El número " + var1 + " es divisible entre 7");
            } else {
                document.write("El número " + var1 + " NO es divisible entre 2, 3, 5 o 7");

            }
        }
    }
}