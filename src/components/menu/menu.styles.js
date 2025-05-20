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
  width: 100vw;
  background: #0b0b23;
  z-index: 100;
  padding: 20px 0;
  display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
  flex-direction: column;
`;

const StyledPlanetItem = styled.li`
  /* {menuOpen && <Menu setMenuOpen={setMenuOpen} */
  display: flex;
  align-items: center;
  padding: 18px 24px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledPlanetDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 24px;
`;

const StyledPlanetLink = styled(NavLink)`
  color: #fff;
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  flex: 1;

  &.active {
    opacity: 1;
  }
`;

const StyledArrow = styled.img`
  width: 10px;
`;

export {
  StyledMenuContainer,
  StyledPlanetItem,
  StyledPlanetDot,
  StyledPlanetLink,
  StyledArrow,
  StyledHamburgerMenu,
  StyledHamburgerMenuLine
};
