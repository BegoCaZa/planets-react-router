import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import Header from './components/header/Header';
// import Menu from './components/menu/Menu';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  console.log(menuOpen);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header handleMenuClick={handleMenuClick} />
      {/* <Menu /> */}

      <Router menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </BrowserRouter>
  );
};

export default App;
