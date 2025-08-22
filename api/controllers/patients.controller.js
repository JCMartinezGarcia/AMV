const { Patient } = require('../models');
const Joi = require('joi');

const getPatientsController = () => {
    const patients = Patient.getAllPatients();
    return patients;
}

const registerPatientController = (patientData) => {
    const registered = Patient.registerPatient(patientData);
    return registered;
}

module.exports = {
    getPatientsController,
    registerPatientController
}