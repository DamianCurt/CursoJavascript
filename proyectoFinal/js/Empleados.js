class Empleado {
    constructor(id, entidad, activo, cuil, apellido, nombre, puesto, seniority, sector, convenioSindical, sueldoBasico, /*acumuladorMontoConceptoAdicional, sueldoBruto, montoTotalDescuentos, sueldoNeto*/) {
        this.id = id;
        this.entidad = entidad;
        this.activo = activo;
        this.cuil = cuil;
        this.apellido = apellido;
        this.nombre = nombre;
        this.puesto = puesto;
        this.seniority = seniority;
        this.sector = sector;
        this.convenioSindical = convenioSindical;
        this.sueldoBasico = sueldoBasico;
/*        
        this.acumuladorMontoConceptoAdicional = acumuladorMontoConceptoAdicional;
        this.sueldoBruto = sueldoBruto;
        this.montoTotalDescuentos = montoTotalDescuentos;
        this.sueldoNeto = sueldoNeto;
*/
    }

    cambiarActivo(nuevoEstadoActivo) {
        this.activo = nuevoEstadoActivo;
    }

    cambiarPuesto(nuevoPuesto) {
        this.puesto = nuevoPuesto;
    }

    cambiarSeniority(nuevoSeniority) {
        this.seniority = nuevoSeniority;
    }

    cambiarSector(nuevoSector) {
        this.puesto = nuevoSector;
    }

    cambiarConvenioSindical(nuevoConvenioSindical) {
        this.puesto = nuevoConvenioSindical;
    }

    aumentarSueldoBasico(porcentajeAumentoSueldoBasico) {
        if (nuevoSueldoBasico < 1 || isNaN(porcentajeAumentoSueldoBasico)) {
            alert("Debe agregar un número mayor o igual que 1");
        } else {
            this.sueldoBasico *= porcentajeAumentoSueldoBasico;
        }
    }
}

/*
const empleado1 = new Empleado(id, entidad, activo, apellido, nombre, puesto, seniority, sector, convenioSindical , sueldoBasico);

const empleado2 = new Empleado(id, entidad, activo, cuil, apellido, nombre, puesto, seniority, sector, convenioSindical, sueldoBasico);
*/

const empleado1 = new Empleado(1, "Empresa1 SA", true, 12345678911,"Apellido1", "Nombre1", "Puesto1", "Seniority1", "Sector1", "Convenio Sindical1" , 70000);

const empleado2 = new Empleado(2, "Empresa1 SA", false, 11987654321,"Apellido2", "Nombre2", "Puesto2", "Seniority2", "Sector2", "Convenio Sindical2" , 140000);

const empleado3 = new Empleado(2, "Empresa2 SA", true, 12345678910,"Apellido3", "Nombre3", "Puesto3", "Seniority3", "Sector3", "Convenio Sindical2" , 200000);

const empleados = [empleado1, empleado2, empleado3];

const nomina = [];

let divBienvenidoUsuario = document.getElementById(`divBienvenidoUsuario`);

const bienvenido = () => {
    let nombreUsuario = prompt("Ingrese su nombre de usuario")
    divBienvenidoUsuario.innerHTML = <h2>"Hola ${nombreUsuario.toUpperCase}! Has ingresado a tu nómina de empleados"</h2>;
}

let divEmpleados = document.getElementById(`divEmpleados`);


empleados.forEach(empleadoEnArray => {
    divEmpleados.innerHTML += `
    <div id="${empleadoEnArray.entidad}--empleado--${empleadoEnArray.id}" class="empleado--container">
    <p>Entidad: ${empleadoEnArray.entidad}</p>
    <p>Activo: ${empleadoEnArray.activo}</p>
    <p>CUIL: ${empleadoEnArray.cuil}</p>
    <p>Apellido: ${empleadoEnArray.apellido}</p>
    <p>Nombre: ${empleadoEnArray.nombre}</p>
    <p>Puesto: ${empleadoEnArray.puesto}</p>
    <p>Sniority: ${empleadoEnArray.seniority}</p>
    <p>Sector: ${empleadoEnArray.sector}</p>
    <p>Convenio Sindical: ${empleadoEnArray.convenioSindical}</p>
    <p>Sueldo Básico: ${empleadoEnArray.sueldoBasico}</p>
    </div>
    `
});
