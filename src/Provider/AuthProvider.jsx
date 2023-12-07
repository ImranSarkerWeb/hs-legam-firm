
import { createContext, useState } from 'react';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from '../locales/en/translation.json';
import tba from '../locales/ba/translation.json';
import { useEffect } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [lang, setLang] = useState('en')
    console.log(lang)
    useEffect(()=>{
        const langValue = localStorage.getItem('lang')
        setLang(langValue)
    },[])
    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources: {
                en: {
                    translation: tEn
                },
                ba: {
                    translation: tba
                }
            },
            lng: lang, // if you're using a language detector, do not define the lng option
            fallbackLng: "en",

            interpolation: {
                escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
            }
        });

    const authInfo = {
        setLang,
        lang
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;