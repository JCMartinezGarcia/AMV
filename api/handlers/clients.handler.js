const { getClientsController } = require('../controllers');

const handleError = (message, error) => {
    console.error(`${message}:`, error.message);
}

const getClientsHandler = async (req, res) => {
    try {
        const clients = await getClientsController();
        return res.json(
            {
                message: (!clients.length) ? 'No existen registros de clientes.' : '',
                clients
            }
        )
    } catch (error) {
        handleError('Error retrieving clients:', error);
    }
}


module.exports = {
    getClientsHandler
}