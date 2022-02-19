//objetos

const empleado1 = new Empleado(id, entidad, activo, apellido, nombre, puesto, seniority, sector, convenioSindical , sueldoBasico, acumuladorMontoConceptoAdicional, sueldoBruto, montoTotalDescuentos, sueldoNeto);

const empleado2 = new Empleado(id, entidad, activo, apellido, nombre, puesto, seniority, sector, convenioSindical , sueldoBasico, acumuladorMontoConceptoAdicional, sueldoBruto, montoTotalDescuentos, sueldoNeto);

const empleado1 = new Empleado(1, "Empresa1 SA", true, "Apellido1", "Nombre1", "Puesto1", "Seniority1", "Sector1", "Convenio Sindical1" , 70000, 30000, 100000, 17000, 83000);

const empleado2 = new Empleado(2, "Empresa1 SA", false, "Apellido2", "Nombre2", "Puesto2", "Seniority2", "Sector2", "Convenio Sindical2" , 140000, 60000, 200000, 34000, 166000);

const empleado3 = new Empleado(2, "Empresa2 SA", true, "Apellido3", "Nombre3", "Puesto3", "Seniority3", "Sector3", "Convenio Sindical2" , 200000, 90000, 200000, 34000, 166000);

console.log(empleado1.sueldoBasico);
empleado1.aumentarSueldoBasico(1.20);
console.log(empleado1.sueldoBasico);
console.log(empleado1.seniority);
empleado1.cambiarSeniority("Senior");
console.log(empleado1.seniority);

for(let i = 0; Empleado.length; i++) {
    console.log(Empleado[i])
}