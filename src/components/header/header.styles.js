import styled from 'styled-components';

const StyledHeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.61);
`;

const StyledHamburgerMenu = styled.button`
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

export { StyledHeaderContainer, StyledHamburgerMenu, StyledHamburgerMenuLine };
