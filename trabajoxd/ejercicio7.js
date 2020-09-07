let var1 = parseInt (prompt("Ingrese numero 1",""));
let var2 = parseInt (prompt("Ingrese numero 2",""));
let var3 = parseInt (prompt("Ingrese numero 3",""));
aux=var1;
if(aux<var2){
    aux=var2;
    if(aux<var3){
        aux=var3;
    }
}
document.write("El numero mayor entre "+var1+" "+var2+" "+var3+" es "+aux);