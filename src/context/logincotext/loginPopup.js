import { createContext, useContext } from "react";

const loginContext = createContext();

export const LoginContextProvider = loginContext.Provider;

const useLoginPopup = () => {
    return useContext(loginContext);
}

export default useLoginPopup;