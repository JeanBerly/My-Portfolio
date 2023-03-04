import React, { LinkHTMLAttributes } from 'react';


export interface HeaderLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
    linkName: string,
    linkUrl?: string,
}
export const formatLinkUrl = (link : string | any) : string => {
    link = link.replaceAll(" ", "_");
    link = link.toLocaleLowerCase();
    link = link.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return link;
}
const HeaderLink: React.FC<HeaderLinkProps> = ({
    linkName,
    linkUrl,
}: HeaderLinkProps) =>{
    return (
        <a className='hidden lg:inline-block text-white text-base hover:underline' href={linkUrl ? `${linkUrl}` : "#" + formatLinkUrl(linkName)}>{linkName}</a>
    );
}

export default HeaderLink;