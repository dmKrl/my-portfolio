import Info from '../../components/Info/Info';
import MarqueeFrontDev from '../../components/Marquee/MarqueeFrontDev';
import Welcome from '../../components/Welcome/Welcome';
import Header from '../../components/Header/Header';
import s from './MainPage.module.css';
const MainPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Header />
                <Welcome />
                <MarqueeFrontDev />
                <Info />
            </div>
        </div>
    );
};

export default MainPage;
