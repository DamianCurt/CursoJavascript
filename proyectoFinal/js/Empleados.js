//variables


let userName;
let password;
let bienvenidoUsuario;
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

class user {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    loguearse() {
        console.log(`usuario ${this.user} gerado correctamente`);
    }
}

let arrayUsers = [];

if (localStorage.getItem('usuarios')) {
    console.log(`JSON.parse(localStorage.getItem('usuarios')) ${localStorage.getItem('usuarios')}`);
    arrayUsers = JSON.parse(localStorage.getItem('usuarios'));
    console.log(`arrayUsers ${JSON.stringify(arrayUsers)}`);
} else {
    console.log(`localStorage.setItem('usuarios', JSON.stringify(arrayUsers)) ${JSON.stringify(arrayUsers)}`);
    localStorage.setItem('usuarios', JSON.stringify(arrayUsers));
}

let formularioUsuarioNuevo = document.getElementById("idUsuarioNuevo");
let botonGenerarUsuario = document.getElementById("idBotonGenerarUsuario")
let divestadoUsuario = document.getElementById("idEstadoUsuario")

formularioUsuarioNuevo.addEventListener('submit', (e) => {
    e.preventDefault()

    let userName = document.getElementById('idUsuario').value;
    let email = document.getElementById('idEmail').value;
    let password = document.getElementById('idPassword').value;

    if (!arrayUsers.some(usaurioEnArray => usaurioEnArray.email == email || usaurioEnArray.userName == userName)) {
        const usuario = new user(userName, email, password);
        arrayUsers.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(arrayUsers))
        formularioUsuarioNuevo.reset()
        idEstadoUsuario.innerHTML = `<div id="idEstadoUsuario" class="alert alert-success" role="alert">
        <p>Usuario generado correctamente. Inicie sesión en su nómina.</p></div>
        `;
    } else {
        idEstadoUsuario.innerHTML = `<div id="idEstadoUsuario" class="alert alert-warning" role="alert">
    <p>Nombre de usuaio o mail existentes. Ingrese otros valores.</p></div>`}
})

let formularioInicioSesion = document.getElementById("idLogUsuario");
let botonLogSesion = document.getElementById("idLogSesion");
/*let divestadoUsuario = document.getElementById("idEstadoUsuario")*/

formularioInicioSesion.addEventListener('submit', (e) => {
    e.preventDefault()

    let userName = document.getElementById('idLogUsuario').value;
    let password = document.getElementById('idLogPassword').value;
    let idEstadoSesion = document.getElementById("idEstadoSesion");

    if (arrayUsers.some(usaurioEnArray => usaurioEnArray.password == password && usaurioEnArray.userName == userName)) {
        console.log("1")
        formularioInicioSesion.reset()
        {idEstadoSesion.innerHTML = `<div class="alert alert-success" role="alert">
        <p>Hola ${userName}! Ingresaste a tu nómina.</p></div>`}
    } else {
        console.log("2")
        idEstadoSesion.innerHTML = `<div class="alert alert-warning" role="alert">
        <p>Usuario o contraseña incorrectos</p></div>`
    }
})

let divBienvenidoUsuario = document.getElementById("divBienvenidoUsuario");

divBienvenidoUsuario.innerText = `Hola ${userName} Has ingresado a tu nómina de empleados`;

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

const empleado1 = new Empleado(1, "Empresa1 SA", true, 12345678911, "Apellido1", "Nombre1", "Puesto1", "Seniority1", "Sector1", "Convenio Sindical1", 70000);

const empleado2 = new Empleado(2, "Empresa1 SA", false, 11987654321, "Apellido2", "Nombre2", "Puesto2", "Seniority2", "Sector2", "Convenio Sindical2", 140000);

const empleado3 = new Empleado(2, "Empresa2 SA", true, 12345678910, "Apellido3", "Nombre3", "Puesto3", "Seniority3", "Sector3", "Convenio Sindical2", 200000);

const empleados = [empleado1, empleado2, empleado3];

console.log(empleados);

const nomina = [];

let divEmpleados = document.getElementById(`divEmpleados`);

empleados.forEach(empleadoEnArray => {
    divEmpleados.innerHTML += `
    <div id="${empleadoEnArray.entidad}--empleado--${empleadoEnArray.id}" class="container-fluid ">
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
