import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ProfileImage from '../public/images/profile_image2.jpg';
import { useTranslation } from 'react-i18next'
import MovingGradientWordsBox from '../components/MovingGradientWordsBox';
import {formatLinkUrl} from '../components/HeaderLink'
import ExperienceSelector from '../components/ExperienceField/ExperienceSelector';
const IndexPage = () => {
  const {t} = useTranslation();
  return(<>
        <Head>
            <title>Jean Berly</title>
        </Head>
      <section className='flex flex-col-reverse h-full lg:flex-row lg:w-full lg:h-95vh dark:bg-black bg-white'>
      <MovingGradientWordsBox words={[t('movingGradientWords:word1'), t('movingGradientWords:word2'), t('movingGradientWords:word3'), t('movingGradientWords:word4'), t('movingGradientWords:word5')]}></MovingGradientWordsBox>
      <div className='grid place-items-center h-50vh lg:h-full w-full lg:w-1/2 text-black dark:text-white underline'>
            <div className='text-center'>
              <h1 className='text-5xl lg:text-9xl'>{t('mainTitle:mainPhrase')}<span className='text-purple '>Jean.</span></h1>
              <p className='text-xl lg:text-5xl py-5'>{t('mainTitle:role')}</p>
            </div>
        </div>
      </section>
      <section id={formatLinkUrl(t('headerlinks:headerLink1'))} className='flex flex-col justify-around lg:flex-row bg-purple'>
        <h1 className='text-white underline font-bold text-4xl lg:text-5xl my-5 lg:hidden mx-auto'>{t('about_me:title')}</h1>
        <div className='flex w-screen lg:w-1/3 px-5 py-10'>
            <Image width={200} height={200} alt={"tste"} src={ProfileImage} className="rounded-full mx-auto my-auto border-4 border-white"></Image>
        </div>        
        <div className='w-12/12 lg:w-1/2 px-5 py-10 mx-auto'>
          <h1 className='text-white hidden lg:block underline font-bold text-4xl lg:text-5xl mb-5'>{t('about_me:title')}</h1>
          <p className='text-xl text-white'>{t('about_me:content')}</p>
        </div>
      </section>
      <section id={formatLinkUrl(t('headerlinks:headerLink2'))} className='dark:bg-black bg-white'>
        <h3 className='text-black dark:text-white underline text-center lg:text-left font-bold text-4xl mx-auto lg:ml-8 pt-2'>{t('experience:title')}</h3>
        <div className='block w-10/12 mx-auto lg:mx-8'>
          <ExperienceSelector experiences={["dq", "2222"]}></ExperienceSelector>
        </div>
      </section>
  </>);
}

export default IndexPage;
