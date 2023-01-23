const getUsersModel = require("./../models/userData.models");

class UsuariosCon {
    async getUser(res){
        try {
            const result = await getUsersModel.GetUsers();
            return res.json({status:'SUCCESS', msg:'SUCCESS', details: result});
        } catch {
            return res.json({status:ERROR, msg: 'Ocurrió un error con la consulta', errorCode:500});
        }
    }

    async getAllUser(res){
        try {
            const result = await getUsersModel.GetAllUsers();
            return res.json({status:'SUCCESS', msg:'SUCCESS', details: result});
        } catch {
            return res.json({status:ERROR, msg: 'Ocurrió un error con la consulta', errorCode:500});
        }
    }

    async createUser(request, res){
        try {
            const result = await getUsersModel.InsertUsers(request);
            return res.json({status:'SUCCESS', msg:'SUCCESS', details: result});
        } catch {
            return res.json({result:0, msg: 'Ocurrió un error en el guardado de la informacion', errorCode:500});
        }
    }

    async updateUser(request, res){
        try {
            const result = await getUsersModel.UpdateUsers(request);
            const response = res.json({status:'SUCCESS', msg:'SUCCESS', details: result});
            return response;
        } catch {
            const response = res.json({result:0, msg: 'Ocurrió un error en el editado de la informacion', errorCode:500});
            return response;
        }
    }

    async deleteUser(request, res){
        try {
            const result = await getUsersModel.DeleteUsers(request);
            return res.json({status:'SUCCESS', msg:'SUCCESS', details: result});
        } catch {
            return res.json({result:0, msg: 'Ocurrió un error en el eliminado de la informacion', errorCode:500});
        }
    }
}

module.exports= new UsuariosCon();