// handler/patientsHandler.js
const {
    getPatientsController,
    registerPatientController,
    updatePatientController,
    deletePatientController,
    searchPatientsController,
    patientsCountController
} = require('../controllers');

// centralized error response
const handleError = (res, message, error, status = 500) => {
    console.error(`${message}:`, error.message);
    return res.status(status).json({ error: message, details: error.message });
};

const getPatientsHandler = async (req, res) => {
    try {
        const patients = await getPatientsController();
        return res.json({
            message: patients.length ? '' : 'No existen registros de pacientes.',
            patients
        });
    } catch (error) {
        return handleError(res, 'Error retrieving patients', error);
    }
};

const registerPatientHandler = async (req, res) => {
    try {
        const registered = await registerPatientController(req.body);
        return res.status(201).json(registered[1]); // registered[1] is the metadata
    } catch (error) {
        return handleError(res, 'Error registering new patient', error, 400);
    }
};

const updatePatientHandler = async (req, res) => {
    try {
        const updated = await updatePatientController(req.body, req.params.id);
        return res.status(200).json(updated[1]);
    } catch (error) {
        return handleError(res, 'Error updating patient', error);
    }
};

const deletePatientHandler = async (req, res) => {
    try {
        const deleted = await deletePatientController(req.params.id);
        return res.status(200).json(deleted);
    } catch (error) {
        return handleError(res, 'Error deleting patient', error);
    }
};

const searchPatientsHandler = async (req, res) => {
    try {
        const foundPatients = await searchPatientsController(req.body.searchParameter);
        return res.status(200).json(foundPatients);
    } catch (error) {
        return handleError(res, 'Error searching patients', error);
    }
};

const countPatientsHandler = async (_req, res) => {
    try {
        const patientsCount = await patientsCountController();
        return res.status(200).json(patientsCount);
    } catch (error) {
        return handleError(res, 'Error counting patients', error);
    }
};

module.exports = {
    getPatientsHandler,
    registerPatientHandler,
    updatePatientHandler,
    deletePatientHandler,
    searchPatientsHandler,
    countPatientsHandler
};
