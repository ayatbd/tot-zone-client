import Menubar from './../../pages/Menubar';
import Footer from '../../pages/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;