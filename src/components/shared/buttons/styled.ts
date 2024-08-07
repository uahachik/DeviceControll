import tw from 'tailwind-styled-components';

export const StyledButtonContainer = tw.div`
  relative
  w-full
  h-3
`;

export const StyledButton = tw.button`
  absolute
  top-1
  w-full
  flex 
  items-center 
  justify-start
  h-8
  bg-indigo-300
  focus:outline-none
  md:left-1
  md:w-auto
  md:justify-center
`;