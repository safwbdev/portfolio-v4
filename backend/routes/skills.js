import express from 'express';
import { createSkill, deleteSkill, getAllSkills, getSkill, updateSkill } from '../controller/skill.js';

const SkillsRouter = express.Router();

// create
SkillsRouter.post('/', createSkill);

// update
SkillsRouter.put('/:id', updateSkill);

// delete
SkillsRouter.delete('/:id', deleteSkill);

// get by id
SkillsRouter.get('/find/:id', getSkill);

// get all
SkillsRouter.get('/', getAllSkills);

export default SkillsRouter;