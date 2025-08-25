const {
    getPatientsController,
    registerPatientController,
    updatePatientController,
    deletePatientController,
    searchPatientsController,
    patientsCountController
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

const updatePatientHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const updated = await updatePatientController(req.body, id);
        return res.status(200).json(updated[1]);
    } catch (error) {
        handleError('Error updating patient', error);
    }
}

const deletePatientHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await deletePatientController(id);
        return res.status(200).json(deleted);
    } catch (error) {
        handleError('Error deleting patient', error);
    }
}

const searchPatientsHandler = async (req, res) => {
    const { searchParameter } = req.body;
    try {
        const foundPatients = await searchPatientsController(searchParameter);
        return res.status(200).json(foundPatients);
    } catch (error) {
        handleError('Error searching patients', error);
    }
}

const countPatientsHandler = async (req, res) => {
    try {
        const patientsCount = await patientsCountController();
        return res.status(200).json(patientsCount);
    } catch (error) {
        handleError('Error counting patients', error);
    }
}

module.exports = {
    getPatientsHandler,
    registerPatientHandler,
    updatePatientHandler,
    deletePatientHandler,
    searchPatientsHandler,
    countPatientsHandler
}