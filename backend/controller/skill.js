import Skill from "../models/Skill.js";


export const createSkill = async (req, res, next) => {
    const newSkill = new Skill(req.body);

    try {
        const savedSkill = await newSkill.save();
        res.status(200).json(savedSkill);
    } catch (error) {
        next(error);
    }
}
export const updateSkill = async (req, res, next) => {
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedSkill);
    } catch (error) {
        next(error);
    }
}
export const deleteSkill = async (req, res, next) => {
    try {
        await Skill.findByIdAndDelete(req.params.id);
        res.status(200).json('Skill has been removed');
    } catch (error) {
        next(error);
    }
}
export const getSkill = async (req, res, next) => {
    try {
        const skill = await Skill.findById(req.params.id);
        res.status(200).json(skill);
    } catch (error) {
        next(error);
    }
}
export const getAllSkills = async (req, res, next) => {
    try {
        const { limit, ...others } = req.query;
        const skills = await Skill.find({
            ...others,
        }).limit(limit);
        res.status(200).json(skills);

    } catch (error) {
        next(error)
    }
}

