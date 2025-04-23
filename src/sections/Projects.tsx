import newMePage from "@/assets/images/newme.png";
import grimePage from "@/assets/images/grime.png";
import getfitgoPage from "@/assets/images/getfitgo.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowpRightIcon from '@/assets/icons/arrow-up-right.svg';
import GrainImage from '@/assets/images/grain.jpg';

const portfolioProjects = [
  {
    company: "NewMe Fashion",
    year: "2023",
    title: "Online Retail App – Fast, Fluid, Fashion-Forward",
    results: [
      { title: "Built with React, TypeScript, and Next.js for speed and scalability" },
      { title: "Developed dynamic product pages and seamless cart flow" },
      { title: "Implemented fluid, responsive components for cross-device support" },
    ],
    link: "https://newme.asia/?srsltid=AfmBOorf5NtncyiQjXXgjgogOFl50Fb8m1bRW00Vwtb6A5U6eXYCgwf9",
    image: newMePage,
  },
  {
    company: "Get Fit Go",
    year: "2024",
    title: "Fitness Application - SQL",
    results: [
      { title: "Designed MySQL schema with stored procedures, events, and triggers" },
      { title: "Built RESTful APIs using Flask and MVC architecture" },
      { title: "Developed React frontend with reusable components and state management" },
    ],
    link: "https://github.com/nishyanntomy/getFitGOFrontEnd",
    image: getfitgoPage,
  },
  {
    company: "GRIME",
    year: "2023",
    title: "Graphical Image Manipulation and Enhancement using JAVA",
    results: [
      { title: "Built an interactive image editor with Java Swing and MVVM architecture" },
      { title: "Applied OOP principles and command patterns for clean, modular de" },
      { title: "Ensured reliability through JUnit tests with mocks and TDD practices" },
    ],
    link: "https://github.com/nishyanntomy/GRIME",
    image: grimePage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See how I tranformed concepts into engaging digital experiences.</p>
      <div className="md:mt-20 flex flex-col mt-10 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <div className="sticky top-16" style={{
            top: `calc(64px + ${projectIndex*40}px`
          }}>
          <div className="bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none" key={project.title}>
            <div className="absolute inset-0 -z-10 opacity-5" style={{
              backgroundImage: `url(${GrainImage.src})`
            }}>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:pb-16">

            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(result => (
                <li className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <span>{result.title}</span>
                </li>
              ))}

            </ul>
            {project.link &&
              (
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>View Project</span>
                    <ArrowpRightIcon className='size-4' />
                  </button>
                </a>
              )}
              </div>
              <div className="relative">
            <Image className="mt-8 -mb-7 -p-3 rounded-t-3xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:-p-3" src={project.image} alt={project.title} />
            </div>
            </div>
          </div>
          </div>
        ))}
      </div>

    </div>
  </section>;
};
