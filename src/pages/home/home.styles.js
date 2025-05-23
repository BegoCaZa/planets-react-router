import styled from 'styled-components';

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`;

const StyledSolarSystemImage = styled.img`
  width: 70%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export { StyledHomeContainer, StyledSolarSystemImage };
