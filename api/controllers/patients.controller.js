// controller/patientsController.js
const { ValidationError } = require('sequelize');
const { Patient } = require('../models');
const Joi = require('joi');

const patientSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().min(1).required(),
    symptoms: Joi.string().required()
});

const getPatientsController = async () => {
    return await Patient.getAllPatients();
};

const registerPatientController = async (patientData) => {
    const { error, value } = patientSchema.validate(patientData);
    if (error) throw new ValidationError(error.message);
    return await Patient.registerPatient(value);
};

const updatePatientController = async (patientData, id) => {
    return await Patient.updatePatient(patientData, id);
};

const deletePatientController = async (id) => {
    return await Patient.deletePatient(id);
};

const searchPatientsController = async (searchParameter) => {
    return await Patient.searchPatients(searchParameter);
};

const patientsCountController = async () => {
    return await Patient.countPatients();
};

module.exports = {
    getPatientsController,
    registerPatientController,
    updatePatientController,
    deletePatientController,
    searchPatientsController,
    patientsCountController
};
