import Menu from '../menu/Menu';
import { StyledHeaderContainer } from './header.styles';

const Header = () => {
  return (
    <>
      <StyledHeaderContainer>
        <h1>THE PLANETS</h1>
        <Menu />
      </StyledHeaderContainer>
    </>
  );
};

export default Header;

// handleMenuClick = { handleMenuClick };
