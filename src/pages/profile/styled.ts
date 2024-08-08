import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const StyledPageContainer = tw.main`
  relative
  bg-yellow-50
  md:fixed
  md:top-0
  md:left-0
  md:right-0
  md:bottom-0
`;

export const StyledSection = tw.section`
  relative
  top-6
  flex
  flex-col
  items-center
  justify-start
  min-w-full
  min-h-screen
  md:justify-evenly
`;

export const StyledTitle = tw.h1<{ $large?: boolean; }>`
  my-6
  text-2xl
  font-medium
  text-indigo-600
  md:my-0
  md:text-3xl
  md:font-normal
`;

const SProfile = styled.div`
  width: -webkit-fill-available;
  min-height: 45em;

  @media (min-width: 768px) {
    min-width: 37em;
    min-height: 17em;
  }
`;

export const StyledProfile = tw(SProfile)`
  relative
  bg-white
  rounded-xl
  shadow-md
  max-w-md
  md:max-w-2xl
  md:flex
  md:mb-48
  md:p-10
`;


export const StyledProfileContent = tw.div`
  relative
  pb-4
`;

export const StyledProfileName = tw.h1`
  text-2xl font-bold text-gray-900
`;

export const StyledProfileBio = tw.p`
  mt-2
  text-gray-600
`;