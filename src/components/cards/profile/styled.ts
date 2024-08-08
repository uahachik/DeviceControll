import tw from 'tailwind-styled-components';

export const StyledProfileCard = tw.div`
  relative
  w-full
  flex
  flex-col
  max-w-md
  m-1
  bg-white
  rounded-lg
  shadow-md
  overflow-hidden
  md:max-w-2xl
`;

export const StyledProfileImageContainer = tw.div`
  flex
  justify-center
  place-items-center
`;

export const StyledProfileContent = tw.div`
  h-full
  flex
  justify-center
  place-items-center
  bg-sky-50
`;

export const StyledProfileName = tw.h1`
  text-sm font-bold text-gray-900
`;