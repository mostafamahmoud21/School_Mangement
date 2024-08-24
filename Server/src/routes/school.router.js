const schoolRouter=require('express').Router();
const schoolControllers=require('../controllers/school.controller.js'); 
const validation = require('../middlewares/validations.js');
const {schoolSchema,listSchoolsSchema} = require('../validations/school.validation.js');

schoolRouter.post('/addSchool',validation(schoolSchema),schoolControllers.addSchool)
schoolRouter.get('/listSchools',validation(listSchoolsSchema),schoolControllers.listSchools)

module.exports=schoolRouter
