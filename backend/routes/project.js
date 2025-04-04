import express from 'express';
import { createProject, deleteProject, getAllProjects, getProject, updateProject } from '../controller/project.js';

const ProjectRouter = express.Router();

// create
ProjectRouter.post('/', createProject);

// update
ProjectRouter.put('/:id', updateProject);

// delete
ProjectRouter.delete('/:id', deleteProject);

// get by id
ProjectRouter.get('/find/:id', getProject);

// get all
ProjectRouter.get('/', getAllProjects);

export default ProjectRouter;