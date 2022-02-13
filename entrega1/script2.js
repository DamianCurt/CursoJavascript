//variables

let sueldoBasico = 0;
let montoConceptoAdicional = 0;
let acumuladorMontoConceptoAdicional = 0;
let sueldoBruto = 0;
let sueldoNeto = 0;
let cantidadSueldos = 0;
let concepto;
let confirmacion;
let nombreConceptoAdicional;
let afiliacionSindical;
let porcentajeCuotaSindical;

//constantes

const APORTE_JUBILATORIO = 0.11;
const APORTE_OBRA_SOCIAL = 0.3;
const APORTE_INSSJP_PAMI = 0.3;
const APORTES_SEGURIDAD_SOCIAL = 0.17;

//funciones

function sumaSueldoBruto (sueldoBasico, acumuladorMontoConceptoAdicional) {
    console.log(`Su sueldo bruto es ${sueldoBasico + acumuladorMontoConceptoAdicional}`);
    };

/*function descuentoAporteJubilatorio (sueldoBruto,APORTE_JUBILATORIO) {
    console.log(`Su descuento por Aporte Jubilatorio es $${sueldoBruto * APORTE_JUBILATORIO}`)
}*/

sueldoBasico = parseFloat(prompt("Ingrese el monto del sueldo básico"));
while (isNaN(sueldoBasico) || sueldoBasico <= 0) {
    sueldoBasico = parseFloat(prompt("Ingrese un monto numérico y mayor a cero"));
}
console.log(`Su sueldo básico es $${sueldoBasico}`);

confirmacion = prompt("¿Desea agregar otro concepto o adicional?");

while (confirmacion == "si") {
    nombreConceptoAdicional = prompt("Ingrese nombre del concepto o adicional");
    console.log(`Agregó el concepto ${nombreConceptoAdicional}`);

    montoConceptoAdicional = parseFloat(prompt("Ingrese el monto del concepto o adicional"));

while (isNaN(montoConceptoAdicional) || montoConceptoAdicional < 0) {
    montoConceptoAdicional = parseFloat(prompt("Ingrese un monto numérico y mayor a cero"));

    console.log(`El monto es $${montoConceptoAdicional}`);
}

acumuladorMontoConceptoAdicional = acumuladorMontoConceptoAdicional + montoConceptoAdicional;

confirmacion = prompt("¿Desea agregar otro concepto o adicional?");
}

console.log(`Su sueldo básico es ${sueldoBasico}`);
console.log(`Sus adicionales son ${acumuladorMontoConceptoAdicional}`);

sumaSueldoBruto(sueldoBasico, acumuladorMontoConceptoAdicional);

/*console.log("Sus descuentos son:")
console.log(`Aporte jubilatorio ${APORTE_JUBILATORIO * 100}%`)
descuentoAporteJubilatorio()
console.log(`El descuento es de $${APORTE_JUBILATORIO * 100}`)
console.log(`Aporte obra social ${APORTE_OBRA_SOCIAL * 100}%`)
console.log(`Aporte INSSJP-PAMI ${APORTE_INSSJP_PAMI * 100}%`)

otrosDescuentos = prompt("Desea agregar otros descuentos?");

while (afiliacionSindical !== "si" || afiliacionSindical !== "no") {
    afiliacionSindical = parseFloat(prompt("Ingrese si o no según corresponda"));
}

if (afiliacionSindical == "si") {
    montoCuotaSindical = parseFloat(prompt("Ingrese el monto de la cuota sindical"));
    if (montoCuotaSindical == isNaN || montoCuotaSindical < 0) {
        montoCuotaSindical = parseFloat(prompt("Ingrese un monto numérico mayor a cero"));
    }
}

console.log(`Sus descuentos son 11% de jubilación, 3% obra social, 3% INSSJP–PAMI ${sueldoBruto * APORTES_SEGURIDAD_SOCIAL}`);
console.log(`Su sueldo neto es ${sueldoBruto - sueldoBruto * APORTES_SEGURIDAD_SOCIAL}`);
*/

