import { AvatarImage, Button, Container, ProfileBio, ProfileCard, ProfileContent, ProfileImage, ProfileImageContainer, ProfileName, Title } from './styled';

const Profile = () => {
  const user = {
    name: 'Roman',
    profile: '18 years',
    image: 'https://via.placeholder.com/300', // Use a larger placeholder for the main image
    avatar: 'https://via.placeholder.com/48' // Use a smaller placeholder for the avatar
  };
  const { name, profile, image, avatar } = user;
  return (
    <>
      <Button primary={false} />
      <Container color="bg-yellow-300">
        {/* <Container> */}
        <Title large={true} >
          Profile Component
        </Title>
        <ProfileCard>
          <ProfileImageContainer>
            <ProfileImage src={image} alt={name} />
            <AvatarImage src={avatar} alt="Avatar" />
          </ProfileImageContainer>
          <ProfileContent>
            <ProfileName>{name}</ProfileName>
            <ProfileBio>{profile}</ProfileBio>
          </ProfileContent>
        </ProfileCard>
      </Container>
    </>
  );
};

export default Profile;
