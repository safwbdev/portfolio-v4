import Education from "../models/Education.js";

export const createEducation = async (req, res, next) => {
    const newEducation = new Education(req.body);

    try {
        const savedEducation = await newEducation.save();
        res.status(200).json(savedEducation);
    } catch (error) {
        next(error);
    }
}
export const updateEducation = async (req, res, next) => {
    try {
        const updatedEducation = await Education.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedEducation);
    } catch (error) {
        next(error);
    }
}
export const deleteEducation = async (req, res, next) => {
    try {
        await Education.findByIdAndDelete(req.params.id);
        res.status(200).json('Education has been removed');
    } catch (error) {
        next(error);
    }
}
export const getEducation = async (req, res, next) => {
    try {
        const education = await Education.findById(req.params.id);
        res.status(200).json(education);
    } catch (error) {
        next(error);
    }
}
export const getAllEducations = async (req, res, next) => {
    try {
        const { limit, ...others } = req.query;
        const education = await Education.find({
            ...others,
        }).limit(limit);
        res.status(200).json(education);
    } catch (error) {
        next(error)
    }
}

