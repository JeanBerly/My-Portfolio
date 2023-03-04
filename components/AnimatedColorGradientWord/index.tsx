import React, { useEffect } from 'react';

export interface AnimatedColorGradientTextProps{
    text: string,
    startAnimation : boolean,
}
let bouncingContainer: any = null;
function startMovement (text: string, startAnimation: boolean) {

    let word: any = document.getElementById(text);
    bouncingContainer = document.getElementById('bouncingContainer');

    let horizontalAngle = Math.random() * (1.5 - 0.5) + 0.5;
    let verticalAngle = Math.random() * (1.5 - 0.5) + 0.5;

    const wordProperties = {x: 0.0, y: 0.0, w: word.clientWidth, h: word.clientHeight, dx: 1, dy: 1, speed: 2, ani: {}};

    const mover = () => {
        if (startAnimation) requestAnimationFrame(mover);

        if (wordProperties.y > bouncingContainer.clientHeight - 1.5 * wordProperties.h || wordProperties.y < 0){
            wordProperties.dy *= -1;
        }
        if (wordProperties.x > bouncingContainer.clientWidth - 1.5 * wordProperties.w || wordProperties.x < 0){
            wordProperties.dx *= -1;
        }
        wordProperties.x += wordProperties.dx * wordProperties.speed * horizontalAngle;
        wordProperties.y += wordProperties.dy * wordProperties.speed * verticalAngle;
        word.style.left = `${wordProperties.x}px`;
        word.style.top = `${wordProperties.y}px`;
    }

    const handleWindowResize = () => {
        wordProperties.x = 0;
        wordProperties.y = 0;
    }

    window.addEventListener('resize', handleWindowResize);
    wordProperties.ani = requestAnimationFrame(mover);
}

const AnimatedColorGradientText: React.FC<AnimatedColorGradientTextProps> = ({
    text,
    startAnimation
}: AnimatedColorGradientTextProps) =>{

    useEffect(() =>{
        if (startAnimation) startMovement(text, startAnimation);
    }, [startAnimation]);

    return (
        <span id={text} className='block absolute w-fit h-fit linear-wipe text-2xl'>{text}</span>
    );
}

export default AnimatedColorGradientText;