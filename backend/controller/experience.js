import Experience from "../models/Experience.js";

export const createExperience = async (req, res, next) => {
    const newExperience = new Experience(req.body);

    try {
        const savedExperience = await newExperience.save();
        res.status(200).json(savedExperience);
    } catch (error) {
        next(error);
    }
}
export const updateExperience = async (req, res, next) => {
    try {
        const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedExperience);
    } catch (error) {
        next(error);
    }
}
export const deleteExperience = async (req, res, next) => {
    try {
        await Experience.findByIdAndDelete(req.params.id);
        res.status(200).json('Experience has been removed');
    } catch (error) {
        next(error);
    }
}
export const getExperience = async (req, res, next) => {
    try {
        const experience = await Experience.findById(req.params.id);
        res.status(200).json(experience);
    } catch (error) {
        next(error);
    }
}
export const getAllExperiences = async (req, res, next) => {
    try {
        const { limit, ...others } = req.query;
        const experience = await Experience.find({
            ...others,
        }).limit(limit);
        res.status(200).json(experience);
    } catch (error) {
        next(error)
    }
}

