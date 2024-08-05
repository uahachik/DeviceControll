import tw from 'tailwind-styled-components';

// const Card = tw.div`
//   w-full
//   max-w-sm
//   mx-auto
//   bg-white
//   rounded-xl
//   shadow-md
//   overflow-hidden
//   md:max-w-2xl
// `;


// const ProfileContent = tw.div`
//   p-6
// `;


interface TitleProps {
  $large?: boolean;
}

// const ColorizedContainer = styled.section`
//   ${(props) => {
//     console.log(props);
//     return '';
//   }}
// `;

export const Container = tw.section`
  flex
  flex-col
  items-center
  justify-center
  min-w-full
  min-h-screen
  ${(props) => props.color || 'bg-blue-500'}
`;

export const ProfileCard = tw.div`
  w-6/12
  max-w-md
  bg-white
  rounded-xl
  shadow-md
  overflow-hidden
  md:max-w-2xl
`;

export const ProfileImageContainer = tw.div`
  relative
`;

export const ProfileImage = tw.img`
  h-48
  w-full
  object-cover
  md:w-48
`;

export const AvatarImage = tw.img`
  absolute top-2 right-2 h-12 w-12 rounded-full border-2 border-white
`;

export const ProfileContent = tw.div`
  props-8
`;

export const ProfileName = tw.h1`
  text-2xl font-bold text-gray-900
`;

export const ProfileBio = tw.p`
  mt-2
  text-gray-600
`;

export const Title = tw.h1<TitleProps>`
  my-6
  ${(props) => props.$large ? 'text-indigo-500' : 'text-base'}
`;

export const Button = tw.button<{ $primary: boolean; }>`
  flex 
  items-center 
  justify-center
  h-8
  ${(props) => (props.$primary ? 'bg-indigo-900' : 'bg-indigo-300')}
`;