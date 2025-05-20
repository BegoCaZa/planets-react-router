import {
  StyledPlanetContainer,
  StyledPlanetImage,
  StyledTabMenu,
  StyledTabMenuOption
} from './planet.styles';

const Planet = ({ planet }) => {
  return (
    <StyledPlanetContainer>
      <StyledTabMenu>
        <StyledTabMenuOption>OVERVIEW</StyledTabMenuOption>
        <StyledTabMenuOption>STRUCTURE</StyledTabMenuOption>
        <StyledTabMenuOption>SURFACE</StyledTabMenuOption>
      </StyledTabMenu>
      <StyledPlanetImage src={`/assets/planet-${planet}.svg`} />
      <h1>{planet.toUpperCase()}</h1>;
    </StyledPlanetContainer>
  );
};
export default Planet;
