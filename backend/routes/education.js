import express from 'express';
import { createEducation, deleteEducation, getAllEducations, getEducation, updateEducation } from '../controller/education.js';

const EducationRouter = express.Router();

// create
EducationRouter.post('/', createEducation);

// update
EducationRouter.put('/:id', updateEducation);

// delete
EducationRouter.delete('/:id', deleteEducation);

// get by id
EducationRouter.get('/find/:id', getEducation);

// get all
EducationRouter.get('/', getAllEducations);

export default EducationRouter;