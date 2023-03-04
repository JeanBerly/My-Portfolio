import React, { ButtonHTMLAttributes, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {formatLinkUrl} from '../HeaderLink'
export interface MenuBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuBar: React.FC<MenuBarProps> = ({
    disabled = false,
}: MenuBarProps) =>{
    const {t} = useTranslation();
    const [visibleMenu, setMenuVisibility] = useState(false);
    const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
        setMenuVisibility(!visibleMenu);
    }
    return (
        <button className='lg:hidden' onClick={toggleMenu}>
            <svg viewBox="0 0 100 80" width="30" height="30">
                <rect x="0"  className='fill-white' width="100" height="10"/>
                <rect y="30" className='fill-white' width="100" height="10"/>
                <rect y="60" className='fill-white' width="100" height="10"/>
            </svg>
            <ul className={`fixed bg-black top-5vh right-0 w-40vw text-white ${visibleMenu ? "block" : "hidden"}`}>
                <a href={"#" + formatLinkUrl(t('headerlinks:headerLink1'))}><li className='py-2 bg-purple hover:underline'>{t('headerlinks:headerLink1')}</li></a>
                <a href={"#" + formatLinkUrl(t('headerlinks:headerLink2'))}><li className='py-2 bg-purple hover:underline'>{t('headerlinks:headerLink2')}</li></a>
                <a href={"#" + formatLinkUrl(t('headerlinks:headerLink3'))}><li className='py-2 bg-purple hover:underline'>{t('headerlinks:headerLink3')}</li></a>
                <a href={"#" + formatLinkUrl(t('headerlinks:headerLink4'))}><li className='py-2 bg-purple hover:underline'>{t('headerlinks:headerLink4')}</li></a>
            </ul>
        </button>
    );
}

export default MenuBar;