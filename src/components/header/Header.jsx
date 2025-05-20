import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeaderContainer } from './header.styles';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <Link to='/'>
        <h1>THE PLANETS</h1>
      </Link>
      <Menu />
    </StyledHeaderContainer>
  );
};

export default Header;

// handleMenuClick = { handleMenuClick };
