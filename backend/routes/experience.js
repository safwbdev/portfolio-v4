import express from 'express';
import { createExperience, deleteExperience, getAllExperiences, getExperience, updateExperience } from '../controller/experience.js';

const ExperienceRouter = express.Router();

// create
ExperienceRouter.post('/', createExperience);

// update
ExperienceRouter.put('/:id', updateExperience);

// delete
ExperienceRouter.delete('/:id', deleteExperience);

// get by id
ExperienceRouter.get('/find/:id', getExperience);

// get all
ExperienceRouter.get('/', getAllExperiences);

export default ExperienceRouter;