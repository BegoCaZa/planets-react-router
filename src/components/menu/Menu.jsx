import {
  StyledMenuContainer,
  StyledPlanetItem,
  StyledPlanetDot,
  StyledPlanetLink,
  StyledArrow,
  StyledHamburgerMenu,
  StyledHamburgerMenuLine,
  StyledMenuDotAndLabelContainer
} from './menu.styles';
import { PLANETS } from '../../constants/planets';
import { v4 } from 'uuid';
import { useState } from 'react';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  return (
    <>
      <StyledHamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
        <StyledHamburgerMenuLine />
        <StyledHamburgerMenuLine />
        <StyledHamburgerMenuLine />
      </StyledHamburgerMenu>
      <nav>
        <StyledMenuContainer $menuOpen={menuOpen}>
          {PLANETS.map(planet => (
            <StyledPlanetItem key={v4()}>
              <StyledMenuDotAndLabelContainer>
                <StyledPlanetDot color={planet.color} />
                <StyledPlanetLink
                  to={planet.link}
                  onClick={() => setMenuOpen(false)}
                >
                  {planet.name}
                </StyledPlanetLink>
              </StyledMenuDotAndLabelContainer>
              <StyledArrow src='/assets/arrow.png' />
            </StyledPlanetItem>
          ))}
        </StyledMenuContainer>
      </nav>
    </>
  );
};

export default Menu;
