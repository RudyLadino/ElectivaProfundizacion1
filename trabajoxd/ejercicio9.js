let var1 = prompt("escriba la frase ", "");
let con = 0;
for (let i = 0; i < var1.length; i++) {
    if (var1.substr(i, 1) == "a") {
        con = con + 1;
    };
};
document.write(" La palabra contiene " + con + " letras a");