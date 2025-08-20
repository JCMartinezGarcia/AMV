const { getClientsController } = require('../controllers');

const getClientsHandler = async (req, res) => {
    const clients = await getClientsController();
    return res.json(clients);
}


module.exports = {
    getClientsHandler
}