import {
  StyledHeaderContainer,
  StyledHamburgerMenu,
  StyledHamburgerMenuLine
} from './header.styles';

const Header = ({ handleMenuClick }) => {
  return (
    <>
      <StyledHeaderContainer>
        <h1>THE PLANETS</h1>
        <StyledHamburgerMenu onClick={handleMenuClick}>
          <StyledHamburgerMenuLine />
          <StyledHamburgerMenuLine />
          <StyledHamburgerMenuLine />
        </StyledHamburgerMenu>
      </StyledHeaderContainer>
    </>
  );
};
export default Header;
