import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }


const ToggleThemeButton: React.FC<ButtonProps> = ({
    disabled = false,
}: ButtonProps) =>{
    const [darkTheme, toggleDarkTheme]: [boolean, any] = useState(false);

    const toggleTheme: React.MouseEventHandler<HTMLButtonElement> = () => toggleDarkTheme(!darkTheme);

    useEffect(() => {
        const body = document.body;
        if (darkTheme) body.classList.add('dark');
        else body.classList.remove('dark');
    })

    return (
        <button
        disabled={disabled}
        onClick={toggleTheme}
        className='bg-white rounded pl-0.5 lg:p-1 lg:w-7 lg:h-7 w-6 h-6'
        >
        {darkTheme ? 
        <svg aria-hidden="true" id="theme-toggle-light-icon" className="w-5 h-5 rounded" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
        :
        <svg aria-hidden="true" id="theme-toggle-dark-icon" className="w-5 h-5 rounded" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        }
        
        </button>
    );
}

export default ToggleThemeButton;