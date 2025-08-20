const getClients = (req, res) => {
    res.status(200).json([{
        id: 1,
        name: 'Paco',
        age: 34,
        syntomas: 'Tos'
    }, {
        id: 1,
        name: 'Andres',
        age: 30,
        syntomas: 'Flujo nasal'
    }]);
}

module.exports = {
    getClients
}