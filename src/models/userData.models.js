
const connectionData = require('./../database/db');

class Usuarios {
    async GetUsers() {
        try {
            const result = await connectionData.query("SELECT ID, Nombres, CURP, fecha_nacimiento, edad, Email, Fecha_registro, Usuario_Registrado, Fecha_actualizacion, Usuario_actualizado, Activo FROM datos_usuario WHERE Eliminado = 0");
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async GetAllUsers() {
        try {
            const result = await connectionData.query("SELECT ID, Nombres, CURP, fecha_nacimiento, edad, Email, Fecha_registro, Usuario_Registrado, Fecha_actualizacion, Usuario_actualizado, Activo FROM datos_usuario");
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async InsertUsers(request) {
        try {
            const result = await connectionData.query("INSERT INTO datos_usuario (Nombres, CURP, fecha_nacimiento, edad, Email, Fecha_registro, Usuario_Registrado, Fecha_actualizacion, Usuario_actualizado, Activo, Eliminado) VALUES ("+request.Nombres+", "+request.valorCURP+", "+request.fechaNacimiento+","+request.edad+","+request.valorMAIL+","+request.valorFechaRegistro+","+request.usuarioRegistrado+","+request.valorFechaActualizacion+","+request.usuarioActualizado+","+request.Activo+","+request.Eliminado+")");
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async UpdateUsers(request) {
        try {
            const result = await connectionData.query("UPDATE datos_usuario SET Nombres="+request.Nombres+", CURP="+request.valorCURP+", fecha_nacimiento="+request.fechaNacimiento+", edad="+request.edad+", Email="+request.valorMAIL+", Fecha_registro="+request.valorFechaRegistro+", Usuario_Registrado="+request.usuarioRegistrado+", Fecha_actualizacion="+request.valorFechaActualizacion+", Usuario_actualizado="+request.usuarioActualizado+", Activo="+request.Activo+" WHERE ID = "+request.id+"");
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async DeleteUsers(request) {
        try {
            const result = await connectionData.query("UPDATE datos_usuario SET Usuario_actualizado="+request.usuarioActualizado+", Eliminado="+request.Eliminado+" WHERE ID = "+request.id+"");
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports= new Usuarios();
