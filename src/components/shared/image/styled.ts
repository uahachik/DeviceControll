import tw from 'tailwind-styled-components';

export const StyledProfileImage = tw.img`
  h-fit
  ${props => props.className}
`;