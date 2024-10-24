'use client'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import playIcon from '@/assets/home/school/playIcon.svg'
import { schoolFilmDataMain } from '@/utils/arrays/Home'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const FilmVideo = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleClick = (index) => {
    // Pause the currently playing video if it's different from the clicked video
    if (playingIndex !== null && playingIndex !== index) {
      videoRefs.current[playingIndex].pause();
      videoRefs.current[playingIndex].currentTime = 0;
    }
    setPlayingIndex(index);
  };

  return (
    <Carousel className="relative">
      <CarouselContent className="w-[95%] object-cover gap-x-4">
        {schoolFilmDataMain.map((item, index) => (
          <CarouselItem
            className="basis-1/3 max-md:basis-1/2 max-sm:basis-full"
            key={index}
          >
            <div className='border-[3px] border-[#E67D4B] rounded-[15px] '>
              <div className='relative w-full h-[180px] max-md:h-[150px]'>
                {playingIndex === index ? (
                  <video
                    ref={(el) => videoRefs.current[index] = el}
                    className='rounded-[10px] w-full h-full object-cover'
                    controls
                    autoPlay
                    src={item.video}
                  />
                ) : (
                  <>
                    <Image
                      className='rounded-[10px] cursor-pointer w-full h-full object-cover'
                      src={item.image}
                      alt="Video Thumbnail"
                      onClick={() => handleClick(index)}
                      
                    />
                    <div className='absolute inset-0 flex p-3' onClick={() => handleClick(index)}>
                      <div className='bg-white w-[100px] h-[40px] rounded-full flex items-center justify-center cursor-pointer drop-shadow-md'>
                        <p className='text-lg flex items-center gap-2'>video <Image src={playIcon} width={20} height={22} alt="Play Icon" /></p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FilmVideo;