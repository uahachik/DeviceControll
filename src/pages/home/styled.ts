import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const HomeItem = `
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

const HomeLink = tw(Link)`${() => `
  flex 
  items-center 
  justify-center
  ${HomeItem}`}
`;

const Container = tw.section`
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

const Shortcut = tw(HomeLink)`
  aspect-[5/3]
`;

const Header = tw.header`
  grid
  grid-rows-[repeat(3,_1fr)]
  grid-cols-[repeat(5,_1fr)]
  gap-2
  h-40
  p-2
  bg-zinc-200
  ${() => `${HomeItem}`}
`;

const About = tw(HomeLink)`
  row-span-2
  col-span-3
  p-2
  bg-slate-100
`;

const Profile = tw(HomeLink)`
  items-stretch
  row-span-3
  col-span-2
  col-start-4
  bg-slate-100
`;

export { Container, Shortcut, Header, About, Profile };