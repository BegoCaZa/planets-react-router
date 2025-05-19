import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import Menu from './components/menu/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Menu />
      <Router />
    </BrowserRouter>
  );
};

export default App;
