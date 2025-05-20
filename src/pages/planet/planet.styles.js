import styled from 'styled-components';

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
  width: 85%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  padding: 10px;
`;

const StyledTabMenuOption = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'League Spartan', sans-serif;
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
`;

const StyledPlanetImage = styled.img`
  width: ${({ $width }) => $width};
  margin: 60px 0 60px 0;
`;
const StyledSurfaceImage = styled.img`
  width: 70px;
  position: absolute;
  left: 150px;
  bottom: 280px;
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

  }
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
  StyledSurfaceImage
};
