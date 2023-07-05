import Head from 'next/head';
import { Inter } from 'next/font/google';
import MobileProfileImage from '../public/images/img-mobile.jpg';
import ProfileImage from '../public/images/profile22.png';
import { FaArrowRight } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Typed from 'react-typed';
import Imagecomponent from '@/components/Imagecomponent';
import Buttoncomponent from '@/components/Buttoncomponent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sibi Abraham - Personal Portfolio</title>
      </Head>
      {/* Main section start */}
      <div className="flex items-center min-h-full p-0 mx-auto transition-all delay-75 opacity-100 transform-none md:w-full w-fit">
        {/* Slant bgcolor section start */}
        <div className="bg-magenta fixed h-[200%] w-full rotate-[-20deg] left-[-83%] top-[-50%] hidden md:block"></div>
        {/* Slant bgcolor section end */}
        {/* Main body section start */}
        <div className="w-fit md:w-full h-[104vh] md:h-screen items-center flex mx-0 md:mx-[-15px]">
          {/* Desktop Image section start */}
          {/* <div className="grow hidden md:block relative left-[5%] top-[-45%]">
            <Imagecomponent
              imagesrc={ProfileImage}
              className={
                'h-[calc(100vh_-_80px)] rounded-[30px] shadow-profileImage fixed z-[111] w-[calc(95vh_-_200px)]'
              }
              width={150}
              height={150}
              imagealt={''}
            />
          </div> */}
          {/* Desktop Image section end */}
          {/* Details section start */}
          <div className="grow text-left relative top-[-5%] md:top-[-3%]">
            <div className="max-w-[600px] my-0 mx-auto">
              {/* Mobile image section start */}
              {/* <Imagecomponent
                imagesrc={MobileProfileImage}
                className={
                  'w-[230px] h-[230px] rounded-[50%] max-w-[100%] align-middle border-[4px] border-solid border-profileimageborder md:hidden block mx-auto mb-[30px] mt-0'
                }
                width={150}
                height={150}
                imagealt={''}
              /> */}
              {/* Mobile image section end */}
              {/* Personal detail section start */}
              <h1
                className={`uppercase text-[30px] md:text-[51px] leading-[39px] md:leading-[62px] font-bold relative pl-[45px] pr-[25px] md:pr-0 md:mx-0 mt-[18px] mb-[7px] md:mb-[10px] text-magenta md:before:absolute md:before:left-0 md:before:top-[29px] md:before:h-[4px] md:before:w-[40px] md:before:rounded-[10px] md:before:bg-magenta md:before:content-['']`}
              >
                I&#39;m sibi abraham. &nbsp;
                <p className="text-lightgray text-[25px] md:text-[51px] font-semibold md:font-bold">
                  <Typed
                    strings={['web developer', 'react developer']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                  />
                </p>
              </h1>
              <p className="relative mt-[18px] mb-[13px] mx-[30px] text-center  md:mb-[28px] md:mt-[15px] md:mx-0 text-[16px] md:leading-[35px] md:text-left text-lightgray md:font-medium">
                I&#39;m a Indian based web developer &amp; react developer
                focused on crafting clean &amp; user‑friendly experiences, I am
                passionate about building excellent software that improves the
                lives of those around me.
              </p>
              {/* Personal detail section end */}
              {/* Button section start */}
              <Buttoncomponent
                link={'/about'}
                buttontext={'more about me'}
                buttonImage={<FaArrowRight />}
                extraclassName={
                  'mr-[10px] overflow-ellipsis md:ml-0 ml-[5%] w-[90%] before:ease-in-out'
                }
              />
              <Buttoncomponent
                link={'/pdf/SibiAbraham.pdf'}
                buttontext={'download CV'}
                buttonImage={<HiDownload />}
                target={'blank'}
                extraclassName={
                  'overflow-ellipsis md:ml-0 ml-[5%] w-[90%] before:ease-in-out'
                }
              />
              {/* Button section end */}
            </div>
          </div>
          {/* Details section end */}
        </div>
        {/* Main body section end */}
      </div>
      {/* Main section end */}
    </>
  );
}
