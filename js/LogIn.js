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
}

let arrayUsers = [];

arrayUsers = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : localStorage.setItem('usuarios', JSON.stringify(arrayUsers));

let divFormularioUsuarioNuevo = document.getElementById("idUsuarioNuevo");
let divBotonGenerarUsuario = document.getElementById("idBotonGenerarUsuario");
let divEstadoUsuario = document.getElementById("idEstadoUsuario");

divFormularioUsuarioNuevo.addEventListener('submit', (e) => {
    e.preventDefault();

    let userName = document.getElementById('idUsuario').value;
    let email = document.getElementById('idEmail').value;
    let password = document.getElementById('idPassword').value;

    if (!arrayUsers.some(usaurioEnArray => usaurioEnArray.email == email || usaurioEnArray.userName == userName)) {
        const usuario = new user(userName, email, password);
        arrayUsers.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(arrayUsers));
        divFormularioUsuarioNuevo.reset();
        Swal.fire({
            title: 'Usuario generado correctamente',
            icon: 'success',
            text: 'Para comenzar inicie sesión',
            confirmButtonText: 'Aceptar'
        })
    } else {
        divEstadoUsuario.innerHTML = `<div id="idEstadoUsuario">
        <p class="text-danger">Usuario o mail existenes. Ingrese otros valores.</p></div>`;
    }
})

let divPortalEmpleados = document.getElementById("divPortalEmpleados")
divPortalEmpleados.style.display = "none";
let divFormularioInicioSesion = document.getElementById("idFormLogUsuario");
let divBotonLogSesion = document.getElementById("idBotonLogSesion");
let divEstadoLogInUsuario = document.getElementById("idEstadoLogInUsuario");


divFormularioInicioSesion.addEventListener('submit', (e) => {
    e.preventDefault()

    let userName = document.getElementById('idLogUsuario').value;
    let password = document.getElementById('idLogPassword').value;

    const findUser = arrayUsers.find(usuario => usuario.userName === userName);

    if (findUser.password === password) {
        document.getElementById("divFormsUsuarios").style.display = "none";
        divPortalEmpleados.style.display = "";        
    }
    else {
        divFormularioInicioSesion.reset()
        divEstadoLogInUsuario.innerHTML = `<div id="idEstadoLogInUsuario" class="text-danger">
    <p>Usuaio o contraseña incorrectos. Vuelva a intentarlo.</p></div>`;
        document.getElementById("divFormsUsuarios").style.display ="";
    }

    let divBienvenidoUsuario = document.getElementById("divBienvenidoUsuario");
divBienvenidoUsuario.innerHTML = `<div><h2>Hola, ${userName.toUpperCase()} comienza administrar tu nómina de empleados</h2></div>`;
})

let divNomina = document.getElementById('divNomina')

async function obtenerNomina() {
    const response = await fetch('../json/empleados.json')
    return await response.json()
}

obtenerNomina().then(nomina => {
    nomina.forEach((empleado) => {
        divNomina.innerHTML += `
            <div>
                <div class="listaEmpleados__flexbox">
                    <div class="card border-primary mb-3" id="producto${empleado.id}" style="max-width: 20rem;">
                    <img src="../images/${empleado.foto}" class="card-img-top" alt="${empleado.apellidoNombre}">
                    <div class="card-header">${empleado.entidad}</div>
                    <div class="card-body">
                    <h4 class="card-title">${empleado.apellidoNombre}</h4>
                        <p class="card-text">Activo: ${empleado.activo}</p>
                        <p class="card-text"> CUIL: ${empleado.cuil}</p>
                        <p class="card-text"> puesto: ${empleado.puesto}</p>
                        <p class="card-text"> Seniority: ${empleado.seniority}</p>
                        <p class="card-text"> Sector: ${empleado.sector}</p>
                        <p class="card-text"> Convenio: ${empleado.convenio}</p>
                        <p class="card-text"> Sueldo básico: $${empleado.sueldoBasico}</p>
                        <button class="btn btn-dark" id="boton${empleado.id}">Editar</button>
                    </div>
                </div>
            </div>`
    })
})

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

const empleado1 = new Empleado(1, "Empresa1 SA", true, 12345678911, "Apellido1", "Nombre1", "Puesto1", "Seniority1", "Sector1", "Convenio Sindical1", 70000);

const empleado2 = new Empleado(2, "Empresa1 SA", false, 11987654321, "Apellido2", "Nombre2", "Puesto2", "Seniority2", "Sector2", "Convenio Sindical2", 140000);

const empleado3 = new Empleado(2, "Empresa2 SA", true, 12345678910, "Apellido3", "Nombre3", "Puesto3", "Seniority3", "Sector3", "Convenio Sindical2", 200000);

const empleados = [empleado1, empleado2, empleado3];

const nominaEmpleados = [];

let divEmpleados = document.getElementById('divEmpleados');

empleados.forEach(empleado => {
    divEmpleados.innerHTML += `
        <div id="${empleado.entidad}--empleado--${empleado.id}" class="container-fluid ">
        <p>Entidad: ${empleado.entidad}</p>
        <p>Activo: ${empleado.activo}</p>
        <p>CUIL: ${empleado.cuil}</p>
        <p>Apellido: ${empleado.apellido}</p>
        <p>Nombre: ${empleado.nombre}</p>
        <p>Puesto: ${empleado.puesto}</p>
        <p>Sniority: ${empleado.seniority}</p>
        <p>Sector: ${empleado.sector}</p>
        <p>Convenio Sindical: ${empleado.convenioSindical}</p>
        <p>Sueldo Básico: ${empleado.sueldoBasico}</p>
        </div>
        `
});