import { Route, Routes } from 'react-router-dom';
import Planet from '../../pages/planet/Planet';
import Home from '../../pages/home/Home';

const Router = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mercury' element={<Planet page='Mercury' />} />
        <Route path='/venus' element={<Planet page='Venus' />} />
        <Route path='/earth' element={<Planet page='Earth' />} />
        <Route path='/mars' element={<Planet page='Mars' />} />
        <Route path='/jupiter' element={<Planet page='Jupiter' />} />
        <Route path='/saturn' element={<Planet page='Saturn' />} />
        <Route path='/uranus' element={<Planet page='Uranus' />} />
        <Route path='/neptune' element={<Planet page='Neptune' />} />
      </Routes>
    </>
  );
};

export default Router;
//  {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
