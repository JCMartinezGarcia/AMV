const { ValidationError } = require('sequelize');
const { Patient } = require('../models');
const Joi = require('joi');

const getPatientsController = () => {
    const patients = Patient.getAllPatients();
    return patients;
}

const registerPatientController = (patientData) => {

    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .required(),
        age: Joi.number()
            .integer()
            .min(1)
            .required(),
        symptoms: Joi.string()
            .alphanum()
            .required()
    });

    const { error, value } = schema.validate(patientData);
    if (error) {
        throw new ValidationError({ message: error.message });
    }
    const registered = Patient.registerPatient(value);
    return registered;
}

const updatePatientController = (patientData, id) => {
    const updated = Patient.updatePatient(patientData, id);
    return updated;
}

module.exports = {
    getPatientsController,
    registerPatientController,
    updatePatientController
}