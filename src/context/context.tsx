import { createContext, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

// createContext
type AppContextProps = {
    darkMode: boolean;
    mobileMenu: boolean;
    language: string;

    changeModeBtn: () => void;
    changeLanguageBtn: () => void;
    toggleMobileBtn: () => void;
}
export const AppContext = createContext<AppContextProps | null>(null)

// contextProvider
type AppProviderProps = { children: React.ReactNode }
const AppProvider = ({ children }: AppProviderProps ) => {

    // change language
    const { i18n } = useTranslation()

    // inital language value is "en" or "th" and it will save it to the localStorage
    // if language state is "th" it will saved as "th" if not it will saved as "en"
    // and if no language is saved, default to English "en".
    const initialValue = (): "en" | "th" => {
        const saved = localStorage.getItem("language");

        return saved === "th" ? "th" : "en";
    };

    const [language, setLanguage] = useState<"en" | "th">(initialValue);
    
    // can change to "en" or "th"
    // if language state is "th" will change to "en" and it will became setLangeuage's value
    // then update i18n with the new language.
    const changeLanguageBtn = () => {
        let changeto: "en" | "th" = language === "en" ? "th" : "en"
        setLanguage(changeto)
        i18n.changeLanguage(changeto);
    }

    // change mode
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });
    const changeModeBtn = () => {
        setDarkMode(prev => !prev)
    }

    // mobile navigation manu
    const [ mobileMenu, setMobileMenu ] = useState(false)
    const toggleMobileBtn = () => {
        setMobileMenu(!mobileMenu)
    }

    // every time user change language or dark and light mode it will saved to local with localStorage
    useEffect(() => {
        localStorage.setItem("darkMode", String(darkMode));
        localStorage.setItem("language", language);
        i18n.changeLanguage(language);
    }, [darkMode, language])

    const valueContext: AppContextProps = {
        darkMode,
        language,
        mobileMenu,

        changeModeBtn,
        changeLanguageBtn,
        toggleMobileBtn
    };

    return (
        <AppContext.Provider value={valueContext}>
            {children}
        </AppContext.Provider>
    )
}

// useContext
export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider")
    }
    return context
}

export default AppProvider
