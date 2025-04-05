import { useEffect, useState } from "react";
import { projectInputs, skillInputs, educationInputs, experienceInputs, userInputs } from "../formSource";

const useDataType = (type) => {
    const [inputData, setInputData] = useState([]);

    useEffect(() => {
        switch (type) {
            case 'users':
                setInputData(userInputs);
                break;
            case 'skills':
                setInputData(skillInputs);
                break;
            case 'projects':
                setInputData(projectInputs);
                break;
            case 'experience':
                setInputData(experienceInputs);
                break;
            case 'education':
                setInputData(educationInputs);
                break;
            default:
                return;
        }
    }, []);


    return { inputData }
}

export default useDataType