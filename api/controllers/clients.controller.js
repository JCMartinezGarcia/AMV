const { Client } = require('../models');

const getClientsController = async () => {
    const clients = await Client.getAllClients();
    return clients;
}

module.exports = {
    getClientsController
}