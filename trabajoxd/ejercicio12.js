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
document.write("en el texto hay" + a + " letras a " + "</br> ")
document.write("con " + e + " letras e " + "</br> ")
document.write("con " + ii + " letras i " + "</br> ")
document.write("con " + o + " letras o " + "</br> ")
document.write("con " + u + " letras u " + "</br> ")