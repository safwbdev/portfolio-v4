import Certification from "../models/Certification.js";

export const createCertification = async (req, res, next) => {
    const newCertification = new Certification(req.body);

    try {
        const savedCertification = await newCertification.save();
        res.status(200).json(savedCertification);
    } catch (error) {
        next(error);
    }
}
export const updateCertification = async (req, res, next) => {
    try {
        const updatedCertification = await Certification.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedCertification);
    } catch (error) {
        next(error);
    }
}
export const deleteCertification = async (req, res, next) => {
    try {
        await Certification.findByIdAndDelete(req.params.id);
        res.status(200).json('Certification has been removed');
    } catch (error) {
        next(error);
    }
}
export const getCertification = async (req, res, next) => {
    try {
        const certification = await Certification.findById(req.params.id);
        res.status(200).json(certification);
    } catch (error) {
        next(error);
    }
}
export const getAllCertifications = async (req, res, next) => {
    try {
        const { limit, ...others } = req.query;
        const certification = await Certification.find({
            ...others,
        }).limit(limit);
        res.status(200).json(certification);
    } catch (error) {
        next(error)
    }
}

