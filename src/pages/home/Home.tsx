import { Container, About, Shortcut, Profile, Header } from './styled';

const Home = () => {
  return (
    <>
      <Header>
        <About to="/about">
          About kjdfhksg osifus oidf osdsod8s98 dgsdysidu fysiudf
        </About>
        <Profile to="/profile">Profile</Profile>
      </Header>
      <Container>
        <Shortcut to="/about">Device</Shortcut>
        <Shortcut to="/login">Login</Shortcut>
      </Container>
    </>
  );
};

export default Home;