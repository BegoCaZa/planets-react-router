import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHamburgerMenu = styled.button`
  position: absolute;
  left: 330px;
  top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledHamburgerMenuLine = styled.div`
  width: 20px;
  height: 3px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0;
`;

const StyledMenuContainer = styled.ul`
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  background: #0b0b23;
  z-index: 1;
  padding: 20px 0;
  display: flex;
  translate: ${({ $menuOpen }) => ($menuOpen ? '0' : '-100%')};
  transition: translate 0.3s;
  flex-direction: column;

  @media (min-width: 768px) {
    position: static;
    /* para que siga el flujo de la ubicacion que tiene (como ya no se va a sobreponer) */
    flex-direction: row;
    width: 100%;
    background: transparent;
    padding: 0;
    /* quito la animacion */
    translate: none;
    transition: none;
  }
`;

const StyledPlanetItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    border: none;
  }
`;
const StyledMenuDotAndLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const StyledPlanetDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledPlanetLink = styled(NavLink)`
  color: #fff;
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  font-size: 16px;
  opacity: 0.5;

  &.active {
    opacity: 1;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: 700;
    /* quito el borde inferior */
  }
`;

const StyledArrow = styled.img`
  width: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export {
  StyledMenuContainer,
  StyledPlanetItem,
  StyledPlanetDot,
  StyledPlanetLink,
  StyledArrow,
  StyledHamburgerMenu,
  StyledHamburgerMenuLine,
  StyledMenuDotAndLabelContainer
};
