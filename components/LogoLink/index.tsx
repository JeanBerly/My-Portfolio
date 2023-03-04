import React, { LinkHTMLAttributes } from 'react';


export interface LogoLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
    linkUrl: string,
}

const LogoLink: React.FC<LogoLinkProps> = ({
    linkUrl,
    children,
}: LogoLinkProps) =>{
    return (
        <a className='inline-block p-2 text-white' target={'_blank'} href={linkUrl}>{children}</a>
    );
}

export default LogoLink;