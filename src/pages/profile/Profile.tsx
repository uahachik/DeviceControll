import { useEffect } from 'react';
import image from '../../assets/default-profile-image.jpg';
import avatar from '../../assets/default-avatar';
import HumanReadableDate from '../../components/shared/HumanReadableDate';
import DisplayImage from '../../components/shared/image/DisplayImage';
import GoBackButton from '../../components/shared/buttons/GoBackButton';
import { useEntityMutation, mutationFn } from '../../api/useEntityMutation';
import { UserCreateInput } from '../user/types';
import {
  StyledSection,
  StyledProfileBio,
  StyledProfile,
  StyledProfileContent,
  StyledProfileName,
  StyledTitle,
  StyledPageContainer
} from './styled';

const Profile = () => {
  const mutation = useEntityMutation(mutationFn, { store: ['user'] });
  useEffect(() => {
    mutation.mutate({
      path: '/api/user/me',
      method: 'POST',
    });
  }, []);
  const user: UserCreateInput = mutation.data && mutation.data.user;
  const { firstName, lastName, email, profile, createdAt, lastActive } = user || '';
  return (
    <StyledPageContainer>
      <GoBackButton path="/" />
      <StyledSection>
        <StyledTitle>Profile</StyledTitle>
        <StyledProfile>
          <DisplayImage
            src={avatar}
            alt="Avatar"
            className="absolute top-3 right-3 w-12 rounded-full border-2 border-white"
          />
          <DisplayImage src={image} alt={firstName} className="w-full md:w-48" />
          <StyledProfileContent>
            <StyledProfileName>{firstName}</StyledProfileName>
            <StyledProfileName>{lastName}</StyledProfileName>
            <StyledProfileBio>{email}</StyledProfileBio>
            <StyledProfileBio>Personal data: {profile}</StyledProfileBio>
            <StyledProfileBio>
              Last login: <HumanReadableDate timestamp={lastActive} />
            </StyledProfileBio>
            <StyledProfileBio>
              Registration date: <HumanReadableDate timestamp={createdAt} />
            </StyledProfileBio>
          </StyledProfileContent>
        </StyledProfile>
        <StyledProfileBio>
        </StyledProfileBio>
      </StyledSection>
    </StyledPageContainer>
  );
};

export default Profile;
