import {
  StyledPlanetContainer,
  StyledPlanetImage,
  StyledTabMenu,
  StyledTabMenuOption,
  StyledSourceContainer,
  StyledSourceTitle,
  StyledSourceLink,
  StyledDescriptionContainer,
  StyledPlanetDescription,
  StyledStatBox,
  StyledStatsContainer,
  StyledStatLabel,
  StyledStatValue
} from './planet.styles';
// import { useState } from 'react';
import { PLANETS_DATA } from '../../constants/planets_data';

const Planet = ({ planet }) => {
  // const [activeTab, setActiveTab] = useState('overview');

  //Necesito buscar el planeta en el array de planetas y obtener la data
  const planetData = PLANETS_DATA.find(
    p => p.name.toLowerCase() === planet.toLowerCase()
  );

  // const TABS = ['overview', 'structure', 'surface'];
  return (
    <StyledPlanetContainer>
      <StyledTabMenu>
        <StyledTabMenuOption>OVERVIEW</StyledTabMenuOption>
        <StyledTabMenuOption>STRUCTURE</StyledTabMenuOption>
        <StyledTabMenuOption>SURFACE</StyledTabMenuOption>
      </StyledTabMenu>
      <StyledPlanetImage src={`/assets/planet-${planet}.svg`} />
      <h1>{planet.toUpperCase()}</h1>
      <StyledDescriptionContainer>
        <StyledPlanetDescription>
          {planetData.description.overview}
        </StyledPlanetDescription>
      </StyledDescriptionContainer>
      <StyledSourceContainer>
        <StyledSourceTitle>Source:</StyledSourceTitle>
        <StyledSourceLink target='_blank' href={planetData.source}>
          Wikipedia
        </StyledSourceLink>
      </StyledSourceContainer>

      <StyledStatsContainer>
        <StyledStatBox>
          <StyledStatLabel>ROTATION TIME</StyledStatLabel>
          <StyledStatValue>{planetData.rotation}</StyledStatValue>
        </StyledStatBox>
        <StyledStatBox>
          <StyledStatLabel>REVOLUTION TIME</StyledStatLabel>
          <StyledStatValue>{planetData.revolution}</StyledStatValue>
        </StyledStatBox>
        <StyledStatBox>
          <StyledStatLabel>RADIUS</StyledStatLabel>
          <StyledStatValue>{planetData.radius}</StyledStatValue>
        </StyledStatBox>
        <StyledStatBox>
          <StyledStatLabel>AVERAGE TEMP.</StyledStatLabel>
          <StyledStatValue>{planetData.temperature}</StyledStatValue>
        </StyledStatBox>
      </StyledStatsContainer>
    </StyledPlanetContainer>
  );
};
export default Planet;
