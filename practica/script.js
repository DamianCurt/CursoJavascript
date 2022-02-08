let sueldoBasico = 0;
let acumuladorMontoConceptoAdicional = 0;
let sueldoBruto = 0;
let sueldoNeto = 0;
let cantidadSueldos = 0;
let concepto;
let confirmacion;
let nombreConceptoAdicional;
const APORTES_SEGURIDAD_SOCIAL = 0.17;

/*do {
    let sueldoBasico = parseFloat(prompt("Ingrese el monto del sueldo básico"))
    confirmacion = (prompt("¿Desea agregar otro concepto?"))
    conceptoAdicional = (prompt("Ingrese nombre del concepto"))
    let adicional = parseFloat(prompt("Ingrese el monto del concepto"))
    confirmacion = (prompt("¿Desea agregar otro concepto?"))
    sueldoBruto += sueldoBasico += adicional
    
    if (isNaN(adicional) || isNaN(sueldoBasico)) {
        alert("Ingrese un valor válido")
    }
} while (confirmacion != "o")*/

/*do {
    sueldoBasico = parseFloat(prompt("Ingrese el monto del sueldo básico"));
    console.log(sueldoBasico);
    if (isNaN(sueldoBasico) || sueldoBasico<0) {
        alert("Ingrese un valor válido")
    }
} while (isNaN(sueldoBasico) || sueldoBasico<0);*/

sueldoBasico = parseFloat(prompt("Ingrese el monto del sueldo básico"));
while (isNaN(sueldoBasico) || sueldoBasico<0) {
    sueldoBasico = parseFloat(prompt("Ingrese un monto numérico y mayor a cero"));
}

confirmacion = prompt("¿Desea agregar otro concepto?");

while (confirmacion == "si") {
    nombreConceptoAdicional = prompt("Ingrese nombre del concepto");
    acumuladorMontoConceptoAdicional = acumuladorMontoConceptoAdicional + parseFloat(prompt("Ingrese el monto del concepto"));
    confirmacion = prompt("¿Desea agregar otro concepto?");
}

sueldoBruto = sueldoBasico + acumuladorMontoConceptoAdicional;

console.log(`Su sueldo básico es ${sueldoBasico}`);
console.log(`Sus adicionales son ${acumuladorMontoConceptoAdicional}`);
console.log(`Su sueldo bruto es ${sueldoBruto}`);
console.log(`Sus descuentos son 11% de jubilación, 3% obra social, 3% INSSJP–PAMI ${sueldoBruto*APORTES_SEGURIDAD_SOCIAL}`);
console.log(`Su sueldo neto es ${sueldoBruto-sueldoBruto*APORTES_SEGURIDAD_SOCIAL}`);


//funcinoes constantes
/*
const producto1 = (num1, PRESENTISMO) => num1 * PRESENTISMO
const producto2 = (num1, ANTIGUEDAD) => num1 * ANTIGUEDAD
const producto3 = (num1, DESCUENTOS) => num1 * DESCUENTOS
const sueldoBruto = (num1, producto1, producto2) => num1 + producto1 + producto2
const sueldoNeto = (num1, producto1, producto2, producto3) => num1 + producto1 + producto2 - producto3
*/