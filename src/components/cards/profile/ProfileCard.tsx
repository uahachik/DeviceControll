import image from '../../../assets/default-profile-image.jpg';
import DisplayImage from '../../shared/image/DisplayImage';
import useReplyData from '../../../hooks/useReplyData';
import mockedUserReply from '../../../assets/fake-reply/user';
import { StyledProfileCard, StyledProfileContent, StyledProfileImageContainer, StyledProfileName } from './styled';

const ProfileCard = () => {
  const { firstName } = useReplyData('user', mockedUserReply).data.user;
  return (
    <StyledProfileCard>
      <StyledProfileImageContainer>
        <DisplayImage src={image} alt={firstName} className="w-auto h-[100px]" />
      </StyledProfileImageContainer>
      <StyledProfileContent>
        <StyledProfileName>{firstName}</StyledProfileName>
      </StyledProfileContent>
    </StyledProfileCard>
  );
};

export default ProfileCard;
