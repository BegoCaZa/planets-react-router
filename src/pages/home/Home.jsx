import { StyledHomeContainer, StyledSolarSystemImage } from './home.styles';

const Home = () => {
  return (
    <>
      <StyledHomeContainer>
        <StyledSolarSystemImage
          src='/assets/Solar-sistem.png'
          alt='Solar System'
        />
      </StyledHomeContainer>
    </>
  );
};
export default Home;
