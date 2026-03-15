import { useState, useContext, createContext } from 'react';
import type { ReactNode } from 'react';
interface LanguageContextType {
    language: string
    setLanguage: (language:string) => void
}
const MyLanguageContext = createContext<LanguageContextType | undefined>(undefined);
type LanguageProviderProps = {
    children: ReactNode
}

export const LanguageProvider = ({children}: LanguageProviderProps)=>{
    const [language, setLanguage] = useState('en')
    return (
        <MyLanguageContext.Provider value={{language,setLanguage}}>{children}</MyLanguageContext.Provider>
    )
}

export const useLanguage = ()=>{
    const context=useContext(MyLanguageContext)
    if(!context){
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}