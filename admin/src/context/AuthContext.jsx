import { createContext, useEffect, useReducer } from "react"

const INIT_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null
}

export const AuthContext = createContext(INIT_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null
            }
            break;
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null
            }
            break;
        case "LOGIN_FAIL":
            return {
                user: null,
                loading: false,
                error: action.payload
            }
            break;
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null
            }
            break;

        default:
            return state
            break;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INIT_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])


    return (<AuthContext.Provider value={{ user: state.user, loading: state.loading, error: state.error, dispatch }}>
        {children}
    </AuthContext.Provider>)
}