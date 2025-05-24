import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledPlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const StyledTabMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 85%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  padding: 10px 10px 1px 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledTabMenuVertical = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 260px;
  }
`;

const StyledTabMenuOption = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'League Spartan', sans-serif;
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.61)')};
  border-bottom: ${({ $active, $planet }) =>
    $active ? `4px solid ${COLORS[$planet.toLowerCase()]}` : 'none'};
`;

// un contenedor que tenga las dos imagenes y de ahi poner el relative

const StyledPlanetImagesContainer = styled.div`
  position: relative;
`;

const StyledPlanetImage = styled.img`
  width: ${({ $width }) => $width};
  margin: 60px 0 60px 0;
`;
const StyledSurfaceImage = styled.img`
  width: 70px;
  position: absolute;
  left: 50%;
  translate: -50%;
  bottom: 0;
`;

const StyledPlanetName = styled.h1`
  font-family: 'Antonio', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;
const StyledSourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StyledSourceTitle = styled.span`
  font-family: 'League Spartan', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.61);
  font-weight: 300;
`;
const StyledSourceLink = styled.a`
  font-family: 'League Spartan', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-left: 5px;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.61);
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin: 0;
`;
const StyledPlanetDescription = styled.p`
  font-family: 'League Spartan', sans-serif;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #fff;
  margin: 0;

  @media (min-width: 768px) {
    text-align: left;
    width: 100%;
  }
`;

//STATS
const StyledStatsContainer = styled.div`
  width: 85%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StyledStatBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #393950;
  padding: 18px;
  background: transparent;
`;

const StyledStatLabel = styled.span`
  color: #b7b7c7;
  font-family: 'League Spartan', sans-serif;
  font-size: 14px;
`;

const StyledStatValue = styled.span`
  color: #fff;
  font-family: 'Antonio', sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

const StyledPlanetContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 40px;
    width: 85%;
  }
`;

const StyledPlanetInfoDesktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 32px;
    width: 100%;
  }
`;

const StyledTabMenuVerticalButton = styled.button`
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 18px;
  background: ${({ $active, $planet }) =>
    $active ? COLORS[$planet] : 'transparent'};

  color: ${({ $active }) =>
    $active ? '#070724;' : 'rgba(255, 255, 255, 0.8)'};
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: 'League Spartan', sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 18px 24px;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
`;

export {
  StyledPlanetContainer,
  StyledTabMenu,
  StyledTabMenuOption,
  StyledPlanetImage,
  StyledSourceContainer,
  StyledSourceTitle,
  StyledSourceLink,
  StyledDescriptionContainer,
  StyledPlanetDescription,
  StyledStatsContainer,
  StyledStatBox,
  StyledStatLabel,
  StyledStatValue,
  StyledPlanetName,
  StyledSurfaceImage,
  StyledPlanetImagesContainer,
  StyledPlanetContent,
  StyledTabMenuVertical,
  StyledTabMenuVerticalButton,
  StyledPlanetInfoDesktop
};
