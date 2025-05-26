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
  StyledStatValue,
  StyledPlanetName,
  StyledSurfaceImage,
  StyledPlanetImagesContainer,
  StyledPlanetContent,
  StyledTabMenuVertical,
  StyledTabMenuVerticalButton,
  StyledPlanetInfoDesktop
} from './planet.styles';
import { useState } from 'react';
import { PLANETS_DATA } from '../../constants/planets_data';

const Planet = ({ planet }) => {
  const [activeTab, setActiveTab] = useState('overview');

  //Necesito buscar el planeta en el array de planetas y obtener la data
  const planetData = PLANETS_DATA.find(
    p => p.name.toLowerCase() === planet.toLowerCase()
  );

  const TABS = [
    { key: 'overview', label: 'OVERVIEW', number: '01' },
    { key: 'structure', label: 'STRUCTURE', number: '02' },
    { key: 'surface', label: 'SURFACE', number: '03' }
  ];
  return (
    <StyledPlanetContainer>
      <StyledTabMenu>
        {TABS.map(tab => (
          <StyledTabMenuOption
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            $active={activeTab === tab.key}
            $planet={planet.toLowerCase()}
          >
            {tab.label.toUpperCase()}
          </StyledTabMenuOption>
        ))}
      </StyledTabMenu>

      {/* si no esta en surface, respetara la imagen segun el array */}
      <StyledPlanetImagesContainer>
        {activeTab !== 'surface' ? (
          <StyledPlanetImage
            $width={planetData.imageWidth}
            src={planetData.images[activeTab]}
          />
        ) : (
          <>
            <StyledPlanetImage
              $width={planetData.imageWidth}
              src={planetData.images.overview}
            />
            <StyledSurfaceImage src={planetData.images.surface} />
          </>
        )}
      </StyledPlanetImagesContainer>

      <StyledPlanetContent>
        <StyledPlanetInfoDesktop>
          <StyledPlanetName>{planet.toUpperCase()}</StyledPlanetName>
          <StyledDescriptionContainer>
            <StyledPlanetDescription>
              {planetData.description[activeTab]}
            </StyledPlanetDescription>
          </StyledDescriptionContainer>
          <StyledSourceContainer>
            <StyledSourceTitle>Source:</StyledSourceTitle>
            <StyledSourceLink target='_blank' href={planetData.source}>
              Wikipedia
            </StyledSourceLink>
          </StyledSourceContainer>
        </StyledPlanetInfoDesktop>

        {/* menú vertical solo en desktop */}
        <StyledTabMenuVertical>
          {TABS.map(tab => (
            <StyledTabMenuVerticalButton
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              $active={activeTab === tab.key}
              $planet={planet.toLowerCase()}
            >
              <span>{tab.number}</span>
              {tab.label.toUpperCase()}
            </StyledTabMenuVerticalButton>
          ))}
        </StyledTabMenuVertical>
      </StyledPlanetContent>

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
