const Joi = require('joi');

exports.schoolSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    address: Joi.string().min(5).max(255).required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required()
});

exports.listSchoolsSchema = Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required()
});

