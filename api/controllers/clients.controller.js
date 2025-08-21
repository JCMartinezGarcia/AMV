const { Client } = require('../models');

const getClientsController =  () => {
    const clients = Client.getAllClients();
    return clients;
}

module.exports = {
    getClientsController
}