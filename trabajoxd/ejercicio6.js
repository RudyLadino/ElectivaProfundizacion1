let var1 = parseInt (prompt("Ingrese numero 1",""));
let var2 = parseInt (prompt("Ingrese numero 2",""));
if(var1==var2){
    document.write(var1+" Es igual a "+ var2);
}else{
if(var1>var2){
    max=var1;
    otro=var2;
}else{
    max=var2;
    otro=var1;
}
}
document.write(max+" Es mayor que "+ otro);