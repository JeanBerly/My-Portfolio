import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SwitchLanguageButton: React.FC<ButtonProps> = ({
    disabled = false,
}: ButtonProps) =>{
    const {i18n} = useTranslation();
    const [currentLanguage, setLanguage]: [string, any] = useState("pt");
    const isCurrentLanguage = (lang : string) =>{
        return currentLanguage === lang;
    }
    const toggleLanguage: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (currentLanguage === "pt") setLanguage("en");
        else if (currentLanguage === "en") setLanguage("pt");
    }
    useEffect(() =>{
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage])
    return (
        <button
        disabled={disabled}
        onClick={toggleLanguage}
        className='flex py-1 bg-white rounded-full lg:p-0.5 lg:p-1 w-21'
        >
            <span className={`inline-block rounded-full mx-1 text-sm ${isCurrentLanguage("pt") ? "bg-purple" : "bg-black"} px-2 text-white`}>PT</span>
            <span className={`inline-block rounded-full mx-1 text-sm ${isCurrentLanguage("en") ? "bg-purple" : "bg-black"} px-2 text-white`}>EN</span>
        </button>
    );
}

export default SwitchLanguageButton;