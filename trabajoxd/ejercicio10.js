let var1 = prompt("escriba la frase ", "");
let a = 0, e = 0, ii = 0, o = 0, u = 0;
for (let i = 0; i < var1.length; i++) {
    if (var1.substr(i, 1) == "a") {
        a = a + 1;
    } else {
        if (var1.substr(i, 1) == "e") {
            e = e + 1;
        } else {
            if (var1.substr(i, 1) == "i") {
                ii = ii + 1;
            } else {
                if (var1.substr(i, 1) == "o") {
                    o = o + 1;
                } else { }
                if (var1.substr(i, 1) == "u") {
                    u = u + 1;
                }

            }
        }
    }
};
if (a != 0) {
    document.write("en el texto esta la vocal a " + "</br> ")
} else {
    document.write("en el texto NO esta la vocal a " + "</br> ")
};
if (e != 0) {
    document.write("en el texto esta la vocal e " + "</br> ")
} else {
    document.write("en el texto NO esta la vocal e " + "</br> ")
};
if (ii != 0) {
    document.write("en el texto esta la vocal i " + "</br> ")
} else {
    document.write("en el texto NO esta la vocal i " + "</br> ")
};
if (o != 0) {
    document.write("en el texto esta la vocal o " + "</br> ")
} else {
    document.write("en el texto NO esta la vocal o " + "</br> ")
};
if (u != 0) {
    document.write("en el texto esta la vocal u " + "</br> ")
} else {
    document.write("en el texto NO esta la vocal u " + "</br> ")
};