import { useEffect, useState } from "react";
import { projectInputs, skillInputs, educationInputs, experienceInputs, userInputs, certificationInputs } from "../formSource";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, PROJECTS, SKILLS, USERS } from "../routes";

const useDataType = (type) => {
    const [inputData, setInputData] = useState([]);

    useEffect(() => {
        switch (type) {
            case USERS:
                setInputData(userInputs);
                break;
            case SKILLS:
                setInputData(skillInputs);
                break;
            case PROJECTS:
                setInputData(projectInputs);
                break;
            case EXPERIENCE:
                setInputData(experienceInputs);
                break;
            case EDUCATION:
                setInputData(educationInputs);
                break;
            case CERTIFICATIONS:
                setInputData(certificationInputs);
                break;
            default:
                return;
        }
    }, []);


    return { inputData }
}

export default useDataType