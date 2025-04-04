import Project from "../models/Project.js";

export const createProject = async (req, res, next) => {
    const newProject = new Project(req.body);

    try {
        const savedProject = await newProject.save();
        res.status(200).json(savedProject);
    } catch (error) {
        next(error);
    }
}
export const updateProject = async (req, res, next) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedProject);
    } catch (error) {
        next(error);
    }
}
export const deleteProject = async (req, res, next) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json('Project has been removed');
    } catch (error) {
        next(error);
    }
}
export const getProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
}
export const getAllProjects = async (req, res, next) => {
    try {
        const { limit, ...others } = req.query;
        const project = await Project.find({
            ...others,
        }).limit(limit);
        res.status(200).json(project);
    } catch (error) {
        next(error)
    }
}

