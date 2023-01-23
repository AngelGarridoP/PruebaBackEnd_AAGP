const { response } = require("express");
const getUserControllers = require("./../controllers/userData.controller");

class UsuariosServ {

    async obtenerUsuario(){
        await getUserControllers.getUser();
    }

    async obtenerUsuarioCompleto(){
        await getUserControllers.getAllUsers();
    }

    async crearUsuario(req){
        const Nombres = req.body.Nombres;
        var validCURP = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
        const CURP = req.body.CURP;
        const valorCURP = validCURP.test(CURP);
        const hoy = new Date();
        const fechaNacimiento = new Date(req.body.fecha_nacimiento);
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        var validMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const MAIL = req.body.Email;
        const valorMAIL = validMAIL.test(MAIL || null);
        var validFecha = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
        const FechaRegistro = req.body.Fecha_registro;
        const valorFechaRegistro = validFecha.test(FechaRegistro);
        const usuarioRegistrado = 1;
        const FechaActualizacion = req.body.Fecha_actualizacion;
        let isValidDate = Date.parse('03/17/21');
        const valorFechaActualizacion = validFecha.test(FechaActualizacion || isValidDate)
        const usuarioActualizado = 1;
        const Activo = 1;
        const Eliminado = 0;

        if(Nombres, valorCURP, fechaNacimiento, edad, valorFechaRegistro, usuarioRegistrado, Activo){

            const request = {Nombres, valorCURP, fechaNacimiento, edad, valorMAIL, valorFechaRegistro, usuarioRegistrado, valorFechaActualizacion, usuarioActualizado, Activo, Eliminado};
            await getUserControllers.createUser(request);

        }else{
            console.log('error en el guardado de datos');
        }
        
    }

    async editarUsuario(req){
        const id = req.body.ID;
        const Nombres = req.body.Nombres;
        var validCURP = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
        const CURP = req.body.CURP;
        const valorCURP = validCURP.test(CURP);
        const hoy = new Date();
        const fechaNacimiento = new Date(req.body.fecha_nacimiento);
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        var validMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const MAIL = req.body.Email;
        const valorMAIL = validMAIL.test(MAIL || null);
        var validFecha = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
        const FechaRegistro = req.body.Fecha_registro;
        const valorFechaRegistro = validFecha.test(FechaRegistro);
        const usuarioRegistrado = 1;
        const FechaActualizacion = req.body.Fecha_actualizacion;
        let isValidDate = Date.parse('03/17/21');
        const valorFechaActualizacion = validFecha.test(FechaActualizacion || isValidDate)
        const usuarioActualizado = 2;
        const Activo = 1;

        if(id, Nombres, valorCURP, fechaNacimiento, edad, valorFechaRegistro, usuarioRegistrado, FechaActualizacion, usuarioActualizado, Activo){

            const request = {id, Nombres, valorCURP, fechaNacimiento, edad, valorMAIL, valorFechaRegistro, usuarioRegistrado, valorFechaActualizacion, usuarioActualizado, Activo};
            await getUserControllers.updateUser(request);
            
        }else{
            console.log('error en el editado de datos');
        }
        
    }

    async eliminarUsuario(req){
        const id = req.body.ID;
        const usuarioActualizado = 3;
        const Eliminado = 1;

        if(id, usuarioActualizado, Eliminado){

            const request = {id, usuarioActualizado, Eliminado};
            await getUserControllers.deleteUser(request);
            
        }else{
            console.log('error en el eliminado de datos');
        }
        
    }

}

module.exports= new UsuariosServ();