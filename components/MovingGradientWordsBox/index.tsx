import React, { useEffect, useState } from 'react';
import AnimatedColorGradientWord from '../AnimatedColorGradientWord';

export interface MovingGradientWordsBoxProps{
    words: Array<string>,
}
const MovingGradientWordsBox: React.FC<MovingGradientWordsBoxProps> = ({
    words,
}: MovingGradientWordsBoxProps) =>{
    let [startAnimation, setStartAnimation] = useState(false);
    const generateGradientWordsComponents = (arr: Array<string>): Array<any> => {
        return arr.map((text) => {return <AnimatedColorGradientWord key={text} text={text} startAnimation={startAnimation}></AnimatedColorGradientWord>});
    }
    let wordComponents = generateGradientWordsComponents(words);
    useEffect(() =>{
        setStartAnimation(true);
    }, [])
    return (
        <div id='bouncingContainer' className='block relative w-full h-45vh lg:h-full lg:w-1/2'>
            {wordComponents}
        </div>
    );
}

export default MovingGradientWordsBox;