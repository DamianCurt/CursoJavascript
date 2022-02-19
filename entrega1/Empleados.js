class Empleado {
        constructor (id, entidad, activo, apellido, nombre, puesto, seniority, sector, convenioSindical, sueldoBasico, acumuladorMontoConceptoAdicional, sueldoBruto, montoTotalDescuentos, sueldoNeto) {
        this.id = id;
        this.entidad = entidad;
        this.activo = activo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.puesto = puesto;
        this.seniority = seniority;
        this.sector = sector;
        this.convenioSindical = convenioSindical;
        this.sueldoBasico = sueldoBasico;
        this.acumuladorMontoConceptoAdicional = acumuladorMontoConceptoAdicional;
        this.sueldoBruto = sueldoBruto;
        this.montoTotalDescuentos = montoTotalDescuentos;
        this.sueldoNeto = sueldoNeto;
    }

    cambiarActivo (nuevoEstado){
        this.activo = nuevoEstado;
    }

    cambiarPuesto (nuevoPuesto){
        this.puesto = nuevoPuesto;
    }

    cambiarSeniority (nuevoSeniority){
        this.seniority = nuevoSeniority;
    }

    cambiarSector (nuevoSector){
        this.puesto = nuevoSector;
    }

    cambiarConvenioSindical (nuevoConvenioSindical){
        this.puesto = nuevoConvenioSindical;
    }

    aumentarSueldoBasico(porcentajeAumentoSueldoBasico){
        if(nuevoSueldoBasico < 1 || isNaN(porcentajeAumentoSueldoBasico)){
            alert("Debe agregar un número mayor o igual que 1");
        } else {
        this.sueldoBasico *= porcentajeAumentoSueldoBasico;
    }
    }
}

