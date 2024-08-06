import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const StyledHomeItem = `
  w-full
  border 
  border-gray-300 
  rounded-lg 
  shadow-md 
  hover:shadow-lg 
  transition-shadow 
  duration-200 
  text-sm
  text-blue-500
  hover:text-blue-700
`;

const StyledHomeLink = tw(Link)`${() => `
  flex 
  items-center 
  justify-center
  ${StyledHomeItem}`}
`;

export const StyledContainer = tw.section`
  min-h-screen
  grid 
  gap-4 
  p-4 
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-3
  2xl:grid-cols-3
  content-start
  bg-zinc-100
`;

export const StyledCard = tw(StyledHomeLink)`
  aspect-[5/3]
`;

export const StyledHeader = tw.header`
  grid
  grid-rows-[repeat(3,_1fr)]
  grid-cols-[repeat(5,_1fr)]
  gap-2
  h-40
  p-2
  bg-zinc-200
  ${() => `${StyledHomeItem}`}
`;

export const StyledAboutCard = tw(StyledHomeLink)`
  row-span-2
  col-span-3
  p-2
  text-gray-700
  bg-slate-100
  md:row-span-2
  md:col-span-4
`;

export const StyledProfileCard = tw(StyledHomeLink)`
  row-span-3
  col-span-2
  col-start-4
  items-stretch
  bg-slate-100
  md:row-span-3
  md:col-span-1
  md:col-start-5
`;