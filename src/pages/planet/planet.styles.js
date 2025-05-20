import styled from 'styled-components';

const StyledPlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledTabMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.61);
`;

const StyledTabMenuOption = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'League Spartan', sans-serif;
  font-size: 10px;
  font-weight: 700;
  padding: 10px;
`;

const StyledPlanetImage = styled.img`
  width: 100%;
`;

export {
  StyledPlanetContainer,
  StyledTabMenu,
  StyledTabMenuOption,
  StyledPlanetImage
};
