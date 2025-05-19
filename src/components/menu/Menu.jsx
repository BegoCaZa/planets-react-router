import {
  MenuContainer,
  PlanetItem,
  PlanetDot,
  PlanetName,
  Arrow
} from './menu.styles';
import { PLANETS } from '../../constants/planets';
import { v4 } from 'uuid';

const Menu = () => {
  return (
    <MenuContainer>
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
