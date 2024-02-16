import Header from '../../components/Header/Header';
import s from './MainPage.module.css';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
const MainPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
