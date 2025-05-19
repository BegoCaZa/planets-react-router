import {
  StyledHeaderContainer,
  StyledHamburgerMenu,
  StyledHamburgerMenuLine
} from './header.styles';

const Header = () => {
  return (
    <>
      <StyledHeaderContainer>
        <h1>THE PLANETS</h1>
        <StyledHamburgerMenu>
          <StyledHamburgerMenuLine />
          <StyledHamburgerMenuLine />
          <StyledHamburgerMenuLine />
        </StyledHamburgerMenu>
      </StyledHeaderContainer>
    </>
  );
};
export default Header;
