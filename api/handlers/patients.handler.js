const {
    getPatientsController,
    registerPatientController
} = require('../controllers');

const handleError = (message, error) => {
    console.error(`${message}:`, error.message);
}

const getPatientsHandler = async (req, res) => {
    try {
        const patients = await getPatientsController();
        return res.json(
            {
                message: (!patients.length) ? 'No existen registros de pacientes.' : '',
                patients
            }
        )
    } catch (error) {
        handleError('Error retrieving patients:', error);
    }
}

const registerPatientHandler = async (req, res) => {
    try {
        const registered = await registerPatientController(req.body);
        return res.status(201).json(registered[1]);
    } catch (error) {
        handleError('Error registering new patient', error);
    }
}

module.exports = {
    getPatientsHandler,
    registerPatientHandler,
}