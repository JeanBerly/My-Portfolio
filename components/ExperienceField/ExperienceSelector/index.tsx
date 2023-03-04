import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExperienceDescription from '../ExperienceDescription';

export interface ExperienceSelectorProps{
    experiences: Array<string>,
}

const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({
    experiences
}: ExperienceSelectorProps) =>{
    const { t } = useTranslation();
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
    const generateExperienceListTitles = (experiences: Array<string>): Array<any> => {
        return experiences.map((experienceTitle) => {return <li key={experienceTitle} className="px-2 my-4" id={experienceTitle} onClick={(e: any) => setSelectedExperience(e.currentTarget.id)}><span className={`text-purple text-2xl cursor-pointer ${experienceTitle === selectedExperience ? "underline font-bold" : "hover:underline text-zinc"}`}>{t(`experience:${experienceTitle}:title`)}</span></li>});
    }
    return (
        <>
            <ul className='flex flex-column flex-row overflow-x-auto'>
                {generateExperienceListTitles(experiences)}
            </ul>
            <ExperienceDescription experience={selectedExperience}></ExperienceDescription>
        </>
    );
}

export default ExperienceSelector;