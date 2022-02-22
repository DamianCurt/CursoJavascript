//variables

let id = 0;
let entidad;
let activo = true;
let cuil = 0;
let apellido;
let nombre;
let puesto;
let seniority;
let sector;
let convenioSindical;
let sueldoBasico = 0;
let confirmacionConceptoAdicional;
let nombreConceptoAdicional;
let montoConceptoAdicional = 0;
let acumuladorMontoConceptoAdicional = 0;
let sueldoBruto = 0;
let montoAporteJubilatorio = 0;
let montoAporteObraSocial = 0;
let montoAporteInssjpPami = 0;
let confirmacionOtrosDescuentos;
let nombreOtrosDescuentos;
let montoOtrosDescuentos = 0;
let acumuladorMontoOtrosDescuentos = 0;
let montoTotalDescuentos = 0;
let sueldoNeto = 0;
let cantidadSueldos = 0;

//constantes

const APORTE_JUBILATORIO = 0.11;
const APORTE_OBRA_SOCIAL = 0.03;
const APORTE_INSSJP_PAMI = 0.03;

//funciones

const sumaDosNumeros = (num1, num2) => num1 + num2;
const productoDosNumeros = (num1, num2) => num1 * num2;
const sumaCuatroNumeros = (desc1, desc2, desc3, desc4) => desc1 + desc2 + desc3 + desc4;

//inicio

entidad = (prompt("Ingrese la entidad, empresa u organización"));
console.log(`Entidad ${entidad}`);

function estadoEmpleadoActivo(activo) {
    return (estado) => estado == activo;
}
let estadoEmpleado = estadoEmpleadoActivo("activo");

estadoEmpleado((prompt("Ingrese si el empleado está activo o inactivo")));
while (estadoEmpleado !== "activo" && estadoEmpleado !== "inactivo") {
    estadoEmpleado = (prompt("Ingrese activo o inactivo según corresponda"));
}


cuil = parseInt(prompt("Ingrese el CUIL del empleado"));

apellido = (prompt("Ingrese el o los apellidos"));

nombre = (prompt("Ingrese el o los nombres"));

puesto = (prompt("Ingrese el puesto"));

seniority = (prompt("Ingrese el seniority"));

sector = (prompt("Ingrese el sector"));

convenioSindical = (prompt("Ingrese el Convenio Sindical"));

sueldoBasico = parseFloat(prompt("Ingrese el monto del sueldo básico"));
while (isNaN(sueldoBasico) || sueldoBasico <= 0) {
    sueldoBasico = parseFloat(prompt("Ingrese un monto numérico y mayor a cero"));
}

console.log(`El sueldo básico ingresado es $${sueldoBasico}`);

confirmacionConceptoAdicional = prompt("¿Desea agregar otro concepto o adicional?");

while (confirmacionConceptoAdicional == "si") {
    nombreConceptoAdicional = prompt("Ingrese nombre del concepto o adicional");
    console.log(`Ingresó el concepto o adicional "${nombreConceptoAdicional}"`);

    montoConceptoAdicional = parseFloat(prompt("Ingrese el monto del concepto o adicional"));

    console.log(`Por un monto de $${montoConceptoAdicional}`);

    while (isNaN(montoConceptoAdicional) || montoConceptoAdicional < 0) {
        montoConceptoAdicional = parseFloat(prompt("Ingrese un monto numérico y mayor a cero"));
    }

    acumuladorMontoConceptoAdicional = sumaDosNumeros(acumuladorMontoConceptoAdicional, montoConceptoAdicional);

    confirmacionConceptoAdicional = prompt("¿Desea agregar otro concepto o adicional?");
}

console.log(`Sueldo básico: $${sueldoBasico}`);
console.log(`Total adicionales y otros conceptos $${acumuladorMontoConceptoAdicional}`);

sueldoBruto = sumaDosNumeros(sueldoBasico, acumuladorMontoConceptoAdicional);
console.log(`El sueldo bruto es ${sueldoBruto}`);

console.log("Los descuentos son:");

montoAporteJubilatorio = productoDosNumeros(sueldoBruto, APORTE_JUBILATORIO);
console.log(`Aporte Jubilatorio del 11% del Sueldo Bruto $${montoAporteJubilatorio}`);

montoAporteObraSocial = productoDosNumeros(sueldoBruto, APORTE_OBRA_SOCIAL);
console.log(`Aporte Obra Social del 3% del Sueldo Bruto $${montoAporteObraSocial}`);

montoAporteInssjpPami = productoDosNumeros(sueldoBruto, APORTE_INSSJP_PAMI);
console.log(`Aporte INSSJP PAMI del 3% del Sueldo Bruto $${montoAporteInssjpPami}`);

confirmacionOtrosDescuentos = prompt("¿Desea agregar otro descuento?");

while (confirmacionOtrosDescuentos == "si") {
    nombreOtrosDescuentos = prompt("Ingrese nombre del descuento");
    console.log(`Ingresó el descuento "${nombreConceptoAdicional}"`);

    montoOtrosDescuentos = parseFloat(prompt("Ingrese el monto del descuento"));

    console.log(`Por un monto de $${montoOtrosDescuentos}`);

    while (isNaN(montoOtrosDescuentos) || montoOtrosDescuentos < 0) {
        montoOtrosDescuentos = parseFloat(prompt("Ingrese un monto numérico y mayor a cero"));
    }

    acumuladorMontoOtrosDescuentos = sumaDosNumeros(acumuladorMontoOtrosDescuentos, montoOtrosDescuentos);

    confirmacionOtrosDescuentos = prompt("¿Desea agregar otro descuento?");
}

montoTotalDescuentos = sumaCuatroNumeros(montoAporteJubilatorio, montoAporteObraSocial, montoAporteInssjpPami, acumuladorMontoOtrosDescuentos);
console.log(`Total descuentos $${montoTotalDescuentos}`);

sueldoNeto = sumaDosNumeros(sueldoBruto, -montoTotalDescuentos)
console.log(`El sueldo neto es $${sueldoNeto}`);



console.log(empleado1.sueldoBasico);
empleado1.aumentarSueldoBasico(1.20);
console.log(empleado1.sueldoBasico);
console.log(empleado1.seniority);
empleado1.cambiarSeniority("Senior");
console.log(empleado1.seniority);

for(let i = 0; Empleado.length; i++) {
    console.log(Empleado[i])
}
