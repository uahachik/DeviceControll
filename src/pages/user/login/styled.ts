import tw from 'tailwind-styled-components';

export const StyledForm = tw.form`
  flex
  flex-col
  items-center
  gap-4
  p-4
  w-full
  max-w-sm
  mx-auto
`;

export const StyledInputContainer = tw.div`
  relative
  w-full
  h-20
`;

export const StyledLabel = tw.label`
  font-bold
  text-gray-600
`;

export const StyledInput = tw.input<{ $hasError: boolean; }>`
  w-full
  p-2 
  border-2
  border-solid
  rounded
  focus:outline-none
  ${({ $hasError }) => $hasError ? 'border-red-500 focus:border-red-500' : 'border-neutral-600'}
`;

export const StyledToggleButton = tw.button<{ $hasError: boolean; }>`
  absolute
  inset-y-3
  right-0
  top-6
  min-w-14
  p-0
  text-xs
text-gray-600
bg-gray-100
  border-2
  border-solid
border-neutral-600
border-l-gray-200
  rounded
  rounded-l-none
hover:bg-gray-200
hover:border-neutral-600
hover:border-l-gray-300
  focus:outline-none

  ${({ $hasError }) => {
    if ($hasError) {
      return `
        border-red-500
        border-l-gray-200
        hover:border-red-600
        hover:border-l-gray-300
      `;
    }
  }}}
`;

export const StyledErrorMessage = tw.p`
  absolute
  mt-1
text-red-600
  text-sm
`;

export const StyledSubmitButton = tw.button`;
  w-full
  mt-2
  py-2
bg-blue-500
text-white
  rounded
  focus:outline-none
hover:bg-blue-600
`;