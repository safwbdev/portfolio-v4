export const API_URL = `${import.meta.env.VITE_API_URL}`;
export const STATIC_MODE = `${import.meta.env.VITE_STATIC_MODE}`;
// export const API_URL = `http://localhost:8800/api`;
export const CLOUDINARY_ID = import.meta.env.VITE_CLOUDINARY

// Fetch 
export const PROFILE_PATH = `${API_URL}/users`;
export const SKILL_PATH = `${API_URL}/skills`;
export const PROJECT_PATH = `${API_URL}/projects`;
export const CERTIFICATION_PATH = `${API_URL}/certifications`;
export const EDUCATION_PATH = `${API_URL}/education`;
export const EXPERIENCE_PATH = `${API_URL}/experience`;

// Cloudinary 
export const IMG_UPLOAD_PATH = `https://api.cloudinary.com/v1_1/${CLOUDINARY_ID}/image/upload`;

// Navigation 
export const ROOT = `/`;
export const LOGIN = `login`;
export const USERS = `users`;
export const BY_ID = `:userId`;
export const EDIT = `edit`;
export const EDIT_BY_ID = `edit/:userId`;
export const NEW = `new`;
export const SKILLS = `skills`;
export const PROJECTS = `projects`;
export const EXPERIENCE = `experience`;
export const EDUCATION = `education`;
export const CERTIFICATIONS = `certifications`;