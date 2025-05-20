import {
  MenuContainer,
  PlanetItem,
  PlanetDot,
  PlanetName,
  Arrow,
  StyledHamburgerMenu,
  StyledHamburgerMenuLine
} from './menu.styles';
import { PLANETS } from '../../constants/planets';
import { v4 } from 'uuid';
import { useState } from 'react';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MenuContainer>
      <StyledHamburgerMenu onClick={handleMenuClick}>
        <StyledHamburgerMenuLine />
        <StyledHamburgerMenuLine />
        <StyledHamburgerMenuLine />
      </StyledHamburgerMenu>

      {PLANETS.map(planet => (
        <PlanetItem key={v4()}>
          <PlanetDot color={planet.color} />
          <PlanetName>{planet.name}</PlanetName>
          <Arrow src='/assets/arrow.png' />
        </PlanetItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
