

const getUsersHandler = (req, res)=> {
    const { name } = req.query;
    if (name) res.send(`Quiero buscar todos los que se llamen ${name}`);
    else res.send("Quiero enviar todos los usuarios");
}


const getUserHandler = (req, res) => {
    const { id } = req.params;
    res.send(`va a enviar el detalle del usuario id ${id}`);
}

const createUserHandle = (req, res) => {
    const { name, email, phone } = req.body;
    res.send(`Estoy por crear un usuario con estos datos:
        name:${name},
        email:${email},
        phone:${phone}`);
}


module.exports = {
    getUsersHandler, 
    getUserHandler, 
    createUserHandle
}