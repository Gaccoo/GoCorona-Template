import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Layout = () => (
  <div className="App-content">
    <Header />
    <Outlet />
  </div>
);

export default Layout;
