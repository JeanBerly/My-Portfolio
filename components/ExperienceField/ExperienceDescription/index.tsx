import React, { AllHTMLAttributes, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export interface ExperienceDescriptionProps{
    experience: string,
}

function generateSkillsList(skills: Array<string>) {
    return skills.map((skillName) => <li key={skillName} className='inline-block text-black dark:text-white pr-2 text-lg'>{skillName}</li>)
}

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
    experience,
}: ExperienceDescriptionProps) =>{
    const { t } = useTranslation();
    
    let info : any = t(`experience:${experience}`, {returnObjects: true});
    useEffect(() => {
        info = t(`experience:${experience}`, {returnObjects: true});
    }, [experience])

    return (
        <div>
            <p className='text-2xl text-purple font-bold'>{info.duration}</p>
            <p className='text-black text-lg dark:text-white my-2'>{info.description}</p>
            <span className='text-purple underline font-medium text-2xl dark:text-white'>Skills:</span>
            <ul className='block'>
                {generateSkillsList(info.skills)}
            </ul>
            <p className='text-purple dark:text-white underline text-2xl font-medium'>{t('experience:category_title')}<span className='ml-2 inline-block text-xl text-black dark:text-white text-base font-normal'>{info.category}</span></p>
        </div>
    );
}

export default ExperienceDescription;