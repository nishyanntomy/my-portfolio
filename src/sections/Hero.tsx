"use client";

import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <section id="home">
      <div className='py-32 md:py-48 lg:py-60 overflow-x-clip'>
        <div className='absolute inset-0 pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
          <div className='size-[620px] hero-ring'></div>
          <div className='size-[820px] hero-ring'></div>
          <div className='size-[1020px] hero-ring'></div>
          <div className='size-[1220px] hero-ring'></div>

          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='10s' shouldSpin spinDuration='3s'>
            <SparkleIcon className='size-8 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='12s' shouldSpin spinDuration='3s'>
            <SparkleIcon className='size-5 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='14s' shouldSpin spinDuration='3s'>
            <div className='size-2 bg-emerald-300/20 rounded-full'></div>
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='16s' shouldSpin spinDuration='3s'>
            <SparkleIcon className='size-10 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='18s' shouldSpin spinDuration='6s'>
            <StarIcon className='size-12 text-emerald-300' />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='20s' shouldSpin spinDuration='6s'>
            <StarIcon className='size-8 text-emerald-300' />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='22s'>
            <div className='size-2 bg-emerald-300/20 rounded-full'></div>
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='24s' shouldSpin spinDuration='3s'>
            <SparkleIcon className='size-14 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='26s'>
            <div className='size-3 bg-emerald-300/20 rounded-full'></div>
          </HeroOrbit>
          <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='28s' shouldSpin spinDuration='6s'>
            <StarIcon className='size-28 text-emerald-300' />
          </HeroOrbit>

        </div>
        <div className='container'>
          <div className='flex flex-col items-center -space-y-8'>

            <img
              src="/images/nishy.jpeg"
              alt="Nishy's Profile Picture"
              className="w-48 h-48 bg-gray-950 border border-gray-800 rounded-full shadow-lg object-cover"
            />
            <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
              <div className='bg-green-500 size-2.5 rounded-full relative'>
                <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
              </div>
              <div className='text-sm font-medium'>Available starting June 2025</div>
            </div>

          </div>

          <div className='max-w-xl mx-auto'>
            <h1 className='font-serif text-3xl md:text-5xl  text-center mt-8 tracking-wide'>{"Hi, I'm Nishy."}</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>Full-stack developer | MS CS @ Northeastern | Spring 2025 grad</p>
            <p className='mt-1 text-center text-white/60 md:text-lg'>Looking for new grad roles where I can build fast, clean, and meaningful software.</p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
            <button
              onClick={() => {
                const section = document.getElementById('projects');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button onClick={() => {
              const section = document.getElementById('contact');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }} className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
              <span>👋</span>
              <span className='font-semibold p'>{"Let's Connect"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
